package br.com.bandtec.projetopicompassio.dominios;

import java.io.Serializable;

public class UsuarioFisicoVagaId implements Serializable {

    private Integer fkUsuarioFisico;
    private Integer fkVaga;

    public UsuarioFisicoVagaId(Integer fkUsuarioFisico, Integer fkVaga) {
        this.fkUsuarioFisico = fkUsuarioFisico;
        this.fkVaga = fkVaga;
    }

    public UsuarioFisicoVagaId() {

    }
}
