package br.com.bandtec.projetopicompassio.dto;

import java.io.Serializable;
import java.util.Date;
import java.text.SimpleDateFormat;

public class VoluntarioInscritoDTO implements Serializable {

    private UsuarioFisicoDTO voluntario;
    private Date dataInscricao;

    public VoluntarioInscritoDTO(UsuarioFisicoDTO voluntario, Date dataInscricao) {
        this.voluntario = voluntario;
        this.dataInscricao = dataInscricao;
    }

    public VoluntarioInscritoDTO(){}

    public void setVoluntario(UsuarioFisicoDTO voluntario) {
        this.voluntario = voluntario;
    }

    public void setDataInscricao(Date dataInscricao) {
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
        SimpleDateFormat formatador = new SimpleDateFormat("dd-MM-yyyy");
        return String.format(
                "%s%-40s%-40s%s%-30s%s",
                formatador.format(dataInscricao),
                this.voluntario.getNome(),
                this.voluntario.getEmail(),
                formatador.format(this.voluntario.getDataNascimento()),
                this.voluntario.getEndereco().getCidade(),
                this.voluntario.getEndereco().getEstado()
        );
    }
}
