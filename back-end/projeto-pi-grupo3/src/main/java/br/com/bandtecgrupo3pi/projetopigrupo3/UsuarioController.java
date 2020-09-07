package br.com.bandtecgrupo3pi.projetopigrupo3;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/registros")
public class UsuarioController {

    //Atributos
    private List<Usuario> usuariosCadastrados;

    //Constructor
    public UsuarioController() {
        usuariosCadastrados = new ArrayList<>();
    }

    //Métodos
    @PostMapping("/voluntario")
    public ResponseEntity addCadastroVoluntario(@RequestBody Voluntario voluntario){
        usuariosCadastrados.add(voluntario);
        return ResponseEntity.status(201).build();
    }

    @PostMapping("/ong")
    public ResponseEntity addCadastroONG(@RequestBody Ong ong){
        usuariosCadastrados.add(ong);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getUsuariosCadastrados() {
        if (usuariosCadastrados.isEmpty()){
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.ok(usuariosCadastrados);
    }

    @GetMapping("/voluntarios")
    public ResponseEntity exibirVoluntarios(){
        List<Usuario> voluntarios = new ArrayList();
        for (Usuario user : usuariosCadastrados){
            if (user instanceof Voluntario){
                voluntarios.add(user);
            }
        }
        if(usuariosCadastrados.size() == 0){
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.ok(voluntarios);
        }

    }

    @GetMapping("/ongs")
    public ResponseEntity exibirONGs(){
        List<Usuario> ongs = new ArrayList();
        for (Usuario user : usuariosCadastrados){
            if (user instanceof Ong){
                ongs.add(user);
            }
        }
        if(usuariosCadastrados.size() == 0){
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.ok(ongs);
        }
    }

    @PutMapping("/voluntario/{id}")
    public ResponseEntity atualizar(@PathVariable int id, @RequestBody Voluntario voluntario){
        if (usuariosCadastrados.size() <= id
            && usuariosCadastrados.get(id - 1) instanceof Voluntario) {
                usuariosCadastrados.set(id - 1, voluntario);
                return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }


    @PutMapping("/ong/{id}")
    public ResponseEntity atualizar(@PathVariable int id, @RequestBody Ong ong){
        if (usuariosCadastrados.size() <= id
                && usuariosCadastrados.get(id - 1) instanceof Ong) {
            usuariosCadastrados.set(id - 1, ong);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
