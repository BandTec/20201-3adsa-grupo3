package br.com.bandtec.projetopicompassio.utils;

public class FilaObj<T> {

    private int tamanho;
    private T[] fila;

    public FilaObj(int capacidade) {
        this.tamanho = 0;
        this.fila = (T[]) new Object[capacidade];
    }

    public boolean isEmpty() {
        return tamanho == 0 ? true : false;
    }

    public boolean isFull() {
        return tamanho == fila.length ? true : false;
    }

    public void insert(T info) {
        if (this.isFull())
            return;
        fila[tamanho++] = info;
    }

    public T peek() {
        return fila[0];
    }

    public T poll() {
        if (this.isEmpty())
            return null;
        T primeiro = fila[0];
        for (int i = 0; i < tamanho - 1; i++) {
            fila[i] = fila[i+1];
        }
        fila[--tamanho] = null;
        return primeiro;
    }

    public void exibe() {
        if (this.isEmpty()) {
            System.out.println("Lista vazia");
            return;
        }
        System.out.println("\nExibindo fila: ");
        for (T info : fila) {
            System.out.println(info);
        }
    }
}
