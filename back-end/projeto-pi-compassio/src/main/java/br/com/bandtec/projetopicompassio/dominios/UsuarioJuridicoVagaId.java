package br.com.bandtec.projetopicompassio.dominios;

import java.io.Serializable;

public class UsuarioJuridicoVagaId implements Serializable {

    private UsuarioJuridico fkUsuarioJuridico;
    private Vaga fkVaga;

    public UsuarioJuridicoVagaId(UsuarioJuridico fkUsuarioJuridico, Vaga fkVaga) {
        this.fkUsuarioJuridico = fkUsuarioJuridico;
        this.fkVaga = fkVaga;
    }
}
