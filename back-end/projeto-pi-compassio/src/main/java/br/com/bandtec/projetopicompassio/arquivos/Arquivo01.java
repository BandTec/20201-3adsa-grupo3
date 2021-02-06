package br.com.bandtec.projetopicompassio.arquivos;

import br.com.bandtec.projetopicompassio.dto.VagaDTO;
import br.com.bandtec.projetopicompassio.dto.VagasDeUmaOngDTO;
import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.Converter;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import org.springframework.data.convert.Jsr310Converters;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;

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

    @Override
    public Object getObject() {
        return vagasDeUmaOng;
    }

    public String getTextoParaExportar(boolean isCsv) {
        if (isCsv)
            return getTextoCsv();
        else
            return getTextoTxt();
    }

    private String getTextoTxt() {
        StringBuilder registro = new StringBuilder();

        //Escrevendo Header
        String dataAtual = Converter.LocalDateToString(LocalDate.now(), "dd-MM-yyyy");
        registro.append(String.format("%s%-30s%s\n", idArquivo, vagasDeUmaOng.getNomeDaOng(), dataAtual));

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

    private String getTextoCsv() {
        StringBuilder registro = new StringBuilder();

        //Escrevendo Header
        registro.append("DataInicio;");
        registro.append("Titulo;");
        registro.append("\n");

        //Escrevendo Body
        ListaObj<VagaDTO> vagas = vagasDeUmaOng.getVagas();
        for (int i = 0; i < vagas.getTamanho(); i++) {
            VagaDTO vaga = vagas.getElemento(i);
            registro.append(vaga.getDataInicio()+";");
            registro.append(vaga.getDataFim()+";");
            registro.append(vaga.getTitulo()+";");
            registro.append(vaga.getCausa()+";");
            registro.append(vaga.getDescricao()+";");
            registro.append(vaga.getLogradouro()+";");
            registro.append(vaga.getNumeroEndereco()+";");
            registro.append(vaga.getCep()+";");
            registro.append(vaga.getCidade()+";");
            registro.append(vaga.getEstado()+";");
            registro.append(vaga.getBairro()+";");
            registro.append("\n");
        }
        registro.append("\r\n");

        return registro.toString();
    }

    public void exportar(String nomeDoArquivo, boolean append, boolean isCsv) throws IOException {
        String nomeDoArquivoDefault =
                Converter.LocalDateToString(LocalDate.now(), "dd-MM-yyyy") + "Arquivo01Vagas.txt";
        if (nomeDoArquivo == null)
            nomeDoArquivo = nomeDoArquivoDefault;

        ArquivoHandler.exportar(nomeDoArquivo, getTextoParaExportar(isCsv), append, isCsv);
    }

    //Lê as linhas do arquivo lido e preenche os atributos com os dados
    public void desserializar(ListaObj<String> linhas) {
        String nomeDaOng = null;
        ListaObj<VagaDTO> vagas = new ListaObj<>(linhas.getTamanho() - 2);
        for (int i = 0; i < linhas.getTamanho() - 1; i++) {
            //Se for a primeira linha, quer dizer que é o Header
            if (i == 0)
                nomeDaOng = linhas.getElemento(i).substring(2, 31).trim();
            else {
                //Parseia os dados de acordo com o arquivo de layout
                String diaInicio = linhas.getElemento(i).substring(0, 2);
                String mesInicio = linhas.getElemento(i).substring(3, 5);
                String anoInicio = linhas.getElemento(i).substring(6, 10);
                String dataInicio = anoInicio+"-"+mesInicio+"-"+diaInicio;

                String diaFim = linhas.getElemento(i).substring(10, 12);
                String mesFim = linhas.getElemento(i).substring(13, 15);
                String anoFim = linhas.getElemento(i).substring(16, 20);
                String dataFim = anoFim+"-"+mesFim+"-"+diaFim;

                String titulo = linhas.getElemento(i).substring(20, 275).trim();
                String causa = linhas.getElemento(i).substring(275, 325).trim();
                String descricao = linhas.getElemento(i).substring(325, 581).trim();

                String logradouro = linhas.getElemento(i).substring(581, 682).trim();
                Integer numeroEndereco = Integer.parseInt(linhas.getElemento(i).substring(682, 686).trim());
                String cep = linhas.getElemento(i).substring(686, 695).trim();
                String cidade = linhas.getElemento(i).substring(695, 740).trim();
                String estado = linhas.getElemento(i).substring(740, 742).trim();
                String bairro = linhas.getElemento(i).substring(742, 787).trim();

                LocalDate localDateInicio = Jsr310Converters.StringToLocalDateConverter.INSTANCE.convert(dataInicio);
                Date finalDateInicio = Jsr310Converters.LocalDateToDateConverter.INSTANCE.convert(localDateInicio);

                LocalDate localDateFim = Jsr310Converters.StringToLocalDateConverter.INSTANCE.convert(dataFim);
                Date finalDateFim = Jsr310Converters.LocalDateToDateConverter.INSTANCE.convert(localDateFim);

                //Instancia o objeto vaga para salvar no atributo
                //vagasDeUmaOng
                VagaDTO vaga = new VagaDTO(
                        titulo,
                        finalDateInicio,
                        finalDateFim,
                        causa,
                        descricao,
                        logradouro,
                        numeroEndereco,
                        cep,
                        cidade,
                        estado,
                        bairro
                );

                vagas.adiciona(vaga);
            }
        }
        vagasDeUmaOng = new VagasDeUmaOngDTO(nomeDaOng, vagas);
    }
}