package br.com.bandtec.projetopicompassio.servicos;

import sun.reflect.generics.reflectiveObjects.NotImplementedException;

public abstract class Arquivo {

    protected String idArquivo;

    public abstract String getTextoParaExportar();

    public abstract void exportar(String nomeDoArquivo, boolean append) throws Exception;

    public abstract void desserializar(String linha);
}
