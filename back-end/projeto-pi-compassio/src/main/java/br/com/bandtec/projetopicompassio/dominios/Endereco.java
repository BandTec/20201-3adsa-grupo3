package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;

@Entity
public class Endereco {

    @Id
    @Column(name = "id_endereco")
    private Integer idEndereco;

    @Column(nullable = false)
    private String logradouro;

    @Column(nullable = false, name = "numero_endereco")
    private Integer numeroEndereco;

    @Column(nullable = false)
    private String complemento;

    @Column(name = "CEP", length = 9, nullable = false)
    private String cep;

    @Column(length = 45, nullable = false)
    private String bairro;

    @Column(length = 2, nullable = false)
    private String estado;

    @Column(length = 45, nullable = false)
    private String cidade;

    public Integer getIdEndereco() {
        return idEndereco;
    }

    public void setIdEndereco(Integer idEndereco) {
        this.idEndereco = idEndereco;
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

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
}