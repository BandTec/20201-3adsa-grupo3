package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisicoVaga;
import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.dto.VoluntarioInscritoDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioFisicoVagaRepository extends JpaRepository<UsuarioFisicoVaga, Integer> {

    List<UsuarioFisicoVaga> findAllUsuarioFisicoVagaByFkVaga(Vaga fkVaga);

    List<UsuarioFisicoVaga> findAllUsuarioFisicoVagaByFkUsuarioFisico(UsuarioFisico usuarioFisico);

    List<UsuarioFisicoVaga> findAllUsuarioFisicoVagaByFkVagaAndFkUsuarioFisico(Vaga fkVaga, UsuarioFisico usuarioFisico);
}