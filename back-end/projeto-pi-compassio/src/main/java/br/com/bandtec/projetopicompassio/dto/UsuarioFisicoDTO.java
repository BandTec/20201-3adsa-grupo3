package br.com.bandtec.projetopicompassio.dto;

import java.io.Serializable;
import java.util.Date;

public class UsuarioFisicoDTO implements Serializable {

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

    public UsuarioFisicoDTO(){}

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public void setEndereco(EnderecoDTO endereco) {
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
