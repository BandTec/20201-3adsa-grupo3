package br.com.bandtec.projetopicompassio.arquivos;

import br.com.bandtec.projetopicompassio.dto.VagaDTO;
import br.com.bandtec.projetopicompassio.dto.VagasDeUmaOngDTO;
import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.Converter;
import br.com.bandtec.projetopicompassio.utils.ListaObj;

import java.lang.reflect.Type;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

public class Arquivo01 implements IArquivo {

    private String idArquivo;
    private VagasDeUmaOngDTO vagasDeUmaOng;

    public Arquivo01(String nomeDaOng, VagasDeUmaOngDTO vagas) {
        this.idArquivo = Modelos.ARQUIVO_01.getIdArquivo();
        this.vagasDeUmaOng = vagasDeUmaOng;
    }

    public Arquivo01() {
        this.idArquivo = Modelos.ARQUIVO_01.getIdArquivo();
    }

    @Override
    public void setObject(Object obj) {
        vagasDeUmaOng = (VagasDeUmaOngDTO) obj;
    }

    public String getTextoParaExportar() {
        StringBuilder registro = new StringBuilder();

        //Escrevendo Header
        String dataAtual = Converter.LocalDateToString(LocalDate.now(), "ddMMyyyy");
        registro.append(String.format("%s%-30s%s%n", idArquivo, vagasDeUmaOng.getNomeDaOng(), dataAtual));

        //Escrevendo Body
        int totalRegistros = 0;
        ListaObj<VagaDTO> vagas = vagasDeUmaOng.getVagas();
        for (int i = 0;  i < vagas.getTamanho(); i++) {
            VagaDTO vaga = vagas.getElemento(i);
            registro.append(vaga.toString() + "\n");
            totalRegistros ++;
        }

        //Escrevendo Trailer
        registro.append(String.format("%-5d\r\n", totalRegistros));

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

    //Lê as linhas do arquivo lido e preenche os atributos com os dados
    public void desserializar(List<String> linhas) {
        String nomeDaOng = null;
        ListaObj<VagaDTO> vagas = new ListaObj<>(linhas.size() - 2);
        for (int i = 0; i < linhas.size() - 1; i++) {
            //Se for a primeira linha, quer dizer que é o Header
            if (i == 0)
                nomeDaOng = linhas.get(i).substring(2, 31).trim();
            else {
                //Parseia os dados de acordo com o arquivo de layout
                String dataInicio = linhas.get(i).substring(0, 7);
                String titulo = linhas.get(i).substring(8, 47).trim();

                //Instancia o objeto vaga para salvar no atributo
                //vagasDeUmaOng
                VagaDTO vaga = new VagaDTO(titulo, Date.valueOf(dataInicio));

                vagas.adiciona(vaga);
            }
        }
        vagasDeUmaOng = new VagasDeUmaOngDTO(nomeDaOng, vagas);
    }
}