package br.com.bandtec.projetopicompassio.dominios.arquivos;

public enum TiposDeArquivo {

    ARQUIVO_01("01"), ARQUIVO_02("02");

    private String idArquivo;

    TiposDeArquivo(String valorId) {
        this.idArquivo = valorId;
    }

    public String getIdArquivo() {
        return idArquivo;
    }
}
