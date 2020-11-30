package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.repositorios.VagaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vagas")
public class VagaController {

    @Autowired
    private VagaRepository repository;

    @PostMapping
    public ResponseEntity criar(@RequestBody Vaga novoVaga){
        repository.save(novoVaga);
        return ResponseEntity.created(null).build();
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
}
