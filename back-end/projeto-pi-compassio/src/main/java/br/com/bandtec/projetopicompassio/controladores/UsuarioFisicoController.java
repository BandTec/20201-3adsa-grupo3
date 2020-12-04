package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoRepository;
import br.com.bandtec.projetopicompassio.utils.FilaObj;
import br.com.bandtec.projetopicompassio.utils.FotoHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.internet.MimeMessage;
import javax.validation.Valid;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuariosFisicos")
public class UsuarioFisicoController {

    @Autowired
    private UsuarioFisicoRepository repository;

    @Autowired
    private JavaMailSender mailSender;

    private FilaObj<UsuarioFisico> usuariosPendentes = new FilaObj<>(20);
    private List<UsuarioFisico> usuariosNovos = new ArrayList();

    @PostMapping
    public ResponseEntity criar(@RequestBody @Valid UsuarioFisico novoUsuarioFisico){
        if (usuariosPendentes.isFull())
            return ResponseEntity.badRequest().body("A fila de requisições está cheia, por favor aguarde alguns minutos antes de tentar novamente");
        usuariosPendentes.insert(novoUsuarioFisico);
        return ResponseEntity.accepted().build();
    }

    @GetMapping()
    public ResponseEntity consultar(
            @RequestParam(required = false) Integer id,
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String cpf
    ){
        UsuarioFisico usuarioFisicoPesquisa = new UsuarioFisico();
        usuarioFisicoPesquisa.setId(id);
        usuarioFisicoPesquisa.setNome(nome);
        usuarioFisicoPesquisa.setEmail(email);
        usuarioFisicoPesquisa.setCpf(cpf);

        List<UsuarioFisico> resultado = repository.findAll(Example.of(usuarioFisicoPesquisa));

        if (resultado.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(resultado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletar(@PathVariable Integer id){
        if (repository.existsById(id)){
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable int id, @RequestBody UsuarioFisico atualizacao){
        atualizacao.setId(id);
        repository.save(atualizacao);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/foto/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadFoto(@RequestParam Integer idUsuario, @RequestParam MultipartFile arquivo)  {
        try {
            String fotoPath = FotoHandler.upload(arquivo);
            UsuarioFisico usuario = null;
            try {
                usuario = repository.findById(idUsuario).get();
            } catch (Exception ex) {
                throw new IllegalArgumentException("Verifique o id do usuário", ex);
            }
            usuario.setFoto(fotoPath);
            repository.save(usuario);

            return ResponseEntity.created(null).build();
        } catch (IllegalArgumentException ilEx) {
            return ResponseEntity.badRequest().body(ilEx.getMessage());
        } catch (IOException ioEx) {
            return ResponseEntity.status(500).body(ioEx.getMessage());
        } catch (Exception ex){
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @GetMapping(value = "/foto/download", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public ResponseEntity download(@RequestParam Integer idUsuario) {
        try {
            String pathFotoUsuario = null;
            try {
                pathFotoUsuario = repository.findById(idUsuario).get().getFoto();
            } catch (Exception ex) {
                throw new IllegalArgumentException("Verifique o id do usuário", ex);
            }
            byte[] foto = FotoHandler.download(pathFotoUsuario);
            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(foto);
        } catch (FileNotFoundException fEx) {
            return ResponseEntity.badRequest().body(fEx.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @Scheduled(fixedRate = 30000)
    public ResponseEntity sendConfirmationEmail() {
        try {
            UsuarioFisico novoUsuario = usuariosPendentes.poll();
            if (novoUsuario != null) {

                MimeMessage mimeMessage = mailSender.createMimeMessage();

                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
                helper.setSubject("Confirmação de cadastro");
                helper.setText("<div><p>Olá, vimos que você se cadastrou em nosso site!</p>" +
                        "<p>Pedimos que clique neste " +
                        "<a href='http://localhost:8080/usuariosFisicos/confirm?email="+novoUsuario.getEmail()+"'>link</a> " +
                        "para confirmar o cadastro no nosso sistema.</p>" +
                        "<br/>" +
                        "<br/>" +
                        "<a href='//google.com'>Nosso site</a></div>", true);
                helper.setTo(novoUsuario.getEmail());

                mailSender.send(mimeMessage);
                usuariosNovos.add(novoUsuario);
                return ResponseEntity.ok().build();
            }
            return ResponseEntity.notFound().build();
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @GetMapping("/confirm")
    public ResponseEntity confirmSignUp(@RequestParam String email) {
        try {
            Optional<UsuarioFisico> usuarioAprovadoOptional =
                    usuariosNovos.stream().filter(u -> u.getEmail().equals(email)).findFirst();
            if (usuarioAprovadoOptional.isPresent()) {
                repository.save(usuarioAprovadoOptional.get());
                return ResponseEntity.created(null).body(
                        "<div>" +
                                "<div id='header' style='width: 100vw;height: 15vh;background: blue;text-align: center;'>" +
                                    "<h1 style='margin-top: 0px;margin-bottom: 0px;'>Compass.io</h1>" +
                                "</div>" +
                                    "<div>Seu cadastro foi concluído com sucesso! Clique " +
                                    "<a href='https://youtu.be/pzDMi89Do7c'>aqui</a> " +
                                    "para ir para sua conta em nosso site </div>" +
                                "</div>");
            }
            return ResponseEntity.notFound().build();
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }
}
