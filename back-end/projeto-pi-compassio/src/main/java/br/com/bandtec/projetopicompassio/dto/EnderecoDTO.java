package br.com.bandtec.projetopicompassio.dto;

public class EnderecoDTO {

    private String cidade;
    private String estado;

    public EnderecoDTO(String cidade, String estado) {
        this.cidade = cidade;
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }

    public String getEstado() {
        return estado;
    }
}
