import axios from 'axios'

class EnderecoService {

    BASE_URL = "http://localhost:8080/enderecos";

    getEnderecos() {
        axios.get(this.BASE_URL)
        .then((response) => {
            sessionStorage["todosEnderecos"] = JSON.stringify(response.data);
        })
        .catch((error) => {
            sessionStorage["todosEnderecos"] = JSON.stringify(error);
        })
        .finally((result) => {
            return result;
        });
    }

    getEnderecoById(id) {
        axios.get(`${this.BASE_URL}?id=${id}`)
        .then((response) => {
            sessionStorage["endereco"] = JSON.stringify(response.data[0]);
        })
        .catch((error) => {
            sessionStorage["endereco"] = JSON.stringify(error);
        })
        .finally((result) => {
            return result;
        });
    }

    postEndereco(endereco) {
        axios.post(this.BASE_URL, endereco, {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            sessionStorage["enderecoCriado"] = JSON.stringify(response.data);
        })
        .catch((error) => {
            sessionStorage["enderecoCriado"] = JSON.stringify(error);
        })
        .finally((result) => {
            return result;
        });
    }

    putEndereco(id, endereco) {
        axios.put(`${this.BASE_URL}/id=${id}`, endereco)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        })
        .finally((result) => {
            return result;
        });
    }

    deleteEndereco(id) {
        axios.delete(`${this.BASE_URL}/id=${id}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        })
        .finally((result) => {
            return result;
        });
    }
};

export default EnderecoService;