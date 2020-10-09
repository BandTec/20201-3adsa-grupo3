package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Avaliacao {

    //Atributos
    @Id
    private Integer idAvaliacao;
    @Column(nullable = false)
    private Integer pontuacao;
    @Column(length = 500, nullable = false)
    private String relatorio;
    @Column(nullable = false)
    private Integer fkIdUsuarioFisico;
    @Column(nullable = false)
    private Integer fkIdUsuarioJuridico;

    //Métodos

    public Integer getIdAvaliacao() {
        return idAvaliacao;
    }

    public void setIdAvaliacao(Integer idAvaliacao) {
        this.idAvaliacao = idAvaliacao;
    }

    public Integer getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(Integer pontuacao) {
        this.pontuacao = pontuacao;
    }

    public String getRelatorio() {
        return relatorio;
    }

    public void setRelatorio(String relatorio) {
        this.relatorio = relatorio;
    }

    public Integer getFkIdUsuarioFisico() {
        return fkIdUsuarioFisico;
    }

    public void setFkIdUsuarioFisico(Integer fkIdUsuarioFisico) {
        this.fkIdUsuarioFisico = fkIdUsuarioFisico;
    }

    public Integer getFkIdUsuarioJuridico() {
        return fkIdUsuarioJuridico;
    }

    public void setFkIdUsuarioJuridico(Integer fkIdUsuarioJuridico) {
        this.fkIdUsuarioJuridico = fkIdUsuarioJuridico;
    }
}