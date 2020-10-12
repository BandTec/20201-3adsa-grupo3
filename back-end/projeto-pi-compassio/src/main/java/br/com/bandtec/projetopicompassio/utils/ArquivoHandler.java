package br.com.bandtec.projetopicompassio.utils;

import java.io.*;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class ArquivoHandler {

    public static void exportar(String nomeDoArquivo, String registro, boolean append) throws Exception {
        BufferedWriter saida = null;

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

    public static void importar2(String nomeArquivo){
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
