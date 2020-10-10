package br.com.bandtec.projetopicompassio.controladores;


import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.utils.Arquivo;
import br.com.bandtec.projetopicompassio.utils.ListaObj;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.time.LocalDate;

@RestController
@RequestMapping("/arquivos")
public class ArquivoController {

    @GetMapping
    public void cadastrarArquivo(){
        ListaObj<Vaga> lista = new ListaObj<>(2);
        Vaga vaga = new Vaga();
        vaga.setTitulo("Qualquer merda só pra ver o arquivo escrevendo");
        vaga.setDataInicio(Date.valueOf(LocalDate.now()));
        vaga.setDataFim(Date.valueOf(LocalDate.now()));
        lista.adiciona(vaga);

        Arquivo.exportar1(lista,"nomedoarquivo.txt", "Qualquerumqueseja");
        Arquivo.importar1("nomedoarquivo.txt");



    }


}
