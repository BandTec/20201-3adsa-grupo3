package br.com.bandtec.projetopicompassio.dto;

import br.com.bandtec.projetopicompassio.utils.ListaObj;

public class VoluntariosDeUmaVagaDTO {

    private String nomeOng;
    private String nomeVaga;
    private ListaObj<VoluntarioInscritoDTO> voluntariosInscritos;

    public VoluntariosDeUmaVagaDTO(String nomeOng, String nomeVaga, ListaObj<VoluntarioInscritoDTO> voluntariosInscritos) {
        this.nomeOng = nomeOng;
        this.nomeVaga = nomeVaga;
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
