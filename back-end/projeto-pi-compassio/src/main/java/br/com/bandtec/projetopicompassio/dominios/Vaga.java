package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Vaga {

    @Id
    @Column(name = "id_vaga")
    private Integer idVaga;
    @Column(length = 256, nullable = false)
    private String titulo;
    @Column(length = 256, nullable = false, name = "descricao_vaga")
    private String descricaoVaga;
    @Column(length = 50, nullable = false)
    private String causa;
    @Column(nullable = false, name = "data_inicio")
    private Date dataInicio;
    @Column(nullable = false, name = "data_fim")
    private Date dataFim;
    @Column(length = 256, nullable = false, name = "descricao_completa")
    private String descricaoCompleta;
    @Column(length = 100, nullable = false, name = "area_atuacao")
    private String areaAtuacao;
    @Column(length = 256, nullable = false, name = "descricao_area")
    private String descricaoArea;
    @Column(length = 256, nullable = false, name = "descricao_requisitos")
    private String descricaoRequisitos;
    @OneToOne
    @JoinColumn(nullable = false, name = "fk_endereco")
    private Endereco fkIdEndereco;

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

    public Endereco getFkIdEndereco() {
        return fkIdEndereco;
    }

    public void setFkIdEndereco(Endereco fkIdEndereco) {
        this.fkIdEndereco = fkIdEndereco;
    }
}
