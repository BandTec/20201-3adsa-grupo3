package br.com.bandtec.projetopicompassio.dto.outputs;

import java.sql.Date;

public class VoluntarioDeUmaVagaDTO_Output {

    private String nomeDaVaga;
    private UsuarioFisicoDTO_Output voluntario;
    private Date dataInscricao;

    public VoluntarioDeUmaVagaDTO_Output(String nomeDaVaga, UsuarioFisicoDTO_Output voluntario, Date dataInscricao) {
        this.nomeDaVaga = nomeDaVaga;
        this.voluntario = voluntario;
        this.dataInscricao = dataInscricao;
    }

    public String getNomeDaVaga() {
        return nomeDaVaga;
    }

    public UsuarioFisicoDTO_Output getVoluntario() {
        return voluntario;
    }

    public Date getDataInscricao() {
        return dataInscricao;
    }
}
