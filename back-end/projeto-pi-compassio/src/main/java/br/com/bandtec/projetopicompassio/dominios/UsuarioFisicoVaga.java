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

    private Boolean curtido;

    private Boolean aprovado;

    private Boolean aplicado;

    @Column(name = "data_inscricao")
    private Date dataInscricao;

    public Boolean getAplicado() {
        return aplicado;
    }

    public void setAplicado(Boolean aplicado) {
        this.aplicado = aplicado;
    }

    public Boolean getCurtido() {
        return curtido;
    }

    public void setCurtido(Boolean curtido) {
        this.curtido = curtido;
    }

    public Boolean getAprovado() {
        return aprovado;
    }

    public void setAprovado(Boolean aprovado) {
        this.aprovado = aprovado;
    }

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