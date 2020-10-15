package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;

@Entity
@IdClass(UsuarioJuridicoVagaId.class)
public class UsuarioJuridicoVaga {

    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_usuario_juridico")
    private UsuarioJuridico fkUsuarioJuridico;

    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_vaga")
    private Vaga fkVaga;

    public UsuarioJuridico getFkUsuarioJuridico() {
        return fkUsuarioJuridico;
    }

    public void setFkUsuarioJuridico(UsuarioJuridico fkUsuarioJuridico) {
        this.fkUsuarioJuridico = fkUsuarioJuridico;
    }

    public Vaga getFkVaga() {
        return fkVaga;
    }

    public void setFkVaga(Vaga fkVaga) {
        this.fkVaga = fkVaga;
    }
}
