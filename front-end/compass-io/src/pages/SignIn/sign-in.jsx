import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import InputLine from "../../components/InputLine/input-line";
import LabelTitleForm from "../../components/LabelTitleForm/label-title-form";
import Image from '../../components/Image/image';
import Button from '@material-ui/core/Button'

import AuthService from '../../services/auth-service'
import CommomFunctions from '../../utils/functions'

import './sign-in.css';
import loginImage from '../../assets/images/children-smile.jpg'

async function logar() {
  try {
    getLoginFormData();
    let authService = new AuthService();
  
    let formLogin = document.getElementById("formLoginToSubmit");
    let formLoginAsJson = CommomFunctions.convertFormToJson(formLogin);
    let formLoginObj = JSON.parse(formLoginAsJson);
    formLoginObj.senha = CommomFunctions.encryptPassword(formLoginObj.senha);
    formLoginAsJson = JSON.stringify(formLoginObj);
    await authService.login(formLoginAsJson);
    window.location.href = "/";
  } catch (error) {
    alert(error);
  }
}

function getLoginFormData() {
  try {
    let Email = document.getElementById("email");
    Email.innerText = document.getElementsByName("email")[0].value;
    if (Email.innerText.length == 0)
      throw getError("Email");
  
    let Senha = document.getElementById("senha");
    Senha.innerText = document.getElementsByName("senha")[0].value;
    if (Senha.innerText.length == 0)
      throw getError("Senha");
  } catch (error) {
    throw error;
  }
}

function getError(field) {
  return new Error(`Campo de ${field} vazio`);
}

export default function SignIn() {
  return (
    <React.Fragment>
      <LabelWelcome labelTitle="Bem vindo ao Compass.io" labelText="Realize aqui o seu login"/>
      <br/>

      <form id="formLoginToSubmit" hidden>
        <input id="email"/>
        <input id="senha"/>
      </form>

      <div className="container">
        <span className="loginImagePart">
          <span className="loginImage">
            <Image width="600" className="childrenImage" height="495" src={loginImage} />
          </span>
          <span className="textImage">
            Fazendo a diferença conforme o seu <br/>
            <span className="yellowWord">perfil</span>.
          </span>
        </span>

        <span className="loginForm">
          <div className="center title">
            <LabelTitleForm title="Entrar"/>
          </div>

          <div className="inputLogin">
            <InputLine name="email" title="Email" type="text" placeholder="Ex: joao.moreira.silva@email.com"/>
          </div>

          <div className="inputLogin">
            <InputLine name="senha" title="Senha" type="password" placeholder="********"/>
          </div>

          <div className="buttonEnter center">
            <Button id="btnEnter" onClick={logar} variant="contained" color="primary">Entrar</Button>
          </div>

          <div className="blueWord formFooter">
            <div className="bold center">Esqueci minha senha</div>
          </div>
          <div className="blueWord formFooter">
            <div className="bold center">Ainda não possui cadastro? <a href="signup" className="yellowWord">Cadastre-se aqui!</a></div>
          </div>
        </span>

      </div>
    </React.Fragment>
  );
};