package br.com.bandtec.projetopicompassio.utils;

import br.com.bandtec.projetopicompassio.dominios.Vaga;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Formatter;
import java.util.FormatterClosedException;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class Arquivo {

    public static void exportar1(ListaObj<Vaga> lista, String nomeArquivo, String nomeOng){
        FileWriter arquivo = null;
        Formatter saida = null;
        String nomeDoArquivoDefault = "nomeArquivo.txt";
        boolean crashed = false;

        if (nomeArquivo == null)
            nomeArquivo = nomeDoArquivoDefault;
        if (!nomeArquivo.endsWith(".txt"))
            nomeArquivo += ".txt";

        try {
            arquivo = new FileWriter(nomeArquivo, true);
            saida = new Formatter(arquivo);
        } catch (IOException erro) {
            System.err.println("Erro ao abrir arquivo");
            System.exit(1);
        }

        try {
            //Escrevendo Header
            String dataAtual;
            dataAtual = LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE);
            saida.format("01%s%s",nomeOng,dataAtual);
            //Escrevendo Body
            int totalRegistros = 0;
            for (int i = 0; i < lista.getTamanho(); i++) {
                Vaga vaga = lista.getElemento(i);
                int ativo;
                ativo = vaga.estaAtiva() == true?1:0;
                saida.format("%s%s%d%n",vaga.getDataInicio(),vaga.getTitulo(),ativo);
                totalRegistros ++;
            }
            //Escrevendo Trailer/footer
            saida.format("%05d",totalRegistros);


        } catch (FormatterClosedException erro) {
            System.err.println("Erro ao gravar no arquivo");
            crashed = true;
        } finally {
            saida.close();
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

    public static void exportar2(ListaObj<Object> listaExp, String nomeArquivo){

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


    public static void importar2(String nomeArquivo){

    }





}
