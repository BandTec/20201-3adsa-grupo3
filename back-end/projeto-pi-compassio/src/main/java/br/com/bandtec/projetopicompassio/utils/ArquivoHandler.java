package br.com.bandtec.projetopicompassio.utils;

import br.com.bandtec.projetopicompassio.servicos.Arquivo;
import br.com.bandtec.projetopicompassio.servicos.TiposDeArquivo;

import java.io.*;
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

    public static String importar(String nomeArquivo) throws Exception {
        Scanner leitor;

        try {
            leitor = new Scanner(new FileReader(nomeArquivo)).useDelimiter("\\r\\n");
            Arquivo arquivo;
            String tipoDoArquivo = leitor.next().substring(0, 1);

            switch (tipoDoArquivo) {
                case TiposDeArquivo.ARQUIVO_01.getIdArquivo():
                    break;
                case TiposDeArquivo.ARQUIVO_02.getIdArquivo():
                    break;
                default:
                    break;
            }

            while (leitor.hasNext()) {

            }
        } catch (Exception ex) {
            throw ex;
        }
    }

    public static void importar1(String nomeArquivo){
        FileReader arquivo = null;
        Scanner entrada = null;
        boolean crashed = false;

        try {
            arquivo = new FileReader(nomeArquivo);
            entrada = new Scanner(arquivo).useDelimiter("\\r\\n");
        } catch (FileNotFoundException erro) {
            System.err.println("Arquivo não encontrado");
            System.exit(1);
        }

        try {
            entrada.nextLine();
            while (entrada.hasNext()) {
                Integer dataInicio = entrada.nextInt();
                String titulo = entrada.next().substring(8,47);
                Integer ativo = entrada.nextInt();
                System.out.printf("%s%s%s\n",dataInicio,titulo,ativo);
            }
        } catch (NoSuchElementException erro) {
            System.err.println("Arquivo com problemas.");
            crashed = true;
        } catch (IllegalStateException erro) {
            System.err.println("Erro na leitura do arquivo.");
            crashed = true;
        } finally {
            entrada.close();
            try {
                arquivo.close();
            } catch (IOException erro) {
                System.err.println("Erro ao fechar arquivo.");
                crashed = true;
            }
            if (crashed)
                System.exit(1);
        }
    }
}
