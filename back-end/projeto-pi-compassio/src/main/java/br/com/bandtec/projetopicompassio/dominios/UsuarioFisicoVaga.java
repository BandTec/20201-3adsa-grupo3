package br.com.bandtec.projetopicompassio.dominios;

import br.com.bandtec.projetopicompassio.utils.Converter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.sql.Date;

@Entity
public class UsuarioFisicoVaga {

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
}