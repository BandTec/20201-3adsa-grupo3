package br.com.bandtec.projetopicompassio.dominios;

import java.io.Serializable;

public class UsuarioFisicoVagaId implements Serializable {

    private UsuarioFisico fkUsuarioFisico;
    private Vaga fkVaga;

    public UsuarioFisicoVagaId(UsuarioFisico fkUsuarioFisico, Vaga fkVaga) {
        this.fkUsuarioFisico = fkUsuarioFisico;
        this.fkVaga = fkVaga;
    }
}
