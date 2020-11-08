package br.com.bandtec.projetopicompassio.dto;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

public class VagaDTO implements Serializable {

    private String titulo;
    private Date dataInicio;

    public VagaDTO(String titulo, Date dataInicio) {
        this.titulo = titulo;
        this.dataInicio = dataInicio;
    }

    public VagaDTO(){}

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDataInicio(Date dataInicio) {
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
        SimpleDateFormat formatador = new SimpleDateFormat("dd-MM-yyyy");

        return String.format(
                "%s%-40s",
                formatador.format(this.dataInicio),
                this.titulo
        );
    }
}
