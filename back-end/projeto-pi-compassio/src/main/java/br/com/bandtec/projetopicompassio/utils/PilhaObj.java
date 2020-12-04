package br.com.bandtec.projetopicompassio.utils;

import java.util.ArrayList;
import java.util.List;

public class PilhaObj<T> {

    private int topo;
    private T[] pilha;

    public PilhaObj(int tamanho) {
        pilha = (T[]) new Object[tamanho];
        topo = -1;
    }

    public boolean isEmpty() {
        return topo == -1 ? true : false;
    }

    public boolean isFull() {
        return this.count() == this.size() ? true : false;
    }

    public void push(T elemento) throws Exception {
        if (!this.isFull())
            pilha[++topo] = elemento;
        else
            throw new Exception("A pilha está cheia");
    }

    public boolean pushRange(T[] elementos) {
        if (this.isFull() || this.available() < elementos.length)
            return false;
        for (T elemento : elementos) {
            if (!this.isFull()) {
                try {
                    this.push(elemento);
                } catch (Exception ex) {
                    /* ignore */
                }
            }
        }
        return true;
    }

    public void multiPush(PilhaObj<T> aux) {
        if (aux.size() <= this.available()) {
            while (!aux.isEmpty()) {
                try {
                    this.push(aux.pop());
                } catch (Exception ex) {
                    /* ignore */
                }
            }
        }
    }

    public T pop() {
        if (!this.isEmpty())
            return pilha[topo--];
        return null;
    }

    public PilhaObj<T> multiPop(int n) {
        if (n > this.count())
            return null;
        PilhaObj<T> aux = new PilhaObj(n);
        for (int i = 0; i < n; i++)
            try {
                aux.push(this.pop());
            } catch (Exception ex) {
                /* ignore */
            }
        return aux;
    }

    public T peek() {
        if (!this.isEmpty())
            return pilha[topo];
        return null;
    }

    public int size() {
        return pilha.length;
    }

    public int count() {
        return topo + 1;
    }

    public int available() {
        return this.size() - this.count();
    }

    public void exibe(String separator) {
        if (this.isEmpty())
            System.out.println("Pilha vazia");
        else {
            for (int i = topo; i >= 0; i--)
                System.out.print(pilha[i] + separator);
        }
    }

    public List<T> toList() {
        List lista = new ArrayList();
        for (int i = 0; i < this.count(); i++)
            lista.add(pilha[i]);
        return lista;
    }
}
