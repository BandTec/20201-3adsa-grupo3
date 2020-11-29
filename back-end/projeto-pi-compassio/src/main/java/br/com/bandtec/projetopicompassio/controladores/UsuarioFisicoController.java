package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoRepository;
import br.com.bandtec.projetopicompassio.utils.FotoHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/usuariosFisicos")
public class UsuarioFisicoController {

    @Autowired
    private UsuarioFisicoRepository repository;

    @PostMapping
    public ResponseEntity criar(@RequestBody UsuarioFisico novoUsuarioFisico){
        repository.save(novoUsuarioFisico);
        return ResponseEntity.created(null).build();
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
            String fotoPath = FotoHandler.upload(arquivo).replace('\\', '/');

            UsuarioFisico usuario = repository.findById(idUsuario).get();
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
            String pathFotoUsuario = repository.findById(idUsuario).get().getFoto();
            byte[] foto = FotoHandler.download(pathFotoUsuario);
            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(foto);
        } catch (FileNotFoundException fEx) {
            return ResponseEntity.badRequest().body(fEx.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }
}
