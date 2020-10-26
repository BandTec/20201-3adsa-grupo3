package br.com.bandtec.projetopicompassio.dominios;

import java.io.Serializable;

public class AvaliacaoId implements Serializable {

    private Integer idAvaliacao;
    private UsuarioFisico fkUsuarioFisico;
    private UsuarioJuridico fkUsuarioJuridico;

    public AvaliacaoId(Integer idAvaliacao, UsuarioFisico fkUsuarioFisico, UsuarioJuridico fkUsuarioJuridico) {
        this.idAvaliacao = idAvaliacao;
        this.fkUsuarioFisico = fkUsuarioFisico;
        this.fkUsuarioJuridico = fkUsuarioJuridico;
    }

    public AvaliacaoId(){}
}
