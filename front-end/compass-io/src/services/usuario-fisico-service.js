import axios from 'axios'

class UsuarioFisicoService {

    BASE_URL = "http://localhost:8080/usuariosFisicos";

    getUsuariosFisicos() {
        axios.get(this.BASE_URL)
        .then((response) => {
            sessionStorage["todosUsuariosFisicos"] = JSON.stringify(response.data);
        })
        .catch((error) => {
            sessionStorage["todosUsuariosFisicos"] = JSON.stringify(error);
        });
    }

    getUsuarioFisicoById(id) {
        axios.get(`${this.BASE_URL}?id=${id}`)
        .then((response) => {
            sessionStorage["usuarioFisico"] = JSON.stringify(response.data[0]);
        })
        .catch((error) => {
            sessionStorage["usuarioFisico"] = JSON.stringify(error);
        });
    }

    postUsuarioFisico(usuario) {
        axios.post(this.BASE_URL, usuario, {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            sessionStorage["usuarioFisicoCriado"] = JSON.stringify(response.data);
            alert(response.statusText);
        })
        .catch((error) => {
            sessionStorage["usuarioFisicoCriado"] = JSON.stringify(error);
            alert(error);
        });
    }

    putUsuarioFisico(id, usuario) {
        axios.put(`${this.BASE_URL}/id=${id}`, usuario)
        .then((response) => {
            alert(response.statusText);
            return response;
        })
        .catch((error) => {
            alert(error);
        });
    }

    deleteUsuarioFisico(id) {
        axios.delete(`${this.BASE_URL}/id=${id}`)
        .then((response) => {
            alert(response.statusText);
            return response;
        })
        .catch((error) => {
            alert(error);
        });
    }

    loginUsuarioFisico(auth) {
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

    logoutUsuarioFisico(id) {
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

export default UsuarioFisicoService;