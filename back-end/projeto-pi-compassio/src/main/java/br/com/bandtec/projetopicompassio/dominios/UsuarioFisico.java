package br.com.bandtec.projetopicompassio.dominios;

import br.com.bandtec.projetopicompassio.utils.Converter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class UsuarioFisico {

    @Id
    private Integer idUsuarioFisico;
    @Column(length = 90, nullable = false)
    private String email;
    @Column(length = 80, nullable = false)
    private String nome;
    @Column(length = 45, nullable = false)
    private String senha;
    @Column(length = 15, nullable = false)
    private String telefone;
    @Column(nullable = false)
    private Date dataNascimento;
    @Column(length = 14, nullable = false)
    private String cpf;
    private Boolean sexo;

    public Integer getIdUsuarioFisico() {
        return idUsuarioFisico;
    }

    public void setIdUsuarioFisico(Integer idUsuarioFisico) {
        this.idUsuarioFisico = idUsuarioFisico;
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

    public Boolean getSexo() {
        return sexo;
    }

    public void setSexo(Boolean sexo) {
        this.sexo = sexo;
    }
}
