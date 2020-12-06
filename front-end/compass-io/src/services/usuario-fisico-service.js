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

    async getUsuarioFisicoByEmail(email) {
        return axios.get(`${this.BASE_URL}?email=${email}`)
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

    async uploadFoto(id, formData) {
        return axios.post(`${this.BASE_URL}/foto?idUsuario=${id}`, formData, {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        })
    }

    async getFoto(id) {
        return axios.get(`${this.BASE_URL}/foto/base64?idUsuario=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        })
    }
};

export default UsuarioFisicoService;