package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.dto.VagaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VagaRepository extends JpaRepository<Vaga, Integer> {

    @Query("SELECT new br.com.bandtec.projetopicompassio.dto.VagaDTO(v.titulo, v.dataInicio) " +
            "FROM Vaga v WHERE v.fkUsuarioJuridico LIKE ?1")
    List<VagaDTO> findAllVagasSimplesByUsuarioJuridico(UsuarioJuridico usuarioJuridico);

    Vaga findIdVagaByTituloAndFkUsuarioJuridico(String titulo, UsuarioJuridico fkUsuarioJuridico);
}
