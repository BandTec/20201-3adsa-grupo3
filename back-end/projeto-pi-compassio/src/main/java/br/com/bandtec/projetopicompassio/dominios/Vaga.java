package br.com.bandtec.projetopicompassio.dominios;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Vaga {

    @Id
    @Column(name = "id_vaga")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idVaga;

    @Column(length = 256, nullable = false)
    private String titulo;

    @Column(length = 50)
    private String causa;

    @Column(length = 256, name = "descricao_vaga")
    private String descricao;

    @Column(nullable = false, name = "data_inicio")
    @Temporal(value = TemporalType.DATE)
    private Date dataInicio;

    @Column(name = "data_fim")
    @Temporal(value = TemporalType.DATE)
    private Date dataFim;

    @OneToOne
    @JoinColumn(name = "fk_endereco")
    private Endereco fkEndereco;

    @ManyToOne
    @JoinColumn(nullable = false, name = "fk_usuario_juridico")
    private UsuarioJuridico fkUsuarioJuridico;

    public Vaga() { }

    public Integer getIdVaga() {
        return idVaga;
    }

    public void setIdVaga(Integer idVaga) {
        this.idVaga = idVaga;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCausa() {
        return causa;
    }

    public void setCausa(String causa) {
        this.causa = causa;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataFim() {
        return dataFim;
    }

    public void setDataFim(Date dataFim) {
        this.dataFim = dataFim;
    }

    public Endereco getFkEndereco() {
        return fkEndereco;
    }

    public void setFkEndereco(Endereco fkEndereco) {
        this.fkEndereco = fkEndereco;
    }

    public UsuarioJuridico getFkUsuarioJuridico() {
        return fkUsuarioJuridico;
    }

    public void setFkUsuarioJuridico(UsuarioJuridico fkUsuarioJuridico) {
        this.fkUsuarioJuridico = fkUsuarioJuridico;
    }

    public boolean estaAtiva(){
        Date dataAtual = new Date(System.currentTimeMillis());
        if (dataFim.compareTo(dataAtual) > 0)
            return true;
        return false;
    }
}
