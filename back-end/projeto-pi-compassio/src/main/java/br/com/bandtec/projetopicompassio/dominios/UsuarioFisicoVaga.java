package br.com.bandtec.projetopicompassio.dominios;

import br.com.bandtec.projetopicompassio.utils.Converter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class UsuarioFisicoVaga {

    @Id
    @Column(nullable = false)
    private Integer fkIdUsuarioFisico;
    @Column(nullable = false)
    private Integer fkIdVaga;
    @Column(nullable = false)
    private Date dataCadastro;

    public Integer getFkIdUsuarioFisico() {
        return fkIdUsuarioFisico;
    }

    public void setFkIdUsuarioFisico(Integer fkIdUsuarioFisico) {
        this.fkIdUsuarioFisico = fkIdUsuarioFisico;
    }

    public Integer getFkIdVaga() {
        return fkIdVaga;
    }

    public void setFkIdVaga(Integer fkIdVaga) {
        this.fkIdVaga = fkIdVaga;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

   /* public String getMinimalInfo() {
        return String.format(
                "%s%040s%040s%s%030s%s%d",
                Converter.DateToString(this.dataCadastro, "ddMMyyyy"),
                this.fkIdUsuarioFisico
        );
    }
    */
}