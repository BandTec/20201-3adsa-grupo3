package br.com.bandtecgrupo3pi.projetopigrupo3;

import java.util.ArrayList;
import java.util.List;

public class BancoDeDados {

    public static class Usuarios {

        private static List<Usuario> usuarios = new ArrayList();

        public static List<Usuario> all() {
            return usuarios;
        }

        public static void add(Usuario usuario) {
            usuarios.add(usuario);
        }

        public static boolean isEmpty() {
            return usuarios.isEmpty();
        }

        public static Usuario get(int index) {
            return usuarios.get(index);
        }

        public static Usuario getByEmail(String email) {
            for (Usuario u : usuarios) {
                if (u.getEmail().equals(email))
                    return u;
            } return null;
        }

        public static void remove(int index) {
            usuarios.remove(index);
        }

        public static int size() {
            return usuarios.size();
        }

        public static Usuario set(int index, Usuario usuario) {
            return usuarios.set(index, usuario);
        }

        public static boolean contains(Usuario usuario) {
            for (Usuario u : usuarios) {
                if (u.getEmail().equals(usuario.getEmail()))
                    return true;
            } return false;
        }
    }
}
