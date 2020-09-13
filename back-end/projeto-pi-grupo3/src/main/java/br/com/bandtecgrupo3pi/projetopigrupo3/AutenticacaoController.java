package br.com.bandtecgrupo3pi.projetopigrupo3;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AutenticacaoController {

    @PostMapping("/ong/login")
    public ResponseEntity logar(@RequestBody Ong ong) {
        if (BancoDeDados.Usuarios.contains(ong)) {
            Usuario usuario = BancoDeDados.Usuarios.getByEmail(ong.getEmail());
            if (usuario.isLogado())
                return ResponseEntity.status(403).body("Faça o logoff para entrar com outra conta");
            else {
                usuario.logar();
                return ResponseEntity.status(200).build();
            }
        } else
            return ResponseEntity.status(403).body("Usuário não cadastrado");
    }

    @PostMapping("/voluntario/login")
    public ResponseEntity logar(@RequestBody Voluntario voluntario) {
        if (BancoDeDados.Usuarios.contains(voluntario)) {
            Usuario usuario = BancoDeDados.Usuarios.getByEmail(voluntario.getEmail());
            if (usuario.isLogado())
                return ResponseEntity.status(403).body("Faça o logoff para entrar com outra conta");
            else {
                usuario.logar();
                return ResponseEntity.status(200).build();
            }
        } else
            return ResponseEntity.status(403).body("Usuário não cadastrado");
    }

    @PostMapping("/voluntario/logoff")
    public ResponseEntity sair(@RequestBody Voluntario voluntario) {
        if (BancoDeDados.Usuarios.contains(voluntario)) {
            Usuario usuario = BancoDeDados.Usuarios.getByEmail(voluntario.getEmail());
            usuario.sair();
            return ResponseEntity.status(200).build();
        } else
            return ResponseEntity.status(403).body("Usuário não cadastrado");
    }

    @PostMapping("/ong/logoff")
    public ResponseEntity sair(@RequestBody Ong ong) {
        if (BancoDeDados.Usuarios.contains(ong)) {
            Usuario usuario = BancoDeDados.Usuarios.getByEmail(ong.getEmail());
            usuario.sair();
            return ResponseEntity.status(200).build();
        } else
            return ResponseEntity.status(403).body("Usuário não cadastrado");
    }
}
