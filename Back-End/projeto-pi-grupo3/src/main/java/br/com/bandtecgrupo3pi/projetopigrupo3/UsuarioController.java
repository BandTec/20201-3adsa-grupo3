package br.com.bandtecgrupo3pi.projetopigrupo3;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/registro")
public class UsuarioController {

    //Atributos
    private List<Usuario> usuariosCadastrados;

    //Constructor
    public UsuarioController() {
        usuariosCadastrados = new ArrayList<>();
    }

    //Métodos
    @PostMapping("/cadastrar/voluntario")
    public void addCadastroVoluntario(@RequestBody Voluntario voluntario){
        usuariosCadastrados.add(voluntario);
    }

    @PostMapping("/cadastrar/ong")
    public void addCadastroONG(@RequestBody Ong ong){
        usuariosCadastrados.add(ong);
    }

    @GetMapping("/cadastros")
    public List<Usuario> getUsuariosCadastrados() {
        return usuariosCadastrados;
    }

    @GetMapping("/voluntarios")
    public List exibirVoluntarios(){
        List<Usuario> voluntarios = new ArrayList();
        for (Usuario user : usuariosCadastrados){
            if (user instanceof Voluntario){
                voluntarios.add(user);
            }
        }
        return voluntarios;
    }

    @GetMapping("/ongs")
    public List exibirONGs(){
        List<Usuario> ongs = new ArrayList();
        for (Usuario user : usuariosCadastrados){
            if (user instanceof Ong){
                ongs.add(user);
            }
        }
        return ongs;
    }

}
