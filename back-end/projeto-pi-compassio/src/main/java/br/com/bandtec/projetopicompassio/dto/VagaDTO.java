package br.com.bandtec.projetopicompassio.dto;

import br.com.bandtec.projetopicompassio.dominios.Endereco;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

public class VagaDTO implements Serializable {

    private String titulo;
    private Date dataInicio;
    private Date dataFim;
    private String causa;
    private String descricao;

    private String logradouro;
    private Integer numeroEndereco;
    private String cep;
    private String cidade;
    private String estado;
    private String bairro;

    public VagaDTO(String titulo, Date dataInicio, Date dataFim, String causa, String descricao, String logradouro, Integer numeroEndereco, String cep, String cidade, String estado, String bairro) {
        this.titulo = titulo;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.causa = causa;
        this.descricao = descricao;
        this.logradouro = logradouro;
        this.numeroEndereco = numeroEndereco;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
        this.bairro = bairro;
    }

    public VagaDTO(String titulo, Date dataInicio, Date dataFim, String causa, String descricao, Endereco endereco) {
        this.titulo = titulo;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.causa = causa;
        this.descricao = descricao;

        this.logradouro = endereco.getLogradouro();
        this.numeroEndereco = endereco.getNumeroEndereco();
        this.cep = endereco.getCep();
        this.cidade = endereco.getCidade();
        this.estado = endereco.getEstado();
        this.bairro = endereco.getBairro();
    }

    public VagaDTO(){}

    @Override
    public String toString() {
        SimpleDateFormat formatador = new SimpleDateFormat("dd-MM-yyyy");

        return String.format(
                "%s%s%-256s%-50s%-256s%-100s%04d%-9s%-45s%-2s%-45s",
                formatador.format(this.dataInicio),
                formatador.format(this.dataFim),
                this.titulo,
                this.causa,
                this.descricao,

                this.logradouro,
                this.numeroEndereco,
                this.cep,
                this.cidade,
                this.estado,
                this.bairro
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

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public Integer getNumeroEndereco() {
        return numeroEndereco;
    }

    public void setNumeroEndereco(Integer numeroEndereco) {
        this.numeroEndereco = numeroEndereco;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }
}