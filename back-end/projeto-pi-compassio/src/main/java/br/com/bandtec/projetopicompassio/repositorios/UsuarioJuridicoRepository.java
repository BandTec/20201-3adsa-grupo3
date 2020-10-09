package br.com.bandtec.projetopicompassio.repositorios;

import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioJuridicoRepository extends JpaRepository<UsuarioJuridico, Integer> {
}
