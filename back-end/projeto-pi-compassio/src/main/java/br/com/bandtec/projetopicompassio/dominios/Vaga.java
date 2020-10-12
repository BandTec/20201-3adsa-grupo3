package br.com.bandtec.projetopicompassio.dominios;

import br.com.bandtec.projetopicompassio.utils.Converter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;
import java.time.LocalDate;

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

    public boolean estaAtiva(){
        Date dataAtual = Date.valueOf(LocalDate.now());
        if (dataFim.compareTo(dataAtual) > 0)
            return true;
        return false;
    }

    public String getMinimalInfo() {
        return String.format(
                "%s%040s%d",
                Converter.DateToString(this.dataInicio, "ddMMyyyy"),
                this.titulo,
                this.estaAtiva() == true ? 1 : 0
        );
    }
}
