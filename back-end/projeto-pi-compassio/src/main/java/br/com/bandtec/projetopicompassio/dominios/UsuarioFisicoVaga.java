package br.com.bandtec.projetopicompassio.dominios;

<<<<<<< HEAD
import br.com.bandtec.projetopicompassio.utils.Converter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
=======
import javax.persistence.*;
>>>>>>> 9ddf970675f0639958ae50ce00fe4a42af2fc0bc
import java.sql.Date;

@Entity
@IdClass(UsuarioFisicoVagaId.class)
public class UsuarioFisicoVaga {

<<<<<<< HEAD
    @ManyToOne
    @JoinColumn(name = "fk_usuario_fisico", nullable = false)
    private UsuarioFisico fkUsuarioFisico;

    @ManyToOne
    @JoinColumn(name = "fk_vaga", nullable = false)
    private Vaga fkVaga;

    @Column(nullable = false)
    private Date dataCadastro;

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

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    /*
    public String getMinimalInfo() {
        return String.format(
                "%s%040s%040s%s%030s%s%d",
                Converter.DateToString(this.dataCadastro, "ddMMyyyy"),
                this.fkUsuarioFisico.getNome(),
                this.fkUsuarioFisico.getEmail(),
                Converter.DateToString(this.fkUsuarioFisico.getDataNascimento(), "ddMMyyyy"),
                this.fkUsuarioFisico.getEndereco().getCidade(),
                this.fkUsuarioFisico.getEndereco().getEstado(),
                //participou ou só se candidatou?
        );
    }
    */
=======
    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_usuario_fisico")
    private UsuarioFisico fkIdUsuarioFisico;
    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_vaga")
    private Vaga fkIdVaga;
    @Column(name = "data_inscricao")
    private Date dataInscricao;

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

    public Date getDataInscricao() {
        return dataInscricao;
    }

    public void setDataInscricao(Date dataInscricao) {
        this.dataInscricao = dataInscricao;
    }
>>>>>>> 9ddf970675f0639958ae50ce00fe4a42af2fc0bc
}