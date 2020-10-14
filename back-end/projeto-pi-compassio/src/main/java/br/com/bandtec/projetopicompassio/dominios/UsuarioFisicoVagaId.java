package br.com.bandtec.projetopicompassio.dominios;

import java.io.Serializable;

public class UsuarioFisicoVagaId implements Serializable {

    private UsuarioFisico fkIdUsuarioFisico;
    private Vaga fkIdVaga;

    public UsuarioFisicoVagaId(UsuarioFisico fkIdUsuarioFisico, Vaga fkIdVaga) {
        this.fkIdUsuarioFisico = fkIdUsuarioFisico;
        this.fkIdVaga = fkIdVaga;
    }
}
