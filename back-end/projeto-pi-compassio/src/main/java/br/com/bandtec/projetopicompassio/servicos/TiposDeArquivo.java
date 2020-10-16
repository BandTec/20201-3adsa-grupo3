package br.com.bandtec.projetopicompassio.servicos;

public enum TiposDeArquivo {

    ARQUIVO_01("01"), ARQUIVO_02("02");

    private final String idArquivo;

    TiposDeArquivo(String valorId) {
        this.idArquivo = valorId;
    }

    public String getIdArquivo() {
        return idArquivo;
    }
}
