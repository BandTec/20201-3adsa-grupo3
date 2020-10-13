package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;

@Entity
@IdClass(AvaliacaoId.class)
public class Avaliacao {

    //Atributos
    @Id
    @Column(name = "id_avaliacao")
    private Integer idAvaliacao;
    @Column(nullable = false)
    private Integer pontuacao;
    @Column(length = 500, nullable = false)
    private String relatorio;
    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_usaurio_fisico")
    private UsuarioFisico fkIdUsuarioFisico;
    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_usuario_juridico")
    private UsuarioJuridico fkIdUsuarioJuridico;

    //Métodos

    public Integer getIdAvaliacao() {
        return idAvaliacao;
    }

    public void setIdAvaliacao(Integer idAvaliacao) {
        this.idAvaliacao = idAvaliacao;
    }

    public Integer getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(Integer pontuacao) {
        this.pontuacao = pontuacao;
    }

    public String getRelatorio() {
        return relatorio;
    }

    public void setRelatorio(String relatorio) {
        this.relatorio = relatorio;
    }

    public UsuarioFisico getFkIdUsuarioFisico() {
        return fkIdUsuarioFisico;
    }

    public void setFkIdUsuarioFisico(UsuarioFisico fkIdUsuarioFisico) {
        this.fkIdUsuarioFisico = fkIdUsuarioFisico;
    }

    public UsuarioJuridico getFkIdUsuarioJuridico() {
        return fkIdUsuarioJuridico;
    }

    public void setFkIdUsuarioJuridico(UsuarioJuridico fkIdUsuarioJuridico) {
        this.fkIdUsuarioJuridico = fkIdUsuarioJuridico;
    }
}