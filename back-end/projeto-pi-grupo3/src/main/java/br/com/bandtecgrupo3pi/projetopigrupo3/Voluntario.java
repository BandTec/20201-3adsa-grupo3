package br.com.bandtecgrupo3pi.projetopigrupo3;

public class Voluntario extends Usuario{

    //Atributos
    private String nome;
    private String sobrenome;
    private Integer idade;
    private String cpf;
    private String sexo;

    //Constructor
    public Voluntario(String nome, String sobrenome, Integer idade, String cpf, String sexo, String email, String telefone, String endereco) {
        super(email, telefone, endereco);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
        this.sexo = sexo;
    }

    //Métodos abstratos
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
                "\nNome: " + nome +
                "\nSobrenome: " + sobrenome +
                "\nIdade: " + idade +
                "\nCPF: " + cpf +
                "\nSexo: " + sexo +
                "\nE-mail: " + getEmail() +
                "\nEndereço: " + getEndereco() +
                "\nTelefone: " + getTelefone() +
                String.format("\nAvaliação: %d", calcularPontuacao());
    }

    //Métodos
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
}
