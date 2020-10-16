package br.com.bandtec.projetopicompassio.servicos;

import br.com.bandtec.projetopicompassio.dominios.Endereco;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisicoVaga;
import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.Converter;
import br.com.bandtec.projetopicompassio.utils.ListaObj;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

public class Arquivo02 extends Arquivo {

    private String nomeDaOng;
    private ListaObj<UsuarioFisicoVaga> voluntariosDeUmaVaga;

    public Arquivo02(String nomeDaOng, String tituloDaVaga, ListaObj<UsuarioFisicoVaga> voluntariosDeUmaVaga) {
        super.idArquivo = TiposDeArquivo.ARQUIVO_02.getIdArquivo();
        this.nomeDaOng = nomeDaOng;
        this.voluntariosDeUmaVaga = voluntariosDeUmaVaga;
    }

    public String getTextoParaExportar() {
        StringBuilder registro = new StringBuilder();

        //Escrevendo Header
        String dataAtual = Converter.LocalDateToString(LocalDate.now(), "ddMMyyyy");
        String tituloDaVaga = voluntariosDeUmaVaga.getElemento(0).getFkVaga().getTitulo();
        registro.append(String.format("%s%040s%030s%s\n", idArquivo, tituloDaVaga, nomeDaOng, dataAtual));

        //Escrevendo Body
        int totalRegistros = 0;
        for (int i = 0; i < voluntariosDeUmaVaga.getTamanho(); i++) {
            UsuarioFisicoVaga voluntario = voluntariosDeUmaVaga.getElemento(i);
            registro.append(voluntario.getMinimalInfo() + "\n");
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

    public void desserializar(List<String> linhas) {
        String nomeDaVaga = null;
        for (int i = 0; i < linhas.size() - 1; i++) {
            if (i == 0) {
                nomeDaVaga = linhas.get(i).substring(2, 41).trim();
                nomeDaOng = linhas.get(i).substring(42, 71).trim();
            } else {
                String dataDaInscricao = linhas.get(i).substring(0, 7);
                String nomeDoVoluntario = linhas.get(i).substring(8, 48).trim();
                String emailDoVoluntario = linhas.get(i).substring(49, 89).trim();
                String dataDeNascimento = linhas.get(i).substring(90, 98);
                String cidade = linhas.get(i).substring(99, 129).trim();
                String uf = linhas.get(i).substring(130, 131);
                //String participou = linhas.get(i).substring(131, 132);

                Vaga vaga = new Vaga();
                vaga.setTitulo(nomeDaVaga);

                Endereco enderecoDoVoluntario = new Endereco();
                enderecoDoVoluntario.setCidade(cidade);
                enderecoDoVoluntario.setEstado(uf);

                UsuarioFisico voluntario = new UsuarioFisico();
                voluntario.setNome(nomeDoVoluntario);
                voluntario.setEmail(emailDoVoluntario);
                voluntario.setDataNascimento(Date.valueOf(dataDeNascimento));
                voluntario.setFkEndereco(enderecoDoVoluntario);

                UsuarioFisicoVaga voluntarioDeUmaVaga = new UsuarioFisicoVaga();
                voluntarioDeUmaVaga.setDataInscricao(Date.valueOf(dataDaInscricao));
                voluntarioDeUmaVaga.setFkUsuarioFisico(voluntario);
                voluntarioDeUmaVaga.setFkVaga(vaga);

                voluntariosDeUmaVaga.adiciona(voluntarioDeUmaVaga);
            }
        }
    }
}
