package br.com.bandtec.projetopicompassio.arquivos;

import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import org.springframework.web.multipart.MultipartFile;

public class ArquivoContext {

    private static IArquivo arquivo;

    public static void setArquivo(IArquivo novoArquivo) {
        arquivo = novoArquivo;
    }

    public static void exportar(String nomeDoArquivo, boolean append, boolean isCsv) throws Exception {
        arquivo.exportar(nomeDoArquivo, append, isCsv);
    }

    public static void desserializar(ListaObj<String> linhas) {
        arquivo.desserializar(linhas);
    }
}
