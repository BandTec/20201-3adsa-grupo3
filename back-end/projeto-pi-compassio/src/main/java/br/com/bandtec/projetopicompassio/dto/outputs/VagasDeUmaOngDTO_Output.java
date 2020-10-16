package br.com.bandtec.projetopicompassio.dto.outputs;

import br.com.bandtec.projetopicompassio.utils.ListaObj;

public class VagasDeUmaOngDTO_Output {

    private String nomeDaOng;
    private ListaObj<VagaDTO_Output> vagas;

    public VagasDeUmaOngDTO_Output(String nomeDaOng, ListaObj<VagaDTO_Output> vagas) {
        this.nomeDaOng = nomeDaOng;
        this.vagas = vagas;
    }

    public String getNomeDaOng() {
        return nomeDaOng;
    }

    public ListaObj<VagaDTO_Output> getVagas() {
        return vagas;
    }
}
