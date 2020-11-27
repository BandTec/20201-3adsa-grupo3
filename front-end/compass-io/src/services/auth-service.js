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
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    async logout(id) {
        return axios.post(`${this.BASE_URL}/id=${id}`, null, {
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

export default AuthService;