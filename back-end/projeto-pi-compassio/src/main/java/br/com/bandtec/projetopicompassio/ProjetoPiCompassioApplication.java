package br.com.bandtec.projetopicompassio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableCaching
public class ProjetoPiCompassioApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoPiCompassioApplication.class, args);
	}

}
