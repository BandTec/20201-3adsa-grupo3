import axios from 'axios'

class AuthService {

    BASE_URL = "http://localhost:8080/autenticacoes";

    async login(auth) {
        return axios.post(`${this.BASE_URL}/auth`, auth, {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                sessionStorage["userId"] = res.data.id;
                sessionStorage["userType"] = res.data.cnpj != undefined ? "juridico" : "fisico";
                return res;
            })
            .catch((err) => {
                throw err;
            });
    }

    async logout() {
        let url = window.location.href;
        var res = url.split('3000');
        var parametros = res[1].split('/');
        var idUsuario = new Array();
        idUsuario = parametros[1];
        let id = parseInt(idUsuario);
        if (id != -1) {
            let userType = sessionStorage["userType"];
            return axios.post(`${this.BASE_URL}/logout?id=${id}&userType=${userType}`, null, {
                headers: {
                    'Access-Control-Allow-Origin': true,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    debugger
                    sessionStorage["userId"] = undefined;
                    sessionStorage["userType"] = undefined;
                    return res;
                })
                .catch((err) => {
                    debugger
                    throw err;
                });
        }
    }
};

export default AuthService;