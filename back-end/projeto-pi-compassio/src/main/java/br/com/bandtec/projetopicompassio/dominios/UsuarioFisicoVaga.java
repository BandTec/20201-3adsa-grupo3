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

    public String getMinimalInfo() {
        return String.format(
                "%s%040s%040s%s%030s%s%d",
                Converter.DateToString(this.dataInscricao, "ddMMyyyy"),
                this.fkUsuarioFisico.getNome(),
                this.fkUsuarioFisico.getEmail(),
                Converter.DateToString(this.fkUsuarioFisico.getDataNascimento(), "ddMMyyyy"),
                this.fkUsuarioFisico.getFkEndereco().getCidade(),
                this.fkUsuarioFisico.getFkEndereco().getEstado()
                //participou ou só se candidatou?
        );
    }
}