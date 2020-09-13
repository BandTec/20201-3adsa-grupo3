package br.com.bandtecgrupo3pi.projetopigrupo3;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/registros")
public class UsuarioController {

    @PostMapping("/voluntario")
    public ResponseEntity add(@RequestBody Voluntario voluntario){
        BancoDeDados.Usuarios.add(voluntario);
        return ResponseEntity.status(201).build();
    }

    @PostMapping("/ong")
    public ResponseEntity add(@RequestBody Ong ong){
        BancoDeDados.Usuarios.add(ong);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getUsuariosCadastrados() {
        if (BancoDeDados.Usuarios.isEmpty())
            return ResponseEntity.status(204).build();
        return ResponseEntity.ok(BancoDeDados.Usuarios.all());
    }

    @GetMapping("/voluntarios")
    public ResponseEntity exibirVoluntarios(){
        List<Usuario> voluntarios = new ArrayList();
        for (Usuario user : BancoDeDados.Usuarios.all()){
            if (user instanceof Voluntario)
                voluntarios.add(user);
        } if(BancoDeDados.Usuarios.size() == 0)
            return ResponseEntity.status(404).build();
        else
            return ResponseEntity.ok(voluntarios);
    }

    @GetMapping("/ongs")
    public ResponseEntity exibirONGs(){
        List<Usuario> ongs = new ArrayList();
        for (Usuario user : BancoDeDados.Usuarios.all()){
            if (user instanceof Ong)
                ongs.add(user);
        }
        if(BancoDeDados.Usuarios.size() == 0)
            return ResponseEntity.status(404).build();
        else
            return ResponseEntity.ok(ongs);
    }

    @PutMapping("/voluntario/{id}")
    public ResponseEntity atualizar(@PathVariable int id, @RequestBody Voluntario voluntario){
        if (BancoDeDados.Usuarios.size() < id && BancoDeDados.Usuarios.get(id - 1) instanceof Voluntario) {
            BancoDeDados.Usuarios.set(id - 1, voluntario);
            return ResponseEntity.ok().build();
        } else
            return ResponseEntity.status(404).build();
    }

    @PutMapping("/ong/{id}")
    public ResponseEntity atualizar(@PathVariable int id, @RequestBody Ong ong) {
        if (BancoDeDados.Usuarios.size() < id && BancoDeDados.Usuarios.get(id - 1) instanceof Ong) {
            BancoDeDados.Usuarios.set(id - 1, ong);
            return ResponseEntity.ok().build();
        } else
            return ResponseEntity.status(404).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity remover(@PathVariable int id) {
        if (BancoDeDados.Usuarios.get(id-1) != null) {
            BancoDeDados.Usuarios.remove(id-1);
            return ResponseEntity.status(200).build();
        } return ResponseEntity.status(404).build();
    }
}
