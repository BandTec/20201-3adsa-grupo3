package br.com.bandtec.projetopicompassio.dto;

import br.com.bandtec.projetopicompassio.utils.ListaObj;

public class VagasDeUmaOngDTO {

    private String nomeDaOng;
    private ListaObj<VagaDTO> vagas;

    public VagasDeUmaOngDTO(String nomeDaOng, ListaObj<VagaDTO> vagas) {
        this.nomeDaOng = nomeDaOng;
        this.vagas = vagas;
    }

    public String getNomeDaOng() {
        return nomeDaOng;
    }

    public ListaObj<VagaDTO> getVagas() {
        return vagas;
    }
}
