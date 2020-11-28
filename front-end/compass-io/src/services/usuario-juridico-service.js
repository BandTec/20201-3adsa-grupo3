import axios from 'axios'

class UsuarioJuridicoService {

    BASE_URL = "http://localhost:8080/usuariosJuridicos";

    async getUsuariosJuridicos() {
        return axios.get(this.BASE_URL)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async getUsuarioJuridicoById(id) {
        return axios.get(`${this.BASE_URL}?id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async getUsuarioJuridicoByEmail(email) {
        return axios.get(`${this.BASE_URL}?email=${email}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async postUsuarioJuridico(usuario) {
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

    async putUsuarioJuridico(id, usuario) {
        return axios.put(`${this.BASE_URL}/id=${id}`, usuario)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async deleteUsuarioJuridico(id) {
        return axios.delete(`${this.BASE_URL}/id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async loginUsuarioJuridico(auth) {
        return axios.post(`${this.BASE_URL}/auth`, auth, {
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

    async logoutUsuarioJuridico(id) {
        return axios.post(`${this.BASE_URL}/id=${id}`, null, {
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
};

export default UsuarioJuridicoService;