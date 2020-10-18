package br.com.bandtec.projetopicompassio.dto;

import br.com.bandtec.projetopicompassio.utils.Converter;

import java.sql.Date;

public class VoluntarioInscritoDTO {

    private UsuarioFisicoDTO voluntario;
    private Date dataInscricao;

    public VoluntarioInscritoDTO(UsuarioFisicoDTO voluntario, Date dataInscricao) {
        this.voluntario = voluntario;
        this.dataInscricao = dataInscricao;
    }

    public UsuarioFisicoDTO getVoluntario() {
        return voluntario;
    }

    public Date getDataInscricao() {
        return dataInscricao;
    }

    @Override
    public String toString() {
        return String.format(
                "%s%040s%040s%s%030s%s%d",
                Converter.DateToString(this.dataInscricao, "ddMMyyyy"),
                this.voluntario.getNome(),
                this.voluntario.getEmail(),
                Converter.DateToString(this.voluntario.getDataNascimento(), "ddMMyyyy"),
                this.voluntario.getEndereco().getCidade(),
                this.voluntario.getEndereco().getEstado()
        );
    }
}
