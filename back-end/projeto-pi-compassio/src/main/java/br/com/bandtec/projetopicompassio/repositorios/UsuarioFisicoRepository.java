package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dto.UsuarioFisicoDTO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioFisicoRepository extends JpaRepository<UsuarioFisico, Integer> {

    List<UsuarioFisicoDTO> findAllByIdUsuarioFisico(int[] id);
}
