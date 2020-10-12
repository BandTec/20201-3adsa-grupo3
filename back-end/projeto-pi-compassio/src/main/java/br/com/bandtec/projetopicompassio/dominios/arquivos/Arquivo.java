package br.com.bandtec.projetopicompassio.dominios.arquivos;

import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.utils.ListaObj;

public abstract class Arquivo {

    protected String idArquivo;

    public abstract String getTextoParaExportar();

    public abstract void exportar(String nomeDoArquivo, boolean append) throws Exception;
}
