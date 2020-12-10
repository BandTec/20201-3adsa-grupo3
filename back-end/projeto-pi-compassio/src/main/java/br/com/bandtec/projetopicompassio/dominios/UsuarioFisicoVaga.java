package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "usuario_fisico_vaga")
@IdClass(UsuarioFisicoVagaId.class)
public class UsuarioFisicoVaga {

    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_usuario_fisico")
    private UsuarioFisico fkUsuarioFisico;

    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_vaga")
    private Vaga fkVaga;

    @Column(name = "data_inscricao")
    private Date dataInscricao;

    public UsuarioFisico getFkUsuarioFisico() {
        return fkUsuarioFisico;
    }

    public void setFkUsuarioFisico(UsuarioFisico fkUsuarioFisico) {
        this.fkUsuarioFisico = fkUsuarioFisico;
    }

    public Vaga getFkVaga() {
        return fkVaga;
    }

    public void setFkVaga(Vaga fkVaga) {
        this.fkVaga = fkVaga;
    }

    public Date getDataInscricao() {
        return dataInscricao;
    }

    public void setDataInscricao(Date dataInscricao) {
        this.dataInscricao = dataInscricao;
    }
}