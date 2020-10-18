package br.com.bandtec.projetopicompassio.dto;

import br.com.bandtec.projetopicompassio.utils.Converter;

import java.sql.Date;
import java.time.LocalDate;

public class VagaDTO {

    private String titulo;
    private Date dataInicio;

    public VagaDTO(String titulo, Date dataInicio) {
        this.titulo = titulo;
        this.dataInicio = dataInicio;
    }

    public String getTitulo() {
        return titulo;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    @Override
    public String toString() {
        return String.format(
                "%s%040s%d",
                Converter.DateToString(this.dataInicio, "ddMMyyyy"),
                this.titulo
        );
    }
}
