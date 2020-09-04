package br.com.bandtecgrupo3pi.projetopigrupo3;

import java.util.ArrayList;
import java.util.List;

public abstract class Usuario {

    //Atributos
    private String email;
    private String endereco;
    private String telefone;
    protected Integer pontuacao;
    protected Integer quantPontuacao;
    private List<String> feed;

    //Constructor
    public Usuario(String email, String telefone, String endereco) {
        this.email = email;
        this.endereco = endereco;
        this.telefone = telefone;
        feed = new ArrayList<>();
    }

    //Métodos
    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getEndereco() {
        return endereco;
    }


    public List<String> getFeed() {
        return feed;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String toString() {
        return "Usuario: ";
    }

    //Métodos abstrato
    public abstract Integer calcularPontuacao();

    public abstract String postarFeed(String descricao);
}
