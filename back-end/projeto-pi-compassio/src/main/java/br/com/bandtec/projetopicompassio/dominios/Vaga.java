package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Vaga {

    @Id
    private Integer idVaga;
    @Column(length = 256, nullable = false)
    private String titulo;
    @Column(length = 256, nullable = false)
    private String descricaoVaga;
    @Column(length = 50, nullable = false)
    private String causa;
    @Column(nullable = false)
    private Date dataInicio;
    @Column(nullable = false)
    private Date dataFim;
    @Column(length = 256, nullable = false)
    private String descricaoCompleta;
    @Column(length = 100, nullable = false)
    private String areaAtuacao;
    @Column(length = 256, nullable = false)
    private String descricaoArea;
    @Column(length = 256, nullable = false)
    private String descricaoRequisitos;
    @Column(nullable = false)
    private Integer fkIdUsuarioJuridico;

    public Integer getFkIdUsuarioJuridico() {
        return fkIdUsuarioJuridico;
    }

    public void setFkIdUsuarioJuridico(Integer fkIdUsuarioJuridico) {
        this.fkIdUsuarioJuridico = fkIdUsuarioJuridico;
    }

    public Integer getIdVaga() {
        return idVaga;
    }

    public void setIdVaga(Integer idVaga) {
        this.idVaga = idVaga;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricaoVaga() {
        return descricaoVaga;
    }

    public void setDescricaoVaga(String descricaoVaga) {
        this.descricaoVaga = descricaoVaga;
    }

    public String getCausa() {
        return causa;
    }

    public void setCausa(String causa) {
        this.causa = causa;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataFim() {
        return dataFim;
    }

    public void setDataFim(Date dataFim) {
        this.dataFim = dataFim;
    }

    public String getDescricaoCompleta() {
        return descricaoCompleta;
    }

    public void setDescricaoCompleta(String descricaoCompleta) {
        this.descricaoCompleta = descricaoCompleta;
    }

    public String getAreaAtuacao() {
        return areaAtuacao;
    }

    public void setAreaAtuacao(String areaAtuacao) {
        this.areaAtuacao = areaAtuacao;
    }

    public String getDescricaoArea() {
        return descricaoArea;
    }

    public void setDescricaoArea(String descricaoArea) {
        this.descricaoArea = descricaoArea;
    }

    public String getDescricaoRequisitos() {
        return descricaoRequisitos;
    }

    public void setDescricaoRequisitos(String descricaoRequisitos) {
        this.descricaoRequisitos = descricaoRequisitos;
    }
}
