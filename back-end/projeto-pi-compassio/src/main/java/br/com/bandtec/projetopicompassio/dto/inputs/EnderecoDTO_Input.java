package br.com.bandtec.projetopicompassio.dto.inputs;

public class EnderecoDTO_Input {

    private int id;
    private String cidade;
    private String estado;

    public EnderecoDTO_Input(int id, String cidade, String estado) {
        this.id = id;
        this.cidade = cidade;
        this.estado = estado;
    }

    public int getId() {
        return id;
    }

    public String getCidade() {
        return cidade;
    }

    public String getEstado() {
        return estado;
    }
}
