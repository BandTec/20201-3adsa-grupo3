package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        usuarioFisicoPesquisa.setIdUsuarioFisico(id);
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
        atualizacao.setIdUsuarioFisico(id);
        repository.save(atualizacao);
        return ResponseEntity.ok().build();
    }
}
