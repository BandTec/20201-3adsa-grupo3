package br.com.bandtec.projetopicompassio.arquivos;

import br.com.bandtec.projetopicompassio.dto.*;
import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.Converter;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import org.springframework.data.convert.Jsr310Converters;

import java.io.IOException;
import java.util.Date;
import java.time.LocalDate;

public class Arquivo02 implements IArquivo {

    private String idArquivo;
    private VoluntariosDeUmaVagaDTO voluntariosDeUmaVaga;

    public Arquivo02(String nomeDaOng, String tituloDaVaga, VoluntariosDeUmaVagaDTO voluntariosDeUmaVaga) {
        this.idArquivo = Modelos.ARQUIVO_02.getIdArquivo();
        this.voluntariosDeUmaVaga = voluntariosDeUmaVaga;
    }

    public Arquivo02() {
        this.idArquivo = Modelos.ARQUIVO_02.getIdArquivo();
    }

    @Override
    public void setObject(Object obj) {
        voluntariosDeUmaVaga = (VoluntariosDeUmaVagaDTO) obj;
    }

    @Override
    public Object getObject() {
        return voluntariosDeUmaVaga;
    }

    @Override
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
        String tituloDaVaga = voluntariosDeUmaVaga.getNomeVaga();
        String nomeDaOng = voluntariosDeUmaVaga.getNomeOng();
        registro.append(String.format("%s%-40s%-30s%s\n", idArquivo, tituloDaVaga, nomeDaOng, dataAtual));

        //Escrevendo Body
        int totalRegistros = 0;
        ListaObj<VoluntarioInscritoDTO> voluntarios = voluntariosDeUmaVaga.getVoluntariosInscritos();
        for (int i = 0; i < voluntarios.getTamanho(); i++) {
            VoluntarioInscritoDTO voluntario = voluntarios.getElemento(i);
            registro.append(voluntario.toString() + "\n");
            totalRegistros ++;
        }

        //Escrevendo Trailer
        registro.append(String.format("%05d\r\n", totalRegistros));

        return registro.toString();
    }

    private String getTextoCsv() {
        StringBuilder registro = new StringBuilder();

        //Escrevendo Header
        registro.append("DataInscricao;");
        registro.append("Nome;");
        registro.append("Email;");
        registro.append("DataNascimento;");
        registro.append("Cidade;");
        registro.append("Estado;");
        registro.append("\n");

        //Escrevendo Body
        ListaObj<VoluntarioInscritoDTO> voluntarios = voluntariosDeUmaVaga.getVoluntariosInscritos();
        for (int i = 0; i < voluntarios.getTamanho(); i++) {
            VoluntarioInscritoDTO voluntario = voluntarios.getElemento(i);
            registro.append(voluntario.getDataInscricao()+";");
            registro.append(voluntario.getVoluntario().getNome()+";");
            registro.append(voluntario.getVoluntario().getEmail()+";");
            registro.append(voluntario.getVoluntario().getDataNascimento()+";");
            registro.append(voluntario.getVoluntario().getEndereco().getCidade()+";");
            registro.append(voluntario.getVoluntario().getEndereco().getEstado()+";");
            registro.append("\n");
        }
        registro.append("\r\n");

        return registro.toString();
    }

    @Override
    public void exportar(String nomeDoArquivo, boolean append, boolean isCsv) throws IOException {
        String nomeDoArquivoDefault =
                Converter.LocalDateToString(LocalDate.now(), "dd-MM-yyyy") + "Arquivo02Voluntarios.txt";
        if (nomeDoArquivo == null)
            nomeDoArquivo = nomeDoArquivoDefault;

        ArquivoHandler.exportar(nomeDoArquivo, getTextoParaExportar(isCsv), append, isCsv);
    }

    //Lê as linhas do arquivo lido e preenche os atributos com os dados
    @Override
    public void desserializar(ListaObj<String> linhas) {
        String nomeDaVaga = null;
        String nomeDaOng = null;
        ListaObj<VoluntarioInscritoDTO> voluntarios = new ListaObj<>(linhas.getTamanho() - 2);
        for (int i = 0; i < linhas.getTamanho() - 1; i++) {
            //Se for a primeira linha, quer dizer que é o Header
            if (i == 0) {
                nomeDaVaga = linhas.getElemento(i).substring(2, 41).trim();
                nomeDaOng = linhas.getElemento(i).substring(42, 71).trim();
            } else {
                //Parseia os dados de acordo com o arquivo de layout
                String dia = linhas.getElemento(i).substring(0, 2);
                String mes = linhas.getElemento(i).substring(3, 5);
                String ano = linhas.getElemento(i).substring(6, 10);
                String dataDaInscricao = ano+"-"+mes+"-"+dia;
                String nomeDoVoluntario = linhas.getElemento(i).substring(10, 50).trim();
                String emailDoVoluntario = linhas.getElemento(i).substring(50, 90).trim();
                dia = linhas.getElemento(i).substring(90, 92);
                mes = linhas.getElemento(i).substring(93, 95);
                ano = linhas.getElemento(i).substring(96, 100);
                String dataDeNascimento = ano+"-"+mes+"-"+dia;
                String cidade = linhas.getElemento(i).substring(100, 130).trim();
                String uf = linhas.getElemento(i).substring(130, 132);

                LocalDate localDateInicio = Jsr310Converters.StringToLocalDateConverter.INSTANCE.convert(dataDaInscricao);
                java.util.Date finalDateInicio = Jsr310Converters.LocalDateToDateConverter.INSTANCE.convert(localDateInicio);

                LocalDate localDateNascimento = Jsr310Converters.StringToLocalDateConverter.INSTANCE.convert(dataDeNascimento);
                java.util.Date finalDateNascimento = Jsr310Converters.LocalDateToDateConverter.INSTANCE.convert(localDateNascimento);

                //Instancia os objetos para salvar no atributo
                //voluntariosDeUmaOng
                EnderecoDTO enderecoDoVoluntario = new EnderecoDTO(cidade, uf);

                UsuarioFisicoDTO usuarioFisico = new UsuarioFisicoDTO(
                        nomeDoVoluntario,
                        emailDoVoluntario,
                        finalDateNascimento,
                        enderecoDoVoluntario
                );

                VoluntarioInscritoDTO voluntario = new VoluntarioInscritoDTO(
                        usuarioFisico,
                        finalDateInicio
                );

                voluntarios.adiciona(voluntario);
            }
        }
        voluntariosDeUmaVaga = new VoluntariosDeUmaVagaDTO(nomeDaOng, nomeDaVaga, voluntarios);
    }
}
