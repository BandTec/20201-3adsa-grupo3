package br.com.bandtec.projetopicompassio.arquivos;

import java.util.List;

public interface IArquivo {

    void setObject(Object obj);
    String getTextoParaExportar() throws Exception;
    void exportar(String nomeDoArquivo, boolean append) throws Exception;
    void desserializar(List<String> linhas);
}
