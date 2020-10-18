package br.com.bandtec.projetopicompassio.dto;

import java.sql.Date;

public class UsuarioFisicoDTO {

    private String nome;
    private String email;
    private Date dataNascimento;
    private EnderecoDTO endereco;

    public UsuarioFisicoDTO(String nome, String email, Date dataNascimento, EnderecoDTO endereco) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public EnderecoDTO getEndereco() {
        return endereco;
    }
}
