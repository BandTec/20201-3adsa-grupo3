import axios from 'axios'

class UsuarioFisicoService {

    BASE_URL = "http://localhost:8080/usuariosFisicos";

    async getUsuariosFisicos() {
        return axios.get(this.BASE_URL)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async getUsuarioFisicoById(id) {
        return axios.get(`${this.BASE_URL}?id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async postUsuarioFisico(usuario) {
        return axios.post(this.BASE_URL, usuario, {
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

    async putUsuarioFisico(id, usuario) {
        return axios.put(`${this.BASE_URL}/id=${id}`, usuario)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async deleteUsuarioFisico(id) {
        return axios.delete(`${this.BASE_URL}/id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }
};

export default UsuarioFisicoService;