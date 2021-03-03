package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.Publicacao;
import br.com.bandtec.projetopicompassio.repositorios.PublicacaoRepository;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoRepository;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioJuridicoRepository;
import br.com.bandtec.projetopicompassio.services.ImgurClient;
import br.com.bandtec.projetopicompassio.utils.FotoHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.ResourceBundle;

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

    @Autowired
    private ImgurClient imgurClient;

    @Value("${imgur.client-id}")
    private String clientId;

    @PostMapping(value = "/post", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadFoto(@RequestParam Integer idPublicacao, @RequestBody MultipartFile imagem)  {
        try {
            Publicacao publicacao = null;
            Optional<Publicacao> optionalPublicacao = publicacaoRepository.findById(idPublicacao);
            if (optionalPublicacao.isPresent())
                publicacao = optionalPublicacao.get();
            else
                throw new IllegalArgumentException("ID de publicação inválido");

            String response = imgurClient.postImage(imagem.getBytes(), "Client-ID "+clientId);
            Map<String, Object> jsonResponse = JsonParserFactory.getJsonParser().parseMap(response);

            Integer responseStatus = (Integer)jsonResponse.get("status");
            if (!responseStatus.equals(200))
                return ResponseEntity.status(responseStatus).body("Error on trying to save image");

            Map<String, Object> responseData = (Map<String, Object>)jsonResponse.get("data");
            String link = (String)responseData.get("link");

            publicacao.setImagem(link);
            publicacaoRepository.save(publicacao);

            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException ilEx) {
            return ResponseEntity.badRequest().body(ilEx.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }
}
