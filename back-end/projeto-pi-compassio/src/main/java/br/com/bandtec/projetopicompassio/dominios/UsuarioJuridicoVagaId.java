package br.com.bandtec.projetopicompassio.dominios;

import java.io.Serializable;

public class UsuarioJuridicoVagaId implements Serializable {

    private UsuarioJuridico fkIdUsuarioJuridico;
    private Vaga fkIdVaga;

    public UsuarioJuridicoVagaId(UsuarioJuridico fkIdUsuarioJuridico, Vaga fkIdVaga) {
        this.fkIdUsuarioJuridico = fkIdUsuarioJuridico;
        this.fkIdVaga = fkIdVaga;
    }
}
