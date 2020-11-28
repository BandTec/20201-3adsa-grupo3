package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioJuridicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuariosJuridicos")
public class UsuarioJuridicoController {

    @Autowired
    private UsuarioJuridicoRepository repository;

    @PostMapping
    public ResponseEntity criar(@RequestBody UsuarioJuridico novoUsuarioJuridico){
        UsuarioJuridico usuarioCriado = repository.save(novoUsuarioJuridico);
        return ResponseEntity.created(null).body(usuarioCriado);
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

        List<UsuarioJuridico> resultado = repository.findAll(Example.of(usuarioJuridicoPesquisa));

        if (resultado.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(resultado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletar(@PathVariable int id){
        if (repository.existsById(id)){
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable int id, @RequestBody UsuarioJuridico atualizacao){
        atualizacao.setId(id);
        repository.save(atualizacao);
        return ResponseEntity.ok().build();
    }
}
