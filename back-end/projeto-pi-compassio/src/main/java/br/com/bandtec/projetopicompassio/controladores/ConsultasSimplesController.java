package br.com.bandtec.projetopicompassio.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/consulta")
public class ConsultasSimplesController {

    @Autowired
    private JdbcTemplate template;

    @GetMapping("/cidades")
    public ResponseEntity getCidadesByUf(@RequestParam String uf) {
        try {
            List cidades = template.queryForList("SELECT NOME FROM CIDADE WHERE FK_SIGLA_UF LIKE ?", uf);
            return ResponseEntity.ok(cidades);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }

    @GetMapping("/estados")
    public ResponseEntity getUfs() {
        try {
            List ufs = template.queryForList("SELECT SIGLA_UF FROM ESTADO");
            return ResponseEntity.ok(ufs);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(ex.getMessage());
        }
    }
}
