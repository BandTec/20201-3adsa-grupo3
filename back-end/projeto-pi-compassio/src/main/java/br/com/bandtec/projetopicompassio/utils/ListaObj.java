package br.com.bandtec.projetopicompassio.utils;

import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.List;

public class ListaObj <T> {

    private T[] vetor;
    private int numeroDeElementos;

    public ListaObj(int tam) {
        vetor = (T[]) new Object[tam];
        numeroDeElementos = 0;
    }

    public boolean adiciona(T valor) {
        if (numeroDeElementos >= vetor.length) {
            System.out.println("Lista está cheia");
            return false;
        }
        else {
            vetor[numeroDeElementos++] = valor;
            return true;
        }
    }

    public void exibe() {
        System.out.println("\nExibindo elementos da lista:");
        for (int i = 0; i< numeroDeElementos; i++)
            System.out.println(vetor[i] + "\t");
        System.out.println();
    }

    public int busca(T valor) {
        for (int i = 0; i < numeroDeElementos; i++) {
            if (vetor[i].equals(valor))
                return i;
        }
        return -1;
    }

    public boolean removePeloIndice(int indice) {
        if (indice < 0 || indice >= numeroDeElementos)
            return false;
        else {
            for (int i = indice; i < numeroDeElementos -1; i++)
                vetor[i] = vetor[i+1];
            numeroDeElementos--;
            return true;
        }
    }

    public boolean removeElemento(T valor) {
        return removePeloIndice(busca(valor));
    }

    public int getTamanho() {
        return numeroDeElementos;
    }

    public T getElemento(int indice) {
        if (indice < 0 || indice >= numeroDeElementos)
            return null;
        else
            return vetor[indice];
    }

    public void limpa() {
        numeroDeElementos = 0;
    }

    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        for (T elemento : vetor)
            stringBuilder.append(elemento+"\n");
        return stringBuilder.toString();
    }

    public static ListaObj<?> convert(List<?> lista) {
        ListaObj<Object> listaObj = new ListaObj<>(lista.size());
        for (Object obj : lista) {
            listaObj.adiciona(obj);
        }
        return listaObj;
    }
}
