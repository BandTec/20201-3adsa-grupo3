package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.Publicacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PublicacaoRepository extends JpaRepository<Publicacao, Integer> {

    List<Publicacao> findAllByIdUsuarioAndTipoUsuario(Integer idUsuario, String tipoUsuario);

    @Query("SELECT p FROM Publicacao p ORDER BY p.curtidas ASC")
    List<Publicacao> findAllOrderByCurtidas();
}
