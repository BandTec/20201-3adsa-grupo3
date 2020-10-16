package br.com.bandtec.projetopicompassio.servicos;

import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.Converter;
import br.com.bandtec.projetopicompassio.utils.ListaObj;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

public class Arquivo01 extends Arquivo {

    private String nomeDaOng;
    private ListaObj<Vaga> vagas;

    public Arquivo01(String nomeDaOng, ListaObj<Vaga> vagas) {
        super.idArquivo = TiposDeArquivo.ARQUIVO_01.getIdArquivo();
        this.nomeDaOng = nomeDaOng;
        this.vagas = vagas;
    }

    public Arquivo01() {
        super.idArquivo = TiposDeArquivo.ARQUIVO_01.getIdArquivo();
    }

    public String getTextoParaExportar() {
        StringBuilder registro = new StringBuilder();

        //Escrevendo Header
        String dataAtual = Converter.LocalDateToString(LocalDate.now(), "ddMMyyyy");
        registro.append(String.format("%s%030s%s\n", idArquivo, nomeDaOng, dataAtual));

        //Escrevendo Body
        int totalRegistros = 0;
        for (int i = 0; i < vagas.getTamanho(); i++) {
            Vaga vaga = vagas.getElemento(i);
            registro.append(vaga.getMinimalInfo() + "\n");
            totalRegistros ++;
        }

        //Escrevendo Trailer
        registro.append(String.format("%05d\r\n", totalRegistros));

        return registro.toString();
    }

    public void exportar(String nomeDoArquivo, boolean append) throws Exception {
        String nomeDoArquivoDefault =
                Converter.LocalDateToString(LocalDate.now(), "ddMMyyyy") + "Arquivo01Vagas.txt";
        if (nomeDoArquivo == null)
            nomeDoArquivo = nomeDoArquivoDefault;

        try {
            ArquivoHandler.exportar(nomeDoArquivo, getTextoParaExportar(), append);
        } catch (Exception ex) {
            throw ex;
        }
    }

    public void desserializar(List<String> linhas) {
        for (int i = 0; i < linhas.size() - 1; i++) {
            if (i == 0)
                nomeDaOng = linhas.get(i).substring(2, 31).trim();
            else {
                String dataInicio = linhas.get(i).substring(0, 7);
                String titulo = linhas.get(i).substring(8, 47).trim();

                Vaga vaga = new Vaga();
                vaga.setTitulo(titulo);
                vaga.setDataInicio(Date.valueOf(dataInicio));

                vagas.adiciona(vaga);
            }
        }
    }
}
