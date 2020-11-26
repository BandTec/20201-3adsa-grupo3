import axios from 'axios'

class UsuarioJuridicoService {

    BASE_URL = "http://localhost:8080/usuariosJuridicos";

    async getUsuariosJuridicos() {
        return await axios.get(this.BASE_URL)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async getUsuarioJuridicoById(id) {
        return await axios.get(`${this.BASE_URL}?id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async postUsuarioJuridico(usuario) {
        return await axios.post(this.BASE_URL, usuario, {
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
        try {
            let resp;
            await axios.put(`${this.BASE_URL}/id=${id}`, usuario)
            .then((response) => resp = response.data);
            return resp;
        } catch (error) {
            return error;
        }
    }

    async deleteUsuarioJuridico(id) {
        try {
            let resp;
            await axios.delete(`${this.BASE_URL}/id=${id}`)
            .then((response) => resp = response.data);
            return resp;
        } catch (error) {
            return error;
        }
    }

    async loginUsuarioJuridico(auth) {
        return await axios.post(`${this.BASE_URL}/auth`, auth, {
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
        return await axios.post(`${this.BASE_URL}/id=${id}`, null, {
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