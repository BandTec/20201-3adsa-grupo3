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

    @PostMapping("/baixar")
    public HttpEntity baixar(
            @RequestParam(required = true) String idArquivo,
            @RequestParam(required = true) String nomeDoArquivo,
            @RequestParam(required = true) String nomeDaOng,
            @RequestParam(required = false) String nomeDaVaga
    ) {
        try {
            IArquivo arquivo = ArquivoAdapter.getModeloDoArquivoById(idArquivo);

            if (arquivo instanceof Arquivo01) {
                List<UsuarioJuridico> meiota = usuarioJuridicoRepository.findAllUsuarioJuridicoByNomeOng(nomeDaOng);
                List<VagaDTO> meiotaPlus = vagaRepository.findAllVagasSimplesByUsuarioJuridico(meiota.get(0));
                ListaObj<VagaDTO> vagasObj = (ListaObj<VagaDTO>) ListaObj.convert(meiotaPlus);
                VagasDeUmaOngDTO vagasDeUmaOng = new VagasDeUmaOngDTO(nomeDaOng, vagasObj);
                arquivo.setObject(vagasDeUmaOng);
            }

            /*else if (arquivo instanceof Arquivo02) {
                List<VoluntarioInscritoDTO> voluntarios =
                        voluntarioRepository.findAllVoluntariosSimplesInscritos(nomeDaVaga);
                ListaObj<VoluntarioInscritoDTO> voluntariosObj =
                        (ListaObj<VoluntarioInscritoDTO>) ListaObj.convert(voluntarios);
                VoluntariosDeUmaVagaDTO voluntariosDaVaga =
                        new VoluntariosDeUmaVagaDTO(nomeDaOng, nomeDaVaga, voluntariosObj);
                arquivo.setObject(voluntariosDaVaga);
            }*/

            ArquivoContext.setArquivo(arquivo);
            ArquivoContext.exportar(nomeDoArquivo, false);

                byte[] arq = new FileInputStream(nomeDoArquivo).readAllBytes();

                HttpHeaders headers = new HttpHeaders();
                headers.add("Content-Disposition", "attachment; filename=".concat(nomeDoArquivo));

                HttpEntity<byte[]> entity = new HttpEntity(arq, headers);
                return entity;
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex);
        }
    }
}
