package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.arquivos.*;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisicoVaga;
import br.com.bandtec.projetopicompassio.dominios.UsuarioJuridico;
import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.dto.*;
import br.com.bandtec.projetopicompassio.mappers.UsuarioFisicoMapper;
import br.com.bandtec.projetopicompassio.mappers.UsuarioFisicoVagaMapper;
import br.com.bandtec.projetopicompassio.mappers.VagaMapper;
import br.com.bandtec.projetopicompassio.repositorios.*;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
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
    @Autowired
    private UsuarioFisicoVagaRepository voluntarioDaVagaRepository;
    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private VagaMapper vagaMapper;
    @Autowired
    private UsuarioFisicoMapper usuarioFisicoMapper;
    @Autowired
    private UsuarioFisicoVagaMapper usuarioFisicoVagaMapper;

    private String idArquivo;
    private String nomeDoArquivo;
    private String nomeDaOng;
    private String nomeDaVaga;
    private boolean isCsv;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity importarArquivo(@RequestParam("file") MultipartFile arquivo) throws Exception {
        IArquivo arquivoImportado = ArquivoAdapter.importar(arquivo);
        if (arquivoImportado instanceof Arquivo01)
            convertAndInsertOnDatabaseFromObjectFile(arquivoImportado.getObject());
        else
            return ResponseEntity.badRequest().body("Arquivo inválido! O único modelo de arquivo aceito é o 'Arquivo01'");
        return ResponseEntity.ok(arquivoImportado.getObject());
    }

    private void convertAndInsertOnDatabaseFromObjectFile(Object object) throws Exception {
        try {
            VagasDeUmaOngDTO vagasDeUmaOngDTO = (VagasDeUmaOngDTO)object;
            UsuarioJuridico ong = usuarioJuridicoRepository.findUsuarioJuridicoByNomeOng(vagasDeUmaOngDTO.getNomeDaOng());
            List<Vaga> vagas = new ArrayList();
            for (VagaDTO vagaDTO : vagasDeUmaOngDTO.getVagas().getAll()) {
                Vaga vaga = vagaMapper.toVaga(vagaDTO);
                vaga.setFkUsuarioJuridico(ong);
                vagas.add(vaga);
            }
            vagaRepository.saveAll(vagas);
        } catch (Exception ex) {
            throw new Exception("Objeto de arquivo inválido", ex);
        }
    }

    @GetMapping(value = "/arquivo01", produces = {"application/octet-stream"})
    @ResponseBody
    public HttpEntity baixarArquivo01(
            @RequestParam String nomeDoArquivo,
            @RequestParam String nomeDaOng,
            @RequestParam boolean isCsv
    ) {
        setVariables("01", nomeDoArquivo, nomeDaOng, null, isCsv);
        return getArquivo();
    }

    @GetMapping(value = "/arquivo02", produces = {"application/octet-stream"})
    @ResponseBody
    public HttpEntity baixarArquivo02(
            @RequestParam String nomeDoArquivo,
            @RequestParam String nomeDaOng,
            @RequestParam String nomeDaVaga,
            @RequestParam boolean isCsv
    ) {
        setVariables("02", nomeDoArquivo, nomeDaOng, nomeDaVaga, isCsv);
        return getArquivo();
    }

    private void setVariables(String idArquivo, String nomeDoArquivo, String nomeOng, String nomeVaga, boolean isCsv) {
        this.idArquivo = idArquivo;
        this.nomeDoArquivo = nomeDoArquivo;
        this.nomeDaOng = nomeOng;
        this.nomeDaVaga = nomeVaga;
        this.isCsv = isCsv;
    }

    private HttpEntity getArquivo() {
        try {
            IArquivo arquivo = ArquivoAdapter.getModeloDoArquivoById(idArquivo);
            configurarArquivo(arquivo);
            ArquivoContext.setArquivo(arquivo);

            try {
                ArquivoContext.exportar(nomeDoArquivo, false, isCsv);
            } catch (IOException ioEx) {
                return ResponseEntity.status(500).body("Erro ao gerar o arquivo");
            }

            String nomeDoArquivoGerado = isCsv ? nomeDoArquivo.concat(".csv") : nomeDoArquivo.concat(".txt");
            return this.buildResponseWithFile(nomeDoArquivoGerado);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex);
        }
    }

    private void configurarArquivo(IArquivo arquivo) {
        if (arquivo instanceof Arquivo01) {
            UsuarioJuridico ong = usuarioJuridicoRepository.findUsuarioJuridicoByNomeOng(nomeDaOng);
            List<VagaDTO> vagasDaOng = vagaRepository.findAllVagasSimplesByUsuarioJuridico(ong);
            ListaObj<VagaDTO> vagasObj = (ListaObj<VagaDTO>) ListaObj.convert(vagasDaOng);
            VagasDeUmaOngDTO vagasDeUmaOng = new VagasDeUmaOngDTO(nomeDaOng, vagasObj);
            arquivo.setObject(vagasDeUmaOng);
        } else if (arquivo instanceof Arquivo02) {
            UsuarioJuridico ong = usuarioJuridicoRepository.findUsuarioJuridicoByNomeOng(nomeDaOng);
            Vaga vaga = vagaRepository.findIdVagaByTituloAndFkUsuarioJuridico(nomeDaVaga, ong);
            List<UsuarioFisicoVaga> voluntariosDeUmaVaga = voluntarioDaVagaRepository.findAllUsuarioFisicoVagaByFkVaga(vaga);

            ListaObj<VoluntarioInscritoDTO> voluntariosObj = new ListaObj<>(voluntariosDeUmaVaga.size());
            for (UsuarioFisicoVaga voluntario : voluntariosDeUmaVaga) {
                voluntariosObj.adiciona(usuarioFisicoVagaMapper.toVoluntarioInscritoDTO(voluntario));
            }
            VoluntariosDeUmaVagaDTO voluntariosDaVaga = new VoluntariosDeUmaVagaDTO(nomeDaOng, nomeDaVaga, voluntariosObj);
            arquivo.setObject(voluntariosDaVaga);
        }
    }

    private HttpEntity buildResponseWithFile(String nomeDoArquivo) {
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
