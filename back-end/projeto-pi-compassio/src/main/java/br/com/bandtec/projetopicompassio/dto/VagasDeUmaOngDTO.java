package br.com.bandtec.projetopicompassio.dto;

import br.com.bandtec.projetopicompassio.utils.ListaObj;

import java.io.Serializable;

public class VagasDeUmaOngDTO implements Serializable {

    private String nomeDaOng;
    private ListaObj<VagaDTO> vagas;

    public VagasDeUmaOngDTO(String nomeDaOng, ListaObj<VagaDTO> vagas) {
        this.nomeDaOng = nomeDaOng;
        this.vagas = vagas;
    }

    public VagasDeUmaOngDTO(){}

    public void setNomeDaOng(String nomeDaOng) {
        this.nomeDaOng = nomeDaOng;
    }

    public void setVagas(ListaObj<VagaDTO> vagas) {
        this.vagas = vagas;
    }

    public String getNomeDaOng() {
        return nomeDaOng;
    }

    public ListaObj<VagaDTO> getVagas() {
        return vagas;
    }

    @Override
    public String toString() {
        return nomeDaOng + "\n" +
               vagas.toString();
    }
}
