package br.com.bandtec.projetopicompassio.arquivos;

import java.util.List;

public class ArquivoContext {

    private static IArquivo arquivo;

    public static void setArquivo(IArquivo novoArquivo) {
        arquivo = novoArquivo;
    }

    public static void exportar(String nomeDoArquivo, boolean append) throws Exception {
        arquivo.exportar(nomeDoArquivo, append);
    }

    public static void desserializar(List<String> linhas) {
        arquivo.desserializar(linhas);
    }
}
