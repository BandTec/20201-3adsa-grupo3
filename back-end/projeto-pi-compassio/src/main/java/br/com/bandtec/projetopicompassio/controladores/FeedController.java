package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.Publicacao;
import br.com.bandtec.projetopicompassio.repositorios.PublicacaoRepository;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoRepository;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioJuridicoRepository;
import br.com.bandtec.projetopicompassio.utils.FotoHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/feed")
public class FeedController {

    @Autowired
    private PublicacaoRepository publicacaoRepository;
    @Autowired
    private UsuarioFisicoRepository usuarioFisicoRepository;
    @Autowired
    private UsuarioJuridicoRepository usuarioJuridicoRepository;

    @GetMapping("/{idUsuario}")
    public ResponseEntity getByUser(@PathVariable Integer idUsuario, @RequestParam String tipoUsuario) {
        try {
            if (tipoUsuario.toLowerCase().equals("pj")) {
                if (!usuarioJuridicoRepository.findById(idUsuario).isPresent())
                    throw new IllegalArgumentException("ID de usuário jurídico inválido");
            } else if (tipoUsuario.toLowerCase().equals("pf")) {
                if (!usuarioFisicoRepository.findById(idUsuario).isPresent())
                    throw new IllegalArgumentException("ID de usuário físico inválido");
            } else
                throw new IllegalArgumentException("Tipo de usuário inválido");

            List<Publicacao> publicacoes =
                    publicacaoRepository.findAllByIdUsuarioAndTipoUsuario(idUsuario, tipoUsuario.toLowerCase());
            if (publicacoes.isEmpty())
                return ResponseEntity.noContent().build();
            return ResponseEntity.ok(publicacoes);
        } catch (IllegalArgumentException ilEx) {
            return ResponseEntity.badRequest().body(ilEx.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity get(@RequestParam(required = false) Integer idPublicacao) {
        try {
            if (idPublicacao == null) {
                List<Publicacao> publicacoes = publicacaoRepository.findAllOrderByCurtidas();
                if (publicacoes.isEmpty())
                    return ResponseEntity.noContent().build();
                return ResponseEntity.ok(publicacoes);
            }
            Publicacao publicacao = null;
            Optional<Publicacao> optionalPublicacao = publicacaoRepository.findById(idPublicacao);
            if (optionalPublicacao.isPresent())
                publicacao = optionalPublicacao.get();
            else
                throw new IllegalArgumentException("ID de publicação inválido");

            return ResponseEntity.ok(publicacao);
        } catch (IllegalArgumentException ilEx) {
            return ResponseEntity.badRequest().body(ilEx.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity post(@RequestBody @Valid Publicacao novaPublicacao){
        try {
            Integer idUsuario = novaPublicacao.getIdUsuario();
            String tipoUsuario = novaPublicacao.getTipoUsuario();
            if (tipoUsuario.toLowerCase().equals("pj")) {
                if (!usuarioJuridicoRepository.findById(idUsuario).isPresent())
                    throw new IllegalArgumentException("ID de usuário jurídico inválido");
            } else if (tipoUsuario.toLowerCase().equals("pf")) {
                if (!usuarioFisicoRepository.findById(idUsuario).isPresent())
                    throw new IllegalArgumentException("ID de usuário físico inválido");
            } else
                throw new IllegalArgumentException("Tipo de usuário inválido");

            novaPublicacao.setTipoUsuario(tipoUsuario.toLowerCase());
            publicacaoRepository.save(novaPublicacao);
            return ResponseEntity.created(null).build();
        } catch (IllegalArgumentException ilEx) {
            return ResponseEntity.badRequest().body(ilEx.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @PostMapping(value = "/foto", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadFoto(@RequestParam Integer idPublicacao, @RequestBody MultipartFile foto)  {
        try {
            Publicacao publicacao = null;
            Optional<Publicacao> optionalPublicacao = publicacaoRepository.findById(idPublicacao);
            if (optionalPublicacao.isPresent())
                publicacao = optionalPublicacao.get();
            else
                throw new IllegalArgumentException("ID de publicação inválido");

            String imageAsBase64 = FotoHandler.convertToBase64String(foto);
            publicacao.setImagem(imageAsBase64);
            publicacaoRepository.save(publicacao);

            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException ilEx) {
            return ResponseEntity.badRequest().body(ilEx.getMessage());
        } catch (IOException ioEx) {
            return ResponseEntity.status(500).body(ioEx.getMessage());
        } catch (Exception ex){
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }
}
