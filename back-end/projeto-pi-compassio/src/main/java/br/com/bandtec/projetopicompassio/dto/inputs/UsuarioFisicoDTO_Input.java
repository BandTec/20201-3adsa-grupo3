package br.com.bandtec.projetopicompassio.dto.inputs;

import java.sql.Date;

public class UsuarioFisicoDTO_Input {

    private int id;
    private String nome;
    private String email;
    private Date dataNascimento;
    private EnderecoDTO_Input endereco;

    public UsuarioFisicoDTO_Input(int id, String nome, String email, Date dataNascimento, EnderecoDTO_Input endereco) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
    }

    public int getId() {
        return id;
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

    public EnderecoDTO_Input getEndereco() {
        return endereco;
    }
}
