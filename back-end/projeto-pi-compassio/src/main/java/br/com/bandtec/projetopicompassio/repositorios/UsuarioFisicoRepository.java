package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.dto.UsuarioFisicoDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioFisicoRepository extends JpaRepository<UsuarioFisico, Integer> {

    List<UsuarioFisicoDTO> findAllById(int[] id);

    @Query("select a from usuario_fisico a where a.email = ?1 and a.senha = ?2")
    List<UsuarioFisico> pesquisaEmailESenhaFisico(String email, String senha);
}
