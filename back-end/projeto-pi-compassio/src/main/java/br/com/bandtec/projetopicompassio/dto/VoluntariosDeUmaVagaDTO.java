package br.com.bandtec.projetopicompassio.dto;

import br.com.bandtec.projetopicompassio.utils.ListaObj;

import java.io.Serializable;

public class VoluntariosDeUmaVagaDTO implements Serializable {

    private String nomeOng;
    private String nomeVaga;
    private ListaObj<VoluntarioInscritoDTO> voluntariosInscritos;

    public VoluntariosDeUmaVagaDTO(String nomeOng, String nomeVaga, ListaObj<VoluntarioInscritoDTO> voluntariosInscritos) {
        this.nomeOng = nomeOng;
        this.nomeVaga = nomeVaga;
        this.voluntariosInscritos = voluntariosInscritos;
    }

    public VoluntariosDeUmaVagaDTO(){}

    public void setNomeOng(String nomeOng) {
        this.nomeOng = nomeOng;
    }

    public void setNomeVaga(String nomeVaga) {
        this.nomeVaga = nomeVaga;
    }

    public void setVoluntariosInscritos(ListaObj<VoluntarioInscritoDTO> voluntariosInscritos) {
        this.voluntariosInscritos = voluntariosInscritos;
    }

    public String getNomeOng() {
        return nomeOng;
    }

    public String getNomeVaga() {
        return nomeVaga;
    }

    public ListaObj<VoluntarioInscritoDTO> getVoluntariosInscritos() {
        return voluntariosInscritos;
    }
}
