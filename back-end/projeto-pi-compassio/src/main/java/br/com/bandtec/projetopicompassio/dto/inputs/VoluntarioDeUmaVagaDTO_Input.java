package br.com.bandtec.projetopicompassio.dto.inputs;

import java.sql.Date;

public class VoluntarioDeUmaVagaDTO_Input {

    private int id;
    private String nomeDaVaga;
    private UsuarioFisicoDTO_Input voluntario;
    private Date dataInscricao;

    public VoluntarioDeUmaVagaDTO_Input(int id, String nomeDaVaga, UsuarioFisicoDTO_Input voluntario, Date dataInscricao) {
        this.id = id;
        this.nomeDaVaga = nomeDaVaga;
        this.voluntario = voluntario;
        this.dataInscricao = dataInscricao;
    }

    public int getId() {
        return id;
    }

    public String getNomeDaVaga() {
        return nomeDaVaga;
    }

    public UsuarioFisicoDTO_Input getVoluntario() {
        return voluntario;
    }

    public Date getDataInscricao() {
        return dataInscricao;
    }
}
