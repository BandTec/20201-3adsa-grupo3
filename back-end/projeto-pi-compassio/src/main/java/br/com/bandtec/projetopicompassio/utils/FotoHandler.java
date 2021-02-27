package br.com.bandtec.projetopicompassio.utils;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.Multipart;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.Base64;
import java.util.concurrent.ThreadLocalRandom;

public class FotoHandler {

    public static String upload(MultipartFile arquivo) throws Exception {
        try {
            if (arquivo.isEmpty())
                throw new IllegalArgumentException();

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
                Path savedPath = Files.write(path, conteudo, StandardOpenOption.CREATE);
                return savedPath.toString().replace('\\', '/');
            }
            else
                throw new IllegalArgumentException();
        } catch (IllegalArgumentException ilEx) {
            throw new IllegalArgumentException("Arquivo inválido");
        } catch (IOException ioEx) {
            throw new IOException("Erro ao gravar arquivo");
        } catch (Exception ex){
            throw new Exception("Erro ao tentar importar foto");
        }
    }

    public static byte[] download(String arquivo) throws Exception {
        byte[] arq;

        try {
            return new FileInputStream(arquivo).readAllBytes();
        } catch (FileNotFoundException fEx) {
            throw new FileNotFoundException("Foto não encontrada");
        } catch (IOException ioEx) {
            throw new IOException("Erro na leitura do arquivo");
        } catch (Exception ex) {
            throw new Exception("Erro ao tentar exportar foto");
        }
    }

    public static byte[] validateAndGetBytesFromFile(MultipartFile arquivo) throws Exception {
        try {
            if (arquivo.isEmpty())
                throw new IllegalArgumentException();

            String fileMimeType = arquivo.getContentType();
            String tipoDeArquivo = fileMimeType.substring(fileMimeType.indexOf('/') + 1);
            if (!tipoDeArquivo.equals("png") &&
                    !tipoDeArquivo.equals("jpeg") &&
                    !tipoDeArquivo.equals("jpg")) {
                throw new IllegalArgumentException();
            }
            else {
                byte[] conteudo;
                try {
                    return arquivo.getBytes();
                } catch (IOException ioEx){
                    throw new IllegalArgumentException();
                }
            }
        } catch (IllegalArgumentException ilEx) {
            throw new IllegalArgumentException("Arquivo inválido");
        } catch (Exception ex){
            throw new Exception("Erro ao tentar importar foto");
        }
    }

    public static byte[] convertToBase64(MultipartFile arquivo) throws Exception {
        try {
            byte[] conteudo = validateAndGetBytesFromFile(arquivo);
            return Base64.getEncoder().encode(conteudo);
        } catch (Exception ex){
            throw ex;
        }
    }

    public static String convertToBase64String(MultipartFile arquivo) throws Exception {
        try {
            byte[] conteudo = validateAndGetBytesFromFile(arquivo);
            return Base64.getEncoder().encodeToString(conteudo);
        } catch (Exception ex){
            throw ex;
        }
    }
}
