import axios from 'axios'

class UsuarioFisicoVagaService {

    BASE_URL = "http://localhost:8080/usuariosFisicosVaga";

    async postUFVByUFV(usuariosFisicosVaga) {
        return axios.post(`${this.BASE_URL}/byUFV`, usuariosFisicosVaga, {
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

    async postUFVByIds(idUsuario, idVaga) {
        return axios.post(`${this.BASE_URL}/byIds?idUsuario=${idUsuario}&idVaga=${idVaga}`, null, {
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

    async getUsuariosFisicosVagaByVaga(vaga) {
        return axios.get(`${this.BASE_URL}/byVaga`, {
            data: vaga
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async getUsuarioFisicoByIdVaga(idVaga) {
        return axios.get(`${this.BASE_URL}?idVaga=${idVaga}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async getUsuariosFisicosVagaByUsuario(usuario) {
        return axios.get(`${this.BASE_URL}/byUsuario`, {
            data: usuario
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async getUsuarioFisicoByIdUsuario(idUsuario) {
        return axios.get(`${this.BASE_URL}?idUsuario=${idUsuario}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async curtir(usuariosFisicosVaga) {
        return axios.post(`${this.BASE_URL}/curtir/byUFV`, usuariosFisicosVaga)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
    }

    async curtirByIds(idUsuario, idVaga) {
        return axios.post(`${this.BASE_URL}/curtir/byIds?idUsuario=${idUsuario}&idVaga=${idVaga}`, null, {
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
    
    async aplicar(ufv) {
        return axios.post(`${this.BASE_URL}/aplicar/byUFV`, ufv, {
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

    async aplicarByIds(idUsuario, idVaga) {
        return axios.post(`${this.BASE_URL}/aplicar/byIds?idUsuario=${idUsuario}&idVaga=${idVaga}`, null, {
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

    async aprovar(usuariosFisicosVaga) {
        return axios.post(`${this.BASE_URL}/aprovar/byUFV`, usuariosFisicosVaga, {
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

    async aprovarByIds(idUsuario, idVaga) {
        return axios.post(`${this.BASE_URL}/aprovar/byIds?idUsuario=${idUsuario}&idVaga=${idVaga}`, null, {
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

    async recusar(usuariosFisicosVaga) {
        return axios.post(`${this.BASE_URL}/recusar/byUFV`, usuariosFisicosVaga, {
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

    async recusarByIds(idUsuario, idVaga) {
        return axios.post(`${this.BASE_URL}/recusar/byIds?idUsuario=${idUsuario}&idVaga=${idVaga}`, null, {
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
};

export default UsuarioFisicoVagaService;