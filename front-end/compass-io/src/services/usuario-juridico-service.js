import axios from 'axios'

class UsuarioJuridicoService {

    BASE_URL = "http://localhost:8080/usuariosJuridicos";

    getUsuariosJuridicos() {
        axios.get(this.BASE_URL)
        .then((response) => {
            sessionStorage["todosUsuariosJuridicos"] = JSON.stringify(response.data);
        })
        .catch((error) => {
            sessionStorage["todosUsuariosJuridicos"] = JSON.stringify(error);
        });
    }

    getUsuarioJuridicoById(id) {
        axios.get(`${this.BASE_URL}?id=${id}`)
        .then((response) => {
            sessionStorage["usuarioJuridico"] = JSON.stringify(response.data[0]);
        })
        .catch((error) => {
            sessionStorage["usuarioJuridico"] = JSON.stringify(error);
        });
    }

    postUsuarioJuridico(usuario) {
        axios.post(this.BASE_URL, usuario, {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            sessionStorage["usuarioJuridicoCriado"] = JSON.stringify(response.data);
            alert(response.statusText);
        })
        .catch((error) => {
            sessionStorage["usuarioJuridicoCriado"] = JSON.stringify(error);
            alert(error);
        });
    }

    putUsuarioJuridico(id, usuario) {
        axios.put(`${this.BASE_URL}/id=${id}`, usuario)
        .then((response) => {
            alert(response.statusText);
            return response;
        })
        .catch((error) => {
            alert(error);
        });
    }

    deleteUsuarioJuridico(id) {
        axios.delete(`${this.BASE_URL}/id=${id}`)
        .then((response) => {
            alert(response.statusText);
            return response;
        })
        .catch((error) => {
            alert(error);
        });
    }

    loginUsuarioJuridico(auth) {
        debugger;
        axios.post(`${this.BASE_URL}/auth`, auth, {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            alert(response.statusText);
            return response;
        })
        .catch((error) => {
            alert(error);
        });
    }

    logoutUsuarioJuridico(id) {
        axios.post(`${this.BASE_URL}/id=${id}`, null, {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            alert(response.statusText);
            return response;
        })
        .catch((error) => {
            alert(error);
        });
    }
};

export default UsuarioJuridicoService;