package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;

@Entity
public class UsuarioFisicoVaga {

    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_usuario_fisico")
    private UsuarioFisico fkIdUsuarioFisico;
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_vaga")
    private Vaga fkIdVaga;

    public UsuarioFisico getFkIdUsuarioFisico() {
        return fkIdUsuarioFisico;
    }

    public void setFkIdUsuarioFisico(UsuarioFisico fkIdUsuarioFisico) {
        this.fkIdUsuarioFisico = fkIdUsuarioFisico;
    }

    public Vaga getFkIdVaga() {
        return fkIdVaga;
    }

    public void setFkIdVaga(Vaga fkIdVaga) {
        this.fkIdVaga = fkIdVaga;
    }
}