import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import InputLine from "../../components/InputLine/input-line";
import LabelTitleForm from "../../components/LabelTitleForm/label-title-form";
import Image from '../../components/Image/image';
import Button from '@material-ui/core/Button'
import AlertCard from '../../components/AlertCard/alert-card';
import Alerta from '../../components/Alerta/alerta'

import AuthService from '../../services/auth-service'
import CommomFunctions from '../../utils/functions'

import './sign-in.css';
import loginImage from '../../assets/images/children-smile.jpg'
import { render } from 'react-dom';

export default class SignIn extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    message: '',
    severity: '',
    open: false
  }

  logar = async () => {
    try {
      this.getLoginFormData();
      let authService = new AuthService();
  
      let formLogin = document.getElementById("formLoginToSubmit");
      let formLoginAsJson = CommomFunctions.convertFormToJson(formLogin);
      let formLoginObj = JSON.parse(formLoginAsJson);
      formLoginObj.senha = CommomFunctions.encryptPassword(formLoginObj.senha);
      formLoginAsJson = JSON.stringify(formLoginObj);
      await authService.login(formLoginAsJson);
      
      this.setState({
        message: "Login realizado com sucesso",
        severity: "success",
        open: true
      })

      window.location.href = "/";
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      })
    }
  }
  
  getLoginFormData = () => {
    try {
      let Email = document.getElementById("email");
      Email.innerText = document.getElementsByName("email")[0].value;
      if (Email.innerText.length == 0)
        throw this.getError("email");
  
      let Senha = document.getElementById("senha");
      Senha.innerText = document.getElementsByName("senha")[0].value;
      if (Senha.innerText.length == 0)
        throw this.getError("senha");
  
      if (Senha.innerText.length < 8 || Senha.innerText.length > 20)
        throw this.getErrorDigitacao("senha");
    } catch (error) {
      throw error;
    }
  }
  
  getError = (field) => {
    return new Error(`Campo de ${field} vazio`);
  }
  
  getErrorDigitacao = (field) => {
    return new Error(`Campo '${field}' incorreto`);
  }
  
  fecharAlerta = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false })
  };

  render() {
    return (
      <React.Fragment>

        <AlertCard open={this.state.open} message={this.state.message} severity={this.state.severity} onClose={this.fecharAlerta} />

        <LabelWelcome labelTitle="Bem vindo ao Compass.io" labelText="Realize aqui o seu login" />
        <br />

        <form id="formLoginToSubmit" hidden>
          <input id="email" />
          <input id="senha" />
        </form>

        <div className="width-100pg height-560p flex">

          <div className="width-50pg flex relative">
            <Image width="100%" className="childrenImage" height="90%" src={loginImage} />
            <div className="bold absolute top-280p font-color-white fs-56p mg-l-16">
              Fazendo a diferença conforme o seu <br />
              <span className="yellowWord">perfil</span>.
            </div>
          </div>
          <div className="height-90pg mg-l-16 border border-rd-10 bg-color-gray-light width-55pg">
            <div className="center mg-t-32 blueWord">
              <LabelTitleForm title="Entrar" />
            </div>
            <div className="mg-t-32 mg-l-16 mg-r-16">
              <InputLine name="email" title="Email" type="text" placeholder="Ex: joao.moreira.silva@email.com" />
            </div>
            <div className="mg-t-32 mg-l-16 mg-r-16">
              <InputLine name="senha" title="Senha" type="password" placeholder="********" />
            </div>
            <div className="center mg-t-32">
              <Button id="btnEnter" onClick={this.logar} variant="contained" color="primary">Entrar</Button>
            </div>
            <div className="blueWord mg-t-32">
              <div className="bold center">Esqueci minha senha</div>
            </div>
            <div className="blueWord mg-t-32">
              <div className="bold center">Ainda não possui cadastro? <a href="signup" className="yellowWord">Cadastre-se aqui!</a></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};