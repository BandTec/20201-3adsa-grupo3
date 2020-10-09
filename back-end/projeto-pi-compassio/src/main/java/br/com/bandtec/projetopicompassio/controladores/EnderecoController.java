package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.Endereco;
import br.com.bandtec.projetopicompassio.repositorios.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enderecos")
public class EnderecoController {

    @Autowired
    private EnderecoRepository repository;

    @PostMapping
    public ResponseEntity criar(@RequestBody Endereco novoEndereco){
        repository.save(novoEndereco);
        return ResponseEntity.created(null).build();
    }

    @GetMapping()
    public ResponseEntity consultar(
            @RequestParam(required = false) Integer id,
            @RequestParam(required = false) String cep
    ){
        Endereco enderecoPesquisa = new Endereco();
        enderecoPesquisa.setIdEndereco(id);
        enderecoPesquisa.setCep(cep);

        List<Endereco> resultado = repository.findAll(Example.of(enderecoPesquisa));

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
    public ResponseEntity update(@PathVariable int id, @RequestBody Endereco atualizacao){
        atualizacao.setIdEndereco(id);
        repository.save(atualizacao);
        return ResponseEntity.ok().build();
    }
}
