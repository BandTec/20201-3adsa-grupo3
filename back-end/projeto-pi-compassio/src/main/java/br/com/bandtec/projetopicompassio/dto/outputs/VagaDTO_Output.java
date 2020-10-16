package br.com.bandtec.projetopicompassio.dto.outputs;

import java.sql.Date;

public class VagaDTO_Output {

    private String titulo;
    private Date dataInicio;
    private Date dataFim;

    public VagaDTO_Output(String titulo, Date dataInicio, Date dataFim) {
        this.titulo = titulo;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    public String getTitulo() {
        return titulo;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public Date getDataFim() {
        return dataFim;
    }
}
