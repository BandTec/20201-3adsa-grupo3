package br.com.bandtec.projetopicompassio.dto;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

public class VagaDTO implements Serializable {

    private String titulo;
    private Date dataInicio;
    private Date dataFim;
    private String causa;
    private String descricao;
    private EnderecoVagaDTO endereco;

    public VagaDTO(String titulo, Date dataInicio, Date dataFim, String causa, String descricao, EnderecoVagaDTO endereco) {
        this.titulo = titulo;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.causa = causa;
        this.descricao = descricao;
        this.endereco = endereco;
    }

    public VagaDTO(){}

    @Override
    public String toString() {
        SimpleDateFormat formatador = new SimpleDateFormat("dd-MM-yyyy");

        return String.format(
                "%s%s%-256s%-50%-256%s",
                formatador.format(this.dataInicio),
                formatador.format(this.dataFim),
                this.titulo,
                this.causa,
                this.descricao,
                this.endereco.toString()
        );
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
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

    public String getCausa() {
        return causa;
    }

    public void setCausa(String causa) {
        this.causa = causa;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public EnderecoVagaDTO getEndereco() {
        return endereco;
    }

    public void setEndereco(EnderecoVagaDTO endereco) {
        this.endereco = endereco;
    }
}
