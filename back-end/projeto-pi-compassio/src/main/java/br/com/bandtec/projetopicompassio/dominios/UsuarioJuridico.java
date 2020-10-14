package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;

@Entity
public class UsuarioJuridico {

    @Id
    @Column(name = "id_usuario_juridico")
    private Integer idUsuarioJuridico;
    @Column(length = 90, nullable = false, name = "nome_ong")
    private String nomeOng;
    @Column(length = 80, nullable = false, unique = true)
    private String email;
    @Column(length = 45, nullable = false)
    private String senha;
    @Column(length = 15, nullable = false)
    private String telefone;
    @Column(length = 14, nullable = false)
    private String cnpj;
    @Column(length = 50, nullable = false)
    private String causa;
    @Column(length = 256, nullable = false, name = "descricao_ong")
    private String descricaoOng;
    @Column(nullable = false)
        private Boolean logado;
    @OneToOne
    @JoinColumn(nullable = false, name = "fk_endereco")
    private Endereco fkEndereco;

    public Boolean getLogado() {
        return logado;
    }

    public void setLogado(Boolean logado) {
        this.logado = logado;
    }

    public Integer getIdUsuarioJuridico() {
        return idUsuarioJuridico;
    }

    public void setIdUsuarioJuridico(Integer idUsuarioJuridico) {
        this.idUsuarioJuridico = idUsuarioJuridico;
    }

    public String getNomeOng() {
        return nomeOng;
    }

    public void setNomeOng(String nomeOng) {
        this.nomeOng = nomeOng;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getDescricaoOng() {
        return descricaoOng;
    }

    public void setDescricaoOng(String descricaoOng) {
        this.descricaoOng = descricaoOng;
    }

    public Endereco getFkEndereco() {
        return fkEndereco;
    }

    public void setFkEndereco(Endereco fkEndereco) {
        this.fkEndereco = fkEndereco;
    }
}
