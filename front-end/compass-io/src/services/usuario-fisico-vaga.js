import axios from 'axios'

class VagaService {

    BASE_URL = "http://localhost:8080/usuariosFisicosVaga";

    async getUfv() {
        return axios.get(this.BASE_URL)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }   

    async getUfvByVaga(vaga) {
        return axios.get(`${this.BASE_URL}?vaga=${vaga}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async getUfvByUsuario(usuario) {
        return axios.get(`${this.BASE_URL}?usuario=${usuario}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async postUfv(usuariosFisicosVaga) {
        return axios.post(this.BASE_URL, usuariosFisicosVaga, {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async curtir(usuariosFisicosVaga) {
        return axios.put(`${this.BASE_URL}/curtir`, usuariosFisicosVaga)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async aplicar(usuariosFisicosVaga) {
        return axios.put(`${this.BASE_URL}/aplicar`, usuariosFisicosVaga)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async aprovar(usuariosFisicosVaga) {
        return axios.put(`${this.BASE_URL}/aprovar`, usuariosFisicosVaga)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }
};

export default VagaService;