package br.com.bandtec.projetopicompassio.arquivos;

import br.com.bandtec.projetopicompassio.dominios.Endereco;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisicoVaga;
import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.dto.*;
import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.Converter;
import br.com.bandtec.projetopicompassio.utils.ListaObj;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

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

    public String getTextoParaExportar() {
        StringBuilder registro = new StringBuilder();

        //Escrevendo Header
        String dataAtual = Converter.LocalDateToString(LocalDate.now(), "ddMMyyyy");
        String tituloDaVaga = voluntariosDeUmaVaga.getNomeVaga();
        String nomeDaOng = voluntariosDeUmaVaga.getNomeOng();
        registro.append(String.format("%s%040s%030s%s\n", idArquivo, tituloDaVaga, nomeDaOng, dataAtual));

        //Escrevendo Body
        int totalRegistros = 0;
        ListaObj<VoluntarioInscritoDTO> voluntarios = voluntariosDeUmaVaga.getVoluntariosInscritos();
        for (int i = 0; i < voluntarios.getTamanho(); i++) {
            VoluntarioInscritoDTO voluntario = voluntarios.getElemento(i);
            registro.append(voluntario.toString() + "\n");
            totalRegistros ++;
        }

        //Escrevendo Trailer
        registro.append(String.format("%05d", totalRegistros));

        return registro.toString();
    }

    public void exportar(String nomeDoArquivo, boolean append) throws Exception {
        String nomeDoArquivoDefault =
                Converter.LocalDateToString(LocalDate.now(), "ddMMyyyy") + "Arquivo02Voluntarios.txt";
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
        String nomeDaVaga = null;
        String nomeDaOng = null;
        ListaObj<VoluntarioInscritoDTO> voluntarios = new ListaObj<>(linhas.size() - 2);
        for (int i = 0; i < linhas.size() - 1; i++) {
            //Se for a primeira linha, quer dizer que é o Header
            if (i == 0) {
                nomeDaVaga = linhas.get(i).substring(2, 41).trim();
                nomeDaOng = linhas.get(i).substring(42, 71).trim();
            } else {
                //Parseia os dados de acordo com o arquivo de layout
                String dataDaInscricao = linhas.get(i).substring(0, 7);
                String nomeDoVoluntario = linhas.get(i).substring(8, 48).trim();
                String emailDoVoluntario = linhas.get(i).substring(49, 89).trim();
                String dataDeNascimento = linhas.get(i).substring(90, 98);
                String cidade = linhas.get(i).substring(99, 129).trim();
                String uf = linhas.get(i).substring(130, 131);

                //Instancia os objetos para salvar no atributo
                //voluntariosDeUmaOng
                EnderecoDTO enderecoDoVoluntario = new EnderecoDTO(cidade, uf);

                UsuarioFisicoDTO usuarioFisico = new UsuarioFisicoDTO(
                        nomeDoVoluntario,
                        emailDoVoluntario,
                        Date.valueOf(dataDeNascimento),
                        enderecoDoVoluntario
                );

                VoluntarioInscritoDTO voluntario = new VoluntarioInscritoDTO(
                        usuarioFisico,
                        Date.valueOf(dataDaInscricao)
                );

                voluntarios.adiciona(voluntario);
            }
        }
        voluntariosDeUmaVaga = new VoluntariosDeUmaVagaDTO(nomeDaOng, nomeDaVaga, voluntarios);
    }
}
