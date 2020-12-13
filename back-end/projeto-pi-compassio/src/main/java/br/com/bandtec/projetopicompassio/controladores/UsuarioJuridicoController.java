package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.Endereco;
import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.repositorios.EnderecoRepository;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioJuridicoRepository;
import br.com.bandtec.projetopicompassio.utils.FilaObj;
import br.com.bandtec.projetopicompassio.utils.FotoHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.internet.MimeMessage;
import javax.validation.Valid;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuariosJuridicos")
public class UsuarioJuridicoController {

    @Autowired
    private UsuarioJuridicoRepository usuarioRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private JavaMailSender mailSender;

    private FilaObj<UsuarioJuridico> usuariosPendentes = new FilaObj<>(20);
    private List<UsuarioJuridico> usuariosNovos = new ArrayList();

    @PostMapping
    public ResponseEntity criar(@RequestBody @Valid UsuarioJuridico novoUsuarioJuridico){
        try {
            if (usuarioRepository.findByEmail(novoUsuarioJuridico.getEmail()) != null)
                return ResponseEntity.badRequest().body("Usuário já cadastrado");
            if (usuariosPendentes.isFull())
                return ResponseEntity.badRequest().body("A fila de requisições está cheia, por favor aguarde alguns minutos antes de tentar novamente");
            usuariosPendentes.insert(novoUsuarioJuridico);
            return ResponseEntity.accepted().build();
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity consultar(
            @RequestParam(required = false) Integer id,
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String cnpj,
            @RequestParam(required = false) String causa
    ){
        UsuarioJuridico usuarioJuridicoPesquisa = new UsuarioJuridico();
        usuarioJuridicoPesquisa.setId(id);
        usuarioJuridicoPesquisa.setNomeOng(nome);
        usuarioJuridicoPesquisa.setEmail(email);
        usuarioJuridicoPesquisa.setCnpj(cnpj);
        usuarioJuridicoPesquisa.setCausa(causa);

        List<UsuarioJuridico> resultado = usuarioRepository.findAll(Example.of(usuarioJuridicoPesquisa));

        if (resultado.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(resultado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletar(@PathVariable int id){
        if (usuarioRepository.existsById(id)){
            usuarioRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable int id, @RequestBody UsuarioJuridico atualizacao){
        atualizacao.setId(id);
        usuarioRepository.save(atualizacao);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/foto", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadFoto(@RequestParam Integer idUsuario, @RequestBody MultipartFile foto)  {
        try {
            String fotoPath = FotoHandler.upload(foto);
            UsuarioJuridico usuario = null;
            try {
                usuario = usuarioRepository.findById(idUsuario).get();
            } catch (Exception ex) {
                throw new IllegalArgumentException("Verifique o id do usuário", ex);
            }
            usuario.setFoto(fotoPath);
            usuarioRepository.save(usuario);

            return ResponseEntity.created(null).build();
        } catch (IllegalArgumentException ilEx) {
            return ResponseEntity.badRequest().body(ilEx.getMessage());
        } catch (IOException ioEx) {
            return ResponseEntity.status(500).body(ioEx.getMessage());
        } catch (Exception ex){
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @GetMapping(value = "/foto", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public ResponseEntity download(@RequestParam Integer idUsuario) {
        try {
            String pathFotoUsuario = null;
            try {
                pathFotoUsuario = usuarioRepository.findById(idUsuario).get().getFoto();
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

    @GetMapping(value = "/foto/base64")
    public ResponseEntity getFotoAsBase64(@RequestParam Integer idUsuario) {
        try {
            ResponseEntity response = this.download(idUsuario);
            byte[] foto = (byte[])response.getBody();
            byte[] fotoBase64 = Base64.getEncoder().encode(foto);
            return ResponseEntity.ok().body(fotoBase64);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @Scheduled(fixedRate = 30000)
    public ResponseEntity sendConfirmationEmail() {
        try {
            UsuarioJuridico novoUsuario = usuariosPendentes.poll();
            if (novoUsuario != null) {

                MimeMessage mimeMessage = mailSender.createMimeMessage();

                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
                helper.setSubject("Confirmação de cadastro");
                helper.setText("<div><p>Olá, vimos que você se cadastrou em nosso site!</p>" +
                        "<p>Pedimos que clique neste " +
                        "<a href='http://localhost:8080/usuariosJuridicos/confirm?email="+novoUsuario.getEmail()+"'>link</a> " +
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
            Optional<UsuarioJuridico> usuarioAprovadoOptional =
                    usuariosNovos.stream().filter(u -> u.getEmail().equals(email)).findFirst();
            if (usuarioAprovadoOptional.isPresent()) {
                Endereco e = usuarioAprovadoOptional.get().getFkEndereco();
                enderecoRepository.save(e);
                usuarioRepository.save(usuarioAprovadoOptional.get());
                return ResponseEntity.created(null).body(
                        "<div>" +
                                "<div id='header' style='width: 100vw;height: 15vh;background: blue;text-align: center;'>" +
                                "<h1 style='margin-top: 0px;margin-bottom: 0px;'>Compass.io</h1>" +
                                "</div>" +
                                "<div>Seu cadastro foi concluído com sucesso! Clique " +
                                "<a href='http://localhost:3000/signin'>aqui</a> " +
                                "para ir para sua conta em nosso site </div>" +
                                "</div>");
            }
            return ResponseEntity.notFound().build();
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }
}
