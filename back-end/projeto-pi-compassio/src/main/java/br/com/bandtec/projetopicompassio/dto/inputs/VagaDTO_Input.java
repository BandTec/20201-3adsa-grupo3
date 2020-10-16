package br.com.bandtec.projetopicompassio.dto.inputs;

import java.sql.Date;

public class VagaDTO_Input {

    private int id;
    private String titulo;
    private Date dataInicio;
    private Date dataFim;

    public VagaDTO_Input(int id, String titulo, Date dataInicio, Date dataFim) {
        this.id = id;
        this.titulo = titulo;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    public int getId() {
        return id;
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
