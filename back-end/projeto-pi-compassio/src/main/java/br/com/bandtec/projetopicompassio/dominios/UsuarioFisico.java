package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "usuario_fisico")
public class UsuarioFisico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 90, nullable = false, unique = true)
    private String email;

    @Column(length = 80, nullable = false)
    private String nome;

    @Column(length = 45, nullable = false)
    private String senha;

    @Column(length = 15, nullable = false)
    private String telefone;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false, name = "data_nascimento")
    private Date dataNascimento;

    @Column(length = 14, nullable = false)
    private String cpf;

    @Column(length = 255)
    private String foto;

    private Boolean logado;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public Boolean getLogado() {
        return logado;
    }

    public void setLogado(Boolean logado) {
        this.logado = logado;
    }
}
