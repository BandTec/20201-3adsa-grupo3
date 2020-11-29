package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.repositorios.VagaRepository;
import br.com.bandtec.projetopicompassio.utils.FotoHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequestMapping("/vagas")
public class VagaController {

    @Autowired
    private VagaRepository repository;

    @PostMapping
    public ResponseEntity criar(@RequestBody Vaga novaVaga){
        Vaga vaga = repository.save(novaVaga);
        return ResponseEntity.created(null).body(vaga);
    }

    @GetMapping()
    public ResponseEntity consultar(
            @RequestParam(required = false) Integer id,
            @RequestParam(required = false) String titulo,
            @RequestParam(required = false) String causa,
            @RequestParam(required = false) String area,
            @RequestParam(required = false) String requisitos
    ){
        Vaga vagaPesquisa = new Vaga();
        vagaPesquisa.setIdVaga(id);
        vagaPesquisa.setTitulo(titulo);
        vagaPesquisa.setCausa(causa);

        List<Vaga> resultado = repository.findAll(Example.of(vagaPesquisa));

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
    public ResponseEntity update(@PathVariable int id, @RequestBody Vaga atualizacao){
        atualizacao.setIdVaga(id);
        repository.save(atualizacao);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/foto/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadFoto(@RequestParam Integer idVaga, @RequestParam MultipartFile arquivo)  {
        try {
            String fotoPath = FotoHandler.upload(arquivo).replace('\\', '/');

            Vaga vaga = repository.findById(idVaga).get();
            vaga.setFoto(fotoPath);
            repository.save(vaga);

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
    public ResponseEntity download(@RequestParam Integer idVaga) {
        try {
            String pathFotoVaga = repository.findById(idVaga).get().getFoto();
            byte[] foto = FotoHandler.download(pathFotoVaga);
            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(foto);
        } catch (FileNotFoundException fEx) {
            return ResponseEntity.badRequest().body(fEx.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }
}
