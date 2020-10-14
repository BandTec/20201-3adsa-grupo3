package br.com.bandtec.projetopicompassio.dominios;

import java.io.Serializable;

public class AvaliacaoId implements Serializable {

    private Integer idAvaliacao;
    private UsuarioFisico fkIdUsuarioFisico;
    private UsuarioJuridico fkIdUsuarioJuridico;

    public AvaliacaoId(Integer idAvaliacao, UsuarioFisico fkIdUsuarioFisico, UsuarioJuridico fkIdUsuarioJuridico) {
        this.idAvaliacao = idAvaliacao;
        this.fkIdUsuarioFisico = fkIdUsuarioFisico;
        this.fkIdUsuarioJuridico = fkIdUsuarioJuridico;
    }
}
