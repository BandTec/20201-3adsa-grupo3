import axios from 'axios'

class EnderecoService {

    BASE_URL = "http://localhost:8080/enderecos";

    async getEnderecos() {
        return axios.get(this.BASE_URL)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async getEnderecoById(id) {
        return axios.get(`${this.BASE_URL}?id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async postEndereco(endereco) {
        return axios.post(this.BASE_URL, endereco, {
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
        });
    }

    async putEndereco(id, endereco) {
        return axios.put(`${this.BASE_URL}/id=${id}`, endereco)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async deleteEndereco(id) {
        return axios.delete(`${this.BASE_URL}/id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }
};

export default EnderecoService;