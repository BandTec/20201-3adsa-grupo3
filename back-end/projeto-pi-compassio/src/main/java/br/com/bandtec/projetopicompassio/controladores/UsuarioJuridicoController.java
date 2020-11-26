package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.Auth;
import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioJuridicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.SessionCookieConfig;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/usuarioJuridicos")
public class UsuarioJuridicoController {

    @Autowired
    private UsuarioJuridicoRepository repository;

    @PostMapping
    public ResponseEntity criar(@RequestBody UsuarioJuridico novoUsuarioJuridico){
        repository.save(novoUsuarioJuridico);
        return ResponseEntity.created(null).build();
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
        usuarioJuridicoPesquisa.setIdUsuarioJuridico(id);
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
        atualizacao.setIdUsuarioJuridico(id);
        repository.save(atualizacao);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/auth")
    public ResponseEntity autenticar(@RequestBody Auth authentic, HttpSession session){
        if (repository.pesquisaEmailESenhaJuridico(authentic.getEmail(), authentic.getSenha()).isEmpty()){
            return ResponseEntity.notFound().build();
        }
        UsuarioJuridico atual = repository.pesquisaEmailESenhaJuridico(authentic.getEmail(), authentic.getSenha()).get(0);
        atual.setLogado(true);
        session.setAttribute("nomeDaOng", atual.getNomeOng());
        repository.save(atual);
        return ResponseEntity.ok(atual);
    }

    @PostMapping("/{id}")
    public ResponseEntity logout(@PathVariable int id){

        UsuarioJuridico userPesquisa = new UsuarioJuridico();

        userPesquisa.setIdUsuarioJuridico(id);

        UsuarioJuridico user = repository.findAll(Example.of(userPesquisa)).get(0);

        if (user.getLogado() == true){
            user.setLogado(false);
            repository.save(user);
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }
}
