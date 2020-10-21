package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.arquivos.*;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisicoVaga;
import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.dto.VagaDTO;
import br.com.bandtec.projetopicompassio.dto.VagasDeUmaOngDTO;
import br.com.bandtec.projetopicompassio.dto.VoluntarioInscritoDTO;
import br.com.bandtec.projetopicompassio.dto.VoluntariosDeUmaVagaDTO;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioFisicoRepository;
import br.com.bandtec.projetopicompassio.repositorios.UsuarioJuridicoRepository;
import br.com.bandtec.projetopicompassio.repositorios.VagaRepository;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/arquivos")
public class ArquivoController {

    @Autowired
    private VagaRepository vagaRepository;

    @Autowired
    private UsuarioJuridicoRepository usuarioJuridicoRepository;

    @Autowired
    private UsuarioFisicoRepository voluntarioRepository;

    @GetMapping(value = "/arquivo01", produces = {"application/octet-stream"})
    @ResponseBody
    public HttpEntity baixarArquivo01(
            @RequestParam String idArquivo,
            @RequestParam String nomeDoArquivo,
            @RequestParam String nomeDaOng,
            @RequestParam boolean isCsv
    ) {
        try {
            IArquivo arquivo = ArquivoAdapter.getModeloDoArquivoById(idArquivo);

            ArquivoContext.setArquivo(arquivo);

            try {
                ArquivoContext.exportar(nomeDoArquivo, false);
            } catch (IOException ioEx) {
                return ResponseEntity.status(500).body("Erro ao gerar o arquivo");
            }

            String nomeDoArquivoGerado = isCsv ? nomeDoArquivo.concat(".csv") : nomeDoArquivo.concat(".txt");
            return this.getArquivo(nomeDoArquivoGerado);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex);
        }
    }

    @GetMapping(value = "/arquivo02", produces = {"application/octet-stream"})
    @ResponseBody
    public HttpEntity baixarArquivo02(
            @RequestParam String idArquivo,
            @RequestParam String nomeDoArquivo,
            @RequestParam String nomeDaOng,
            @RequestParam String nomeDaVaga,
            @RequestParam boolean isCsv

    ) {
        try {
            IArquivo arquivo = ArquivoAdapter.getModeloDoArquivoById(idArquivo);

            ArquivoContext.setArquivo(arquivo);

            try {
                ArquivoContext.exportar(nomeDoArquivo, false);
            } catch (IOException ioEx) {
                return ResponseEntity.status(500).body("Erro ao gerar o arquivo");
            }

            String nomeDoArquivoGerado = isCsv ? nomeDoArquivo.concat(".csv") : nomeDoArquivo.concat(".txt");
            return this.getArquivo(nomeDoArquivoGerado);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex);
        }
    }

    /*private void configurarArquivo(IArquivo arquivo) {
        if (arquivo instanceof Arquivo01) {
            List<UsuarioJuridico> ong = usuarioJuridicoRepository.findAllUsuarioJuridicoByNomeOng(nomeDaOng);
            List<VagaDTO> vagasDaOng = vagaRepository.findAllVagasSimplesByUsuarioJuridico(ong.get(0));
            ListaObj<VagaDTO> vagasObj = (ListaObj<VagaDTO>) ListaObj.convert(vagasDaOng);
            VagasDeUmaOngDTO vagasDeUmaOng = new VagasDeUmaOngDTO(nomeDaOng, vagasObj);
            arquivo.setObject(vagasDeUmaOng);
        } else if (arquivo instanceof Arquivo02) {
            List<VoluntarioInscritoDTO> voluntarios =
                    voluntarioRepository.findAllVoluntariosSimplesInscritos(nomeDaVaga);
            ListaObj<VoluntarioInscritoDTO> voluntariosObj =
                    (ListaObj<VoluntarioInscritoDTO>) ListaObj.convert(voluntarios);
            VoluntariosDeUmaVagaDTO voluntariosDaVaga =
                    new VoluntariosDeUmaVagaDTO(nomeDaOng, nomeDaVaga, voluntariosObj);
            arquivo.setObject(voluntariosDaVaga);
        }
    }*/

    private HttpEntity getArquivo(String nomeDoArquivo) {
        byte[] arq;
        try {
            arq = new FileInputStream(nomeDoArquivo).readAllBytes();
        } catch (FileNotFoundException fEx) {
            return ResponseEntity.status(500).body("O arquivo não foi encontrado");
        } catch (IOException ioEx) {
            return ResponseEntity.status(500).body("Erro na leitura do arquivo");
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=".concat(nomeDoArquivo));

        HttpEntity<byte[]> entity = new HttpEntity(arq, headers);
        return entity;
    }
}
