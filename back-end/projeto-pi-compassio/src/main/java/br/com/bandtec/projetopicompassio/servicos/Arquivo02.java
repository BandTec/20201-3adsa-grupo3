package br.com.bandtec.projetopicompassio.servicos;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisicoVaga;
import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.Converter;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import java.time.LocalDate;

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

    public void desserializar(String linha) {
        
    }
}
