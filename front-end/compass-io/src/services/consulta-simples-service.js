import axios from 'axios'

class ConsultaSimplesService {

    BASE_URL = "http://localhost:8080/consulta";

    async getCidadesByUF(uf) {
        return axios.get(`${this.BASE_URL}/cidades?uf=${uf}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async getEstados() {
        return axios.get(`${this.BASE_URL}/estados`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }
};

export default ConsultaSimplesService;