package br.com.bandtec.projetopicompassio.dto.outputs;

import java.sql.Date;

public class UsuarioFisicoDTO_Output {

    private String nome;
    private String email;
    private Date dataNascimento;
    private EnderecoDTO_Output endereco;

    public UsuarioFisicoDTO_Output(String nome, String email, Date dataNascimento, EnderecoDTO_Output endereco) {
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

    public EnderecoDTO_Output getEndereco() {
        return endereco;
    }
}
