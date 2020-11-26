package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.Auth;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoRepository;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioJuridicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/autenticacoes")
public class AuthController {

    @Autowired
    private UsuarioJuridicoRepository usuarioJuridicoRepository;

    @Autowired
    private UsuarioFisicoRepository usuarioFisicoRepository;

    @PostMapping("/auth")
    public ResponseEntity autenticar(@RequestBody Auth authentic, HttpSession session){
        if (usuarioJuridicoRepository.pesquisaEmailESenhaJuridico(authentic.getEmail(), authentic.getSenha()).size() > 0){
            UsuarioJuridico atualJuridico = usuarioJuridicoRepository.pesquisaEmailESenhaJuridico(authentic.getEmail(), authentic.getSenha()).get(0);
            atualJuridico.setLogado(true);
            session.setAttribute("nomeDaOng", atualJuridico.getNomeOng());
            usuarioJuridicoRepository.save(atualJuridico);
            return ResponseEntity.ok(atualJuridico);
        }
        if (usuarioFisicoRepository.pesquisaEmailESenhaFisico(authentic.getEmail(), authentic.getSenha()).size() > 0){
            UsuarioFisico atualFisico = usuarioFisicoRepository.pesquisaEmailESenhaFisico(authentic.getEmail(), authentic.getSenha()).get(0);
            atualFisico.setLogado(true);
            session.setAttribute("nomeDoVoluntario", atualFisico.getNome());
            usuarioFisicoRepository.save(atualFisico);
            return ResponseEntity.ok(atualFisico);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/{id}")
    public ResponseEntity logout(@PathVariable int id, HttpSession session){

        if (session.getAttribute("nomeDaOng") == null){
            UsuarioFisico userPesquisa = new UsuarioFisico();

            userPesquisa.setIdUsuarioFisico(id);

            UsuarioFisico user = usuarioFisicoRepository.findAll(Example.of(userPesquisa)).get(0);

            if (user.getLogado() == true){
                user.setLogado(false);
                usuarioFisicoRepository.save(user);
                return ResponseEntity.ok(user);
            }
        }
        if (session.getAttribute("nomeDoVoluntario") == null){
            UsuarioJuridico userPesquisa = new UsuarioJuridico();

            userPesquisa.setIdUsuarioJuridico(id);

            UsuarioJuridico user = usuarioJuridicoRepository.findAll(Example.of(userPesquisa)).get(0);

            if (user.getLogado() == true){
                user.setLogado(false);
                usuarioJuridicoRepository.save(user);
                return ResponseEntity.ok(user);
            }
        }
        return ResponseEntity.notFound().build();
    }

}
