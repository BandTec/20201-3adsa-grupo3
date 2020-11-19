import axios from 'axios'

class SignUpOngService {

    BASE_URL = "http://localhost:8080/usuarioJuridicos";

    getUsuarios() {
        axios.get(this.BASE_URL)
        .then((response) => {
            sessionStorage["todosUsuarios"] = JSON.stringify(response.data);
        })
        .catch((error) => {
            sessionStorage["todosUsuarios"] = JSON.stringify(error);
        });
    }

    getUsuarioById(id) {
        axios.get(`${this.BASE_URL}?id=${id}`)
        .then((response) => {
            sessionStorage["usuario"] = JSON.stringify(response.data[0]);
        })
        .catch((error) => {
            sessionStorage["usuario"] = JSON.stringify(error);
        });
    }

    postUsuario(data) {
        axios.post(this.BASE_URL, data)
        .then((response) => {
            return response;
        })
        .catch((error) => alert(error));
    }
};

export default SignUpOngService;