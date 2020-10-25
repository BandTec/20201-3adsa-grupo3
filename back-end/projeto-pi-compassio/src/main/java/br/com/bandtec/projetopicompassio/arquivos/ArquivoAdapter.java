package br.com.bandtec.projetopicompassio.arquivos;

import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import org.springframework.web.multipart.MultipartFile;

public class ArquivoAdapter {

    public static IArquivo getModeloDoArquivoById(String id) throws Exception {
        try {
            String nome = "br.com.bandtec.projetopicompassio.arquivos.Arquivo" + id;
            return (IArquivo) Class.forName(nome).newInstance();
        } catch (Exception ex) {
            throw new Exception("Id inválido - " + ex);
        }
    }

    public static IArquivo importar(MultipartFile file) throws Exception {
        String delimitador = "\n";
                //file.getName().endsWith(".txt") ? "\\n" : file.getName().endsWith(".csv") ? ";" : "";

        ListaObj<String> linhas = ArquivoHandler.ler(file.getInputStream(), delimitador);

        String modeloDoArquivo = linhas.getElemento(0).substring(0, 2);
        IArquivo arquivo = null;

        for (int i = 0; i < Modelos.values().length; i++) {
            String id = Modelos.values()[i].getIdArquivo();
            if (modeloDoArquivo.equals(id)) {
                arquivo = ArquivoAdapter.getModeloDoArquivoById(id);
                break;
            }
        }
        arquivo.desserializar(linhas);
        return arquivo;
    }

    public static IArquivo importar(String nomeDoArquivo) throws Exception {
        ListaObj<String> linhas = ArquivoHandler.importar(nomeDoArquivo);

        String modeloDoArquivo = linhas.getElemento(0).substring(0, 1);
        IArquivo arquivo = null;

        for (int i = 0; i < Modelos.values().length; i++) {
            String id = Modelos.values()[i].getIdArquivo();
            if (modeloDoArquivo.equals(id)) {
                arquivo = ArquivoAdapter.getModeloDoArquivoById(id);
                break;
            }
        }
        arquivo.desserializar(linhas);
        return arquivo;
    }
}
