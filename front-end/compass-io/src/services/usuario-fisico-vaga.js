import axios from 'axios'

class VagaService {

    BASE_URL = "http://localhost:8080/vagas";

    async getVagas() {
        return axios.get(this.BASE_URL)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async getVagaById(id) {
        return axios.get(`${this.BASE_URL}?id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async getVagasByCausa(causa) {
        return axios.get(`${this.BASE_URL}?causa=${causa}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async postVaga(vaga) {
        return axios.post(this.BASE_URL, vaga, {
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

    async putVaga(id, vaga) {
        return axios.put(`${this.BASE_URL}/id=${id}`, vaga)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async deleteVaga(id) {
        return axios.delete(`${this.BASE_URL}/id=${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }
};

export default VagaService;