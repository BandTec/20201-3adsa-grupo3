import axios from 'axios'

class ArquivoService {

    BASE_URL = "http://localhost:8080/arquivos";

    async getArquivo01(nomeOng, isCsv) {
        return axios.get(`${this.BASE_URL}/arquivo01?nomeDoArquivo=TodasAsVagas&nomeDaOng=${nomeOng}&isCsv=${isCsv}`, {
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

    async getArquivo02(nomeOng, nomeVaga, isCsv) {
        return axios.get(`${this.BASE_URL}/arquivo02?nomeDoArquivo=TodasAsVagas&nomeDaOng=${nomeOng}&nomeDaVaga=${nomeVaga}&isCsv=${isCsv}`, {
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

    async subirArquivo(formDataFile) {
        return axios.post(`${this.BASE_URL}`, formDataFile, {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'multipart/form-data'
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

export default ArquivoService;