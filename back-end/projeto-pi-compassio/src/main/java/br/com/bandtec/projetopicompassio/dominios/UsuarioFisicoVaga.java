package br.com.bandtec.projetopicompassio.dominios;

import br.com.bandtec.projetopicompassio.utils.Converter;
import javax.persistence.*;
import java.sql.Date;

@Entity
@IdClass(UsuarioFisicoVagaId.class)
public class UsuarioFisicoVaga {
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
}