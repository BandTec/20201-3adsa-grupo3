package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;

@Entity
@IdClass(UsuarioJuridicoVagaId.class)
public class UsuarioJuridicoVaga {

    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_usuario_juridico")
    private UsuarioJuridico fkIdUsuarioJuridico;
    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_vaga")
    private Vaga fkIdVaga;

    public UsuarioJuridico getFkIdUsuarioJuridico() {
        return fkIdUsuarioJuridico;
    }

    public void setFkIdUsuarioJuridico(UsuarioJuridico fkIdUsuarioJuridico) {
        this.fkIdUsuarioJuridico = fkIdUsuarioJuridico;
    }

    public Vaga getFkIdVaga() {
        return fkIdVaga;
    }

    public void setFkIdVaga(Vaga fkIdVaga) {
        this.fkIdVaga = fkIdVaga;
    }
}
