package br.com.bandtecgrupo3pi.projetopigrupo3;

public class Ong extends Usuario{

    //Atributos
    private String nomeONG;
    private String cnpj;
    private String causa;
    private String descricao;

    //Constructor
    public Ong(String nomeONG, String cnpj, String causa, String descricao, String email, String telefone, String endereco) {
        super(email, telefone, endereco);
        this.nomeONG = nomeONG;
        this.cnpj = cnpj;
        this.causa = causa;
        this.descricao = descricao;
    }

    //Métodos Abstratos
    @Override
    public Integer calcularPontuacao() {
        quantPontuacao++;
        pontuacao /= quantPontuacao;
        return pontuacao;
    }

    @Override
    public String postarFeed(String descricao) {
        getFeed().add(descricao);
        return descricao;
    }

    @Override
    public String toString() {
        return super.toString() +
                "\nONG: " +
                "\nNome da ONG: " + nomeONG +
                "\nCNPJ: " + cnpj +
                "\nE-mail: " + getEmail() +
                "\nEndereço: " + getEndereco() +
                "\nTelefone: " + getTelefone() +
                "\nCausa da ONG: " + causa +
                "\nDescrição: " + descricao +
                String.format("\nAvaliação: %d", calcularPontuacao());
    }

    //Métodos
    public String getNomeONG() {
        return nomeONG;
    }

    public void setNomeONG(String nomeONG) {
        this.nomeONG = nomeONG;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getCausa() {
        return causa;
    }

    public void setCausa(String causa) {
        this.causa = causa;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
