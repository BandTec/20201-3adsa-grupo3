package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisicoVaga;
import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoRepository;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoVagaRepository;
import br.com.bandtec.projetopicompassio.repositorios.VagaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuariosFisicosVaga")
public class UsuarioFisicoVagaController {

    @Autowired
    private UsuarioFisicoVagaRepository usuarioVagaRepository;

    @Autowired
    private VagaRepository vagaRepository;

    @Autowired
    private UsuarioFisicoRepository usuarioRepository;

    @PutMapping("/curtir")
    public ResponseEntity curtir(@RequestBody UsuarioFisicoVaga usuarioFisicoVaga){
        try {
            Optional<UsuarioFisico> usuarioOptional = usuarioRepository.findById(usuarioFisicoVaga.getFkUsuarioFisico().getId());
            if (!usuarioOptional.isPresent()){
                Optional<Vaga> vagaOptional  = vagaRepository.findById(usuarioFisicoVaga.getFkVaga().getId());
                if (!vagaOptional.isPresent()){
                    UsuarioFisico usuarioCadastrado = usuarioOptional.get();
                    Vaga vagaCadastrada = vagaOptional.get();
                    UsuarioFisicoVaga ufv = this.usuarioVagaRepository.findAllUsuarioFisicoVagaByFkVagaAndFkUsuarioFisico(vagaCadastrada, usuarioCadastrado).get(0);
                    ufv.setCurtido(true);

                    UsuarioFisicoVaga ufvCadastrada = this.usuarioVagaRepository.save(ufv);

                    return ResponseEntity.ok(ufvCadastrada);
                }
                return ResponseEntity.badRequest().body("Vaga não cadastrada");
            }
            return ResponseEntity.badRequest().body("Usuário não cadastrado");
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @PutMapping("/aplicar")
    public ResponseEntity aplicar(@RequestBody UsuarioFisicoVaga usuarioFisicoVaga){
        try {
            Optional<UsuarioFisico> usuarioOptional = usuarioRepository.findById(usuarioFisicoVaga.getFkUsuarioFisico().getId());
            if (!usuarioOptional.isPresent()){
                Optional<Vaga> vagaOptional  = vagaRepository.findById(usuarioFisicoVaga.getFkVaga().getId());
                if (!vagaOptional.isPresent()){
                    UsuarioFisico usuarioCadastrado = usuarioOptional.get();
                    Vaga vagaCadastrada = vagaOptional.get();
                    UsuarioFisicoVaga ufv = this.usuarioVagaRepository.findAllUsuarioFisicoVagaByFkVagaAndFkUsuarioFisico(vagaCadastrada, usuarioCadastrado).get(0);
                    ufv.setAplicado(true);

                    UsuarioFisicoVaga ufvCadastrada = this.usuarioVagaRepository.save(ufv);

                    return ResponseEntity.ok(ufvCadastrada);
                }
                return ResponseEntity.badRequest().body("Vaga não cadastrada");
            }
            return ResponseEntity.badRequest().body("Usuário não cadastrado");
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @PutMapping("/aprovar")
    public ResponseEntity aprovar(@RequestBody UsuarioFisicoVaga usuarioFisicoVaga){
        try {
            Optional<UsuarioFisico> usuarioOptional = usuarioRepository.findById(usuarioFisicoVaga.getFkUsuarioFisico().getId());
            if (!usuarioOptional.isPresent()){
                Optional<Vaga> vagaOptional  = vagaRepository.findById(usuarioFisicoVaga.getFkVaga().getId());
                if (!vagaOptional.isPresent()){
                    UsuarioFisico usuarioCadastrado = usuarioOptional.get();
                    Vaga vagaCadastrada = vagaOptional.get();
                    UsuarioFisicoVaga ufv = this.usuarioVagaRepository.findAllUsuarioFisicoVagaByFkVagaAndFkUsuarioFisico(vagaCadastrada, usuarioCadastrado).get(0);
                    ufv.setAprovado(true);

                    UsuarioFisicoVaga ufvCadastrada = this.usuarioVagaRepository.save(ufv);

                    return ResponseEntity.ok(ufvCadastrada);
                }
                return ResponseEntity.badRequest().body("Vaga não cadastrada");
            }
            return ResponseEntity.badRequest().body("Usuário não cadastrado");
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity cadastrar(@RequestBody UsuarioFisicoVaga usuarioFisicoVaga) {
        try {
            Optional<UsuarioFisico> usuarioOptional  = usuarioRepository.findById(usuarioFisicoVaga.getFkUsuarioFisico().getId());
            if (!usuarioOptional.isPresent())
                return ResponseEntity.badRequest().body("Usuário não cadastrado");
            UsuarioFisico usuarioCadastrado = usuarioOptional.get();

            Optional<Vaga> vagaOptional  = vagaRepository.findById(usuarioFisicoVaga.getFkVaga().getId());
            if (!vagaOptional.isPresent())
                return ResponseEntity.badRequest().body("Vaga não cadastrada");
            Vaga vagaCadastrada = vagaOptional.get();

            UsuarioFisicoVaga ufv = new UsuarioFisicoVaga();
            ufv.setFkUsuarioFisico(usuarioCadastrado);
            ufv.setFkVaga(vagaCadastrada);
            ufv.setDataInscricao(Date.from(Instant.now()));

            UsuarioFisicoVaga ufvCadastrada = this.usuarioVagaRepository.save(ufv);

            return ResponseEntity.ok(ufvCadastrada);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity getBy(
            @RequestParam(required = false) Integer idVaga,
            @RequestParam(required = false) Integer idUsuario
    ) {
        try {
            if (idVaga != null)
                return this.getUFVByVaga(idVaga);
            if (idUsuario != null)
                return this.getUFVByUsuario(idUsuario);

            return ResponseEntity.badRequest().body("Não é possível realizar a requisição sem um parâmetro de busca");
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @GetMapping("/byVaga")
    public ResponseEntity getUFVByVaga(@RequestBody Vaga vaga) {
        try {
            List<UsuarioFisicoVaga> ufv = usuarioVagaRepository.findAllUsuarioFisicoVagaByFkVaga(vaga);
            if (ufv.isEmpty())
                return ResponseEntity.noContent().build();
            return ResponseEntity.ok(ufv);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    private ResponseEntity getUFVByVaga(@RequestParam Integer idVaga) {
        try {
            Vaga vaga;
            Optional<Vaga> vagaOptional = vagaRepository.findById(idVaga);
            if (!vagaOptional.isPresent())
                return ResponseEntity.badRequest().body("Não existe vaga com este ID");
            vaga = vagaOptional.get();
            return this.getUFVByVaga(vaga);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @GetMapping("/byUsuario")
    public ResponseEntity getUFVByUsuario(@RequestBody UsuarioFisico usuario) {
        try {
            List<UsuarioFisicoVaga> ufv = usuarioVagaRepository.findAllUsuarioFisicoVagaByFkUsuarioFisico(usuario);
            if (ufv.isEmpty())
                return ResponseEntity.noContent().build();
            return ResponseEntity.ok(ufv);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    private ResponseEntity getUFVByUsuario(@RequestParam Integer idUsuario) {
        try {
            UsuarioFisico usuario;
            Optional<UsuarioFisico> usuarioOptional = usuarioRepository.findById(idUsuario);
            if (!usuarioOptional.isPresent())
                return ResponseEntity.badRequest().body("Não existe usuário com este ID");
            usuario = usuarioOptional.get();
            return this.getUFVByUsuario(usuario);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }
}
