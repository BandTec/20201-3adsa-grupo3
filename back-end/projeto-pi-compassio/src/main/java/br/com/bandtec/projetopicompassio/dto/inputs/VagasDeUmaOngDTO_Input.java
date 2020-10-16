package br.com.bandtec.projetopicompassio.dto.inputs;

import br.com.bandtec.projetopicompassio.utils.ListaObj;

public class VagasDeUmaOngDTO_Input {

    private int id;
    private String nomeDaOng;
    private ListaObj<VagaDTO_Input> vagas;

    public VagasDeUmaOngDTO_Input(int id, String nomeDaOng, ListaObj<VagaDTO_Input> vagas) {
        this.id = id;
        this.nomeDaOng = nomeDaOng;
        this.vagas = vagas;
    }

    public int getId() {
        return id;
    }

    public String getNomeDaOng() {
        return nomeDaOng;
    }

    public ListaObj<VagaDTO_Input> getVagas() {
        return vagas;
    }
}
