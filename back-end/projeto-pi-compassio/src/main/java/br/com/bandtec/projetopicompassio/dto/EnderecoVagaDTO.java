package br.com.bandtec.projetopicompassio.dto;

import java.io.Serializable;

public class EnderecoVagaDTO implements Serializable {

    private String cidade;
    private String estado;
    private String bairro;

    public EnderecoVagaDTO(String cidade, String estado, String bairro) {
        this.cidade = cidade;
        this.estado = estado;
        this.bairro = bairro;
    }

    public EnderecoVagaDTO() {
    }

    @Override
    public String toString() {
        return String.format(
                "%-45%s%-45",
                this.cidade,
                this.estado,
                this.bairro
        );
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }

    public String getEstado() {
        return estado;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }
}
