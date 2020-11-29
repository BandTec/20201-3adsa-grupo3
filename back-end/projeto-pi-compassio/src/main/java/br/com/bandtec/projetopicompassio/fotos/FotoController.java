package br.com.bandtec.projetopicompassio.fotos;

import org.apache.tomcat.jni.Directory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequestMapping("/fotos")
public class FotoController {

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadFotos(@RequestParam MultipartFile arquivo)  {
        try {
            if (arquivo.isEmpty())
                return ResponseEntity.badRequest().body("Arquivo não enviado");

            String fileMimeType = arquivo.getContentType();
            String tipoDeArquivo = fileMimeType.substring(fileMimeType.indexOf('/') + 1);
            if (tipoDeArquivo.equals("png") ||
                tipoDeArquivo.equals("jpeg") ||
                tipoDeArquivo.equals("jpg")) {

                byte[] conteudo;
                try {
                    conteudo = arquivo.getBytes();
                } catch (IOException ioEx){
                    throw new IllegalArgumentException();
                }

                String random = String.valueOf(ThreadLocalRandom.current().nextInt(1000, 9999));
                String filePath =
                        random + arquivo.getOriginalFilename().hashCode() +
                                "-" + arquivo.getOriginalFilename();

                new File("fotos").mkdir();
                Path path = new File("fotos", filePath).toPath();
                //Files.write(path, conteudo, StandardOpenOption.CREATE);
                Path savedPath = Files.write(path, conteudo, StandardOpenOption.CREATE);

                return ResponseEntity.created(null).body(savedPath.toString());
            }
            else
                throw new IllegalArgumentException();
        } catch (IllegalArgumentException ilEx) {
            return ResponseEntity.badRequest().body("Arquivo inválido!");
        } catch (IOException ioEx) {
            return ResponseEntity.status(500).body("Erro ao gravar arquivo!");
        } catch (Exception ex){
            return ResponseEntity.status(500).body("Erro ao tentar importar Foto");
        }
    }

    @GetMapping(produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public ResponseEntity download(@RequestParam String arquivo) {
        byte[] arq;

        try {
            arq = new FileInputStream(arquivo).readAllBytes();
        } catch (FileNotFoundException fEx) {
            return ResponseEntity.badRequest().body("Foto não encontrada");
        } catch (IOException ioEx) {
            return ResponseEntity.status(500).body("Erro na leitura do arquivo");
        }

        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(arq);
    }
}
