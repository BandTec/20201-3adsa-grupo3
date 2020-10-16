package br.com.bandtec.projetopicompassio.servicos;

import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;

import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public abstract class Arquivo {

    public static Arquivo getModeloDoArquivoById(String id) throws Exception {
        try {
            return (Arquivo) Class.forName("br.com.bandtec.projetopicompassio.servicos.Arquivo" + id).newInstance();
        } catch (Exception ex) {
            throw new Exception("Id inválido - " + ex);
        }
    }

    protected String idArquivo;

    public abstract String getTextoParaExportar();

    public abstract void exportar(String nomeDoArquivo, boolean append) throws Exception;

    public static Arquivo importar(String nomeDoArquivo) throws Exception {
        try {
            List<String> linhas = ArquivoHandler.importar(nomeDoArquivo);

            String tipoDoArquivo = linhas.get(0).substring(0, 1);
            Arquivo modeloDoArquivo = null;

            for (int i = 0; i < TiposDeArquivo.values().length; i++) {
                String id = TiposDeArquivo.values()[i].getIdArquivo();
                if (tipoDoArquivo.equals(id)) {
                    modeloDoArquivo = Arquivo.getModeloDoArquivoById(id);
                    break;
                }
            }

            modeloDoArquivo.desserializar(linhas);
            return modeloDoArquivo;
        } catch (Exception ex) {
            throw ex;
        }
    }

    public abstract void desserializar(List<String> linhas);
}
