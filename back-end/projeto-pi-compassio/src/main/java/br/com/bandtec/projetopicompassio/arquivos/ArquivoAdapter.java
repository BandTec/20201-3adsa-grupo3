package br.com.bandtec.projetopicompassio.arquivos;

import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.dto.VagaDTO;
import br.com.bandtec.projetopicompassio.dto.VagasDeUmaOngDTO;
import br.com.bandtec.projetopicompassio.dto.VoluntarioInscritoDTO;
import br.com.bandtec.projetopicompassio.dto.VoluntariosDeUmaVagaDTO;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoRepository;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioJuridicoRepository;
import br.com.bandtec.projetopicompassio.repositorios.VagaRepository;
import br.com.bandtec.projetopicompassio.utils.ArquivoHandler;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import org.springframework.beans.factory.annotation.Autowired;

import java.lang.reflect.Type;
import java.util.List;

public class ArquivoAdapter {

    @Autowired
    private static UsuarioJuridicoRepository usuarioJuridicoRepository;

    @Autowired
    private static VagaRepository vagaRepository;

    @Autowired
    private static UsuarioFisicoRepository voluntarioRepository;

    public static IArquivo getModeloDoArquivoById(String id) throws Exception {
        try {
            String nome = "br.com.bandtec.projetopicompassio.arquivos.Arquivo" + id;
            return (IArquivo) Class.forName(nome).newInstance();
        } catch (Exception ex) {
            throw new Exception("Id inválido - " + ex);
        }
    }

    public static IArquivo importar(String nomeDoArquivo) throws Exception {
        try {
            List<String> linhas = ArquivoHandler.importar(nomeDoArquivo);

            String modeloDoArquivo = linhas.get(0).substring(0, 1);
            IArquivo arquivo = null;

            for (int i = 0; i < Modelos.values().length; i++) {
                String id = Modelos.values()[i].getIdArquivo();
                if (modeloDoArquivo.equals(id)) {
                    arquivo = ArquivoAdapter.getModeloDoArquivoById(id);
                    break;
                }
            }
            arquivo.desserializar(linhas);
            return arquivo;
        } catch (Exception ex) {
        throw ex;
        }
    }
}
