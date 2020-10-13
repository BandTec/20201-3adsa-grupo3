package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Integer> {

    @Query("SELECT AVG(pontuacao) FROM Avaliacao WHERE fkIdUsuarioFisico = ?1")
    List<Avaliacao> notaDoUsuarioFisico(Integer id);

    @Query("SELECT AVG(pontuacao) FROM Avaliacao WHERE fkIdUsuarioJuridico = ?1")
    List<Avaliacao> notaDoUsuarioJuridico(Integer id);
}
