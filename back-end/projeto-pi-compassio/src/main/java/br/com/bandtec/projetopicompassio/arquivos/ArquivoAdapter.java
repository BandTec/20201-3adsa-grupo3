package br.com.bandtec.projetopicompassio.arquivos;

import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import java.util.List;

public class ArquivoAdapter {

    public static IArquivo getModeloDoArquivoById(String id) throws Exception {
        try {
            return (IArquivo) Class.forName("br.com.bandtec.projetopicompassio.servicos.Arquivo" + id).newInstance();
        } catch (Exception ex) {
            throw new Exception("Id inválido - " + ex);
        }
    }

    public static IArquivo importar(String nomeDoArquivo) throws Exception {
        try {
            List<String> linhas = ArquivoHandler.importar(nomeDoArquivo);

            String modeloDoArquivo = linhas.get(0).substring(0, 1);
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
        } catch (Exception ex) {
            throw ex;
        }
    }
}
