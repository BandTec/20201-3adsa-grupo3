package br.com.bandtec.projetopicompassio.services;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "imgur", url = "https://api.imgur.com/")
public interface ImgurClient {

    @PostMapping(value = "/3/image", produces = "application/json")
    String postImage(
            @RequestBody byte[] image,
            @RequestHeader("Authorization") String authorization
    );
}
