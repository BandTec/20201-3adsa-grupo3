package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.Avaliacao;
import br.com.bandtec.projetopicompassio.repositorios.AvaliacaoRepository;
import org.springframework.data.domain.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RequestMapping("/avaliacoes")
//@RestController
public class AvaliacaoController {
//    @Autowired
//    private AvaliacaoRepository repository;
//
//    @PostMapping
//    public ResponseEntity criar(@RequestBody Avaliacao novaAvaliacao) {
//        repository.save(novaAvaliacao);
//        return ResponseEntity.created(null).build();
//    }
//
//    @GetMapping
//    public ResponseEntity pesquisar(
//            @RequestParam(required = false) Integer id
//    ) {
//        Avaliacao avaliacaoPesquisa = new Avaliacao();
//        avaliacaoPesquisa.setIdAvaliacao(id);
//
//        List<Avaliacao> resultado = repository.findAll(Example.of(avaliacaoPesquisa));
//
//        if (resultado.isEmpty()){
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.ok(resultado);
//    }
//
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity deletar (@PathVariable Integer id){
//        if(repository.existsById(id)){
//            repository.deleteById(id);
//            return ResponseEntity.ok().build();
//        }
//        return ResponseEntity.notFound().build();
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity update(@PathVariable int id, @RequestBody Avaliacao atualizacao){
//        atualizacao.setIdAvaliacao(id);
//        repository.save(atualizacao);
//        return ResponseEntity.ok().build();
//    }
//
//    @GetMapping("/fisico/{id}")
//    public ResponseEntity getPontosFisico (@PathVariable int id){
//        if (repository.notaDoUsuarioFisico(id).equals(null)){
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.ok(repository.notaDoUsuarioFisico(id));
//    }
//
//    @GetMapping("/juridico/{id}")
//    public ResponseEntity getPontosJuridico (@PathVariable int id){
//        if (repository.notaDoUsuarioJuridico(id).equals(null)){
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.ok(repository.notaDoUsuarioJuridico(id));
//    }
}
