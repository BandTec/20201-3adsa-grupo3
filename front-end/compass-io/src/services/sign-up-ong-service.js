import { configure } from '@testing-library/react'
import axios from 'axios'

class SignUpOngService {

    getUsuarios() {
        axios.get("http://localhost:8080/usuarioJuridicos")
        .then((response) => {
            alert(JSON.stringify(response.data))
        })
        .catch((error) => {alert(error)});
    }
};

export default SignUpOngService;