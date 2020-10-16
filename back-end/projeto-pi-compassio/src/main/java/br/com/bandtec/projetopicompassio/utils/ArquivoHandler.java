package br.com.bandtec.projetopicompassio.utils;

import br.com.bandtec.projetopicompassio.servicos.Arquivo;
import br.com.bandtec.projetopicompassio.servicos.TiposDeArquivo;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class ArquivoHandler {

    public static void exportar(String nomeDoArquivo, String registro, boolean append) throws Exception {
        BufferedWriter saida;

        if (!nomeDoArquivo.endsWith(".txt"))
            nomeDoArquivo += ".txt";

        try {
            saida = new BufferedWriter(new FileWriter(nomeDoArquivo, append));
            saida.write(registro);
            saida.close();
        } catch (Exception ex) {
            throw ex;
        }
    }

    public static List<String> importar(String nomeDoArquivo) throws Exception {
        try {
            if (!nomeDoArquivo.endsWith(".txt"))
                nomeDoArquivo += ".txt";

            FileReader arquivo = new FileReader(nomeDoArquivo);
            Scanner leitor = new Scanner(arquivo).useDelimiter("\\n | \\r\\n");

            List<String> linhas = new ArrayList();
            while (leitor.hasNext()) {
                linhas.add(leitor.next());
            }
            return linhas;
        } catch (Exception ex) {
            throw ex;
        }
    }
}
