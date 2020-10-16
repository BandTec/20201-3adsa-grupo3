package br.com.bandtec.projetopicompassio.controladores;

import br.com.bandtec.projetopicompassio.servicos.Arquivo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/arquivos")
public class ArquivoController {

    @PostMapping("/idArquivo")
    public ResponseEntity baixar(
            @PathVariable String idArquivo,
            @RequestParam String nomeDoArquivo,
            @RequestParam String nomeDaVaga
    ) {
        try {
            Arquivo arquivo = Arquivo.getModeloDoArquivoById(idArquivo);
            //Passar parametros para baixar o arquivo
            //Alterar os tipos para as novas DTOs
            //Criar consultas nos repositorys
            arquivo.exportar(nomeDoArquivo, true);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex);
        }
    }
}
