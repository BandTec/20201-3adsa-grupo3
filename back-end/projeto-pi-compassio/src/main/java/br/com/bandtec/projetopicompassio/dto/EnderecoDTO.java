package br.com.bandtec.projetopicompassio.dto;

import java.io.Serializable;

public class EnderecoDTO implements Serializable {

    private String cidade;
    private String estado;

    public EnderecoDTO(String cidade, String estado) {
        this.cidade = cidade;
        this.estado = estado;
    }

    public EnderecoDTO() {
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
}
