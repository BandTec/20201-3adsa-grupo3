package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.dto.VagaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VagaRepository extends JpaRepository<Vaga, Integer> {

    @Query(value =
            "SELECT v FROM Vaga v WHERE v.fkUsuarioJuridico_id = " +
                    "(SELECT u.id FROM UsuarioJuridico u WHERE u.nome LIKE ?1)")
    List<VagaDTO> findAllVagasSimplesByNomeDaOng(String nomeDaOng);

}
