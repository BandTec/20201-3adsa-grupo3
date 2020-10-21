package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dto.VagaDTO;
import br.com.bandtec.projetopicompassio.dto.VoluntarioInscritoDTO;
import br.com.bandtec.projetopicompassio.dto.VoluntariosDeUmaVagaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioFisicoRepository extends JpaRepository<UsuarioFisico, Integer> {

    @Query(value =
            "SELECT v FROM UsuarioFisico v WHERE v.idUsuarioFisico = " +
                   "(SELECT u.fkUsuarioFisico.idUsuarioFisico FROM UsuarioFisicoVaga u) AND" +
                   "(SELECT t.fkVaga.idVaga FROM UsuarioFisicoVaga t) = " +
                   "(SELECT s.idVaga FROM Vaga s WHERE s.titulo LIKE ?1")
    List<VoluntarioInscritoDTO> findAllVoluntariosSimplesInscritos(String nomeDaVaga);
}
