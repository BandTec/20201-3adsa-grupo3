package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;

@Entity
public class Publicacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "descricao", length = 200, nullable = true)
    private String descricao;

    @Column(name = "imagem", nullable = true)
    private String imagem;

    @Column(name = "curtidas", nullable = true)
    private int curtidas;

    @Column(name = "id_usuario", nullable = false)
    private int idUsuario;

    @Column(name = "tipo_usuario",length = 2, nullable = false)
    private String tipoUsuario;

    public Publicacao() {

    }

    public Publicacao(int id, String descricao, String imagem, int curtidas, int idUsuario, String tipoUsuario) {
        this.id = id;
        this.descricao = descricao;
        this.imagem = imagem;
        this.curtidas = curtidas;
        this.idUsuario = idUsuario;
        this.tipoUsuario = tipoUsuario;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public int getCurtidas() {
        return curtidas;
    }

    public void setCurtidas(int curtidas) {
        this.curtidas = curtidas;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(String tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }
}
