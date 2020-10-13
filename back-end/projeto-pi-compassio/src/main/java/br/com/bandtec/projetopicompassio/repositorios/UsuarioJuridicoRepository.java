package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioJuridicoRepository extends JpaRepository<UsuarioJuridico, Integer> {

    @Query("select a from UsuarioJuridico a where a. email = ?1 and a. senha = ?2")
    List<UsuarioJuridico> pesquisaEmailESenha(String email, String senha);
}
