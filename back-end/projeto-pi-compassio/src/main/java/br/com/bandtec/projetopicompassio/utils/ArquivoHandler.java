package br.com.bandtec.projetopicompassio.utils;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class    ArquivoHandler {

    public static void exportar(String nomeDoArquivo, String registro, boolean append, boolean isCsv) throws IOException {
        BufferedWriter saida;

        if (isCsv) {
            if (!nomeDoArquivo.endsWith(".csv"))
                nomeDoArquivo += ".csv";
        } else if (!nomeDoArquivo.endsWith(".txt")) {
            nomeDoArquivo += ".txt";
        }

        saida = new BufferedWriter(new FileWriter(nomeDoArquivo, append));
        saida.write(registro);
        saida.close();
    }

    public static ListaObj<String> importar(String nomeDoArquivo) throws FileNotFoundException {
        FileReader arquivo = new FileReader(nomeDoArquivo);
        Scanner leitor;

        if (nomeDoArquivo.endsWith(".txt"))
            leitor = new Scanner(arquivo).useDelimiter(";");
        else
            leitor = new Scanner(arquivo).useDelimiter("\\n | \\r\\n");

        List<String> linhas = new ArrayList();
        while (leitor.hasNext()) {
            linhas.add(leitor.next());
        }
        return (ListaObj<String>) ListaObj.convert(linhas);
    }

    public static ListaObj<String> ler(InputStream stream, String delimitador) throws FileNotFoundException {
        Scanner leitor = new Scanner(stream).useDelimiter(delimitador);
        List<String> linhas = new ArrayList();
        while (leitor.hasNext()) {
            linhas.add(leitor.next());
        }
        return (ListaObj<String>) ListaObj.convert(linhas);
    }
}
