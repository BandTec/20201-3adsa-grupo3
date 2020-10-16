package br.com.bandtec.projetopicompassio.dto.outputs;

public class EnderecoDTO_Output {

    private String cidade;
    private String estado;

    public EnderecoDTO_Output(String cidade, String estado) {
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
