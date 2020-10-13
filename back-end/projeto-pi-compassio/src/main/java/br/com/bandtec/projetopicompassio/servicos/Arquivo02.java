package br.com.bandtec.projetopicompassio.servicos;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.Converter;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import java.time.LocalDate;

public class Arquivo02 extends Arquivo {

    private String nomeDaOng;
    private String tituloDaVaga;
    private ListaObj<UsuarioFisico> voluntarios;

    public Arquivo02(String nomeDaOng, String tituloDaVaga, ListaObj<UsuarioFisico> voluntarios) {
        super.idArquivo = TiposDeArquivo.ARQUIVO_02.getIdArquivo();
        this.nomeDaOng = nomeDaOng;
        this.tituloDaVaga = tituloDaVaga;
        this.voluntarios = voluntarios;
    }

    public String getTextoParaExportar() {
        StringBuilder registro = new StringBuilder();

        //Escrevendo Header
        String dataAtual = Converter.LocalDateToString(LocalDate.now(), "ddMMyyyy");
        registro.append(String.format("%s%040s%030s%s\n", idArquivo, tituloDaVaga, nomeDaOng, dataAtual));

        //Escrevendo Body
        int totalRegistros = 0;
        for (int i = 0; i < voluntarios.getTamanho(); i++) {
            UsuarioFisico voluntario = voluntarios.getElemento(i);
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
}
