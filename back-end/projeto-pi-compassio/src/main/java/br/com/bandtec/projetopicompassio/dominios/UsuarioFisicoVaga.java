package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UsuarioFisicoVaga {

    @Id
    @Column(nullable = false)
    private Integer fkIdUsuarioFisico;
    @Column(nullable = false)
    private Integer fkIdVaga;

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
}