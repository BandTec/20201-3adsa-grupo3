package br.com.bandtec.projetopicompassio.arquivos;

public enum Modelos {

    ARQUIVO_01("01"), ARQUIVO_02("02");

    private final String idArquivo;

    Modelos(String valorId) {
        this.idArquivo = valorId;
    }

    public String getIdArquivo() {
        return idArquivo;
    }
}
