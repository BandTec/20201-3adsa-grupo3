import axios from 'axios'

class UsuarioFisicoVagaService {

    BASE_URL = "http://localhost:8080/usuariosFisicosVaga";

    async getUsuariosFisicosVagaByVaga(vaga) {
        return axios.get(`${this.BASE_URL}/byVaga`, {
            data: vaga
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async getUsuarioFisicoByIdVaga(idVaga) {
        return axios.get(`${this.BASE_URL}?idVaga=${idVaga}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async getUsuariosFisicosVagaByUsuario(usuario) {
        return axios.get(`${this.BASE_URL}/byUsuario`, {
            data: usuario
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async getUsuarioFisicoByIdUsuario(idUsuario) {
        return axios.get(`${this.BASE_URL}?idUsuario=${idUsuario}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }
};

export default UsuarioFisicoVagaService;