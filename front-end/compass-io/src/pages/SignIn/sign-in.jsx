import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import InputLine from "../../components/InputLine/input-line";
import LabelTitleForm from "../../components/LabelTitleForm/label-title-form";
import Image from '../../components/Image/image';
import Button from '@material-ui/core/Button'

import './sign-in.css';
import loginImage from '../../assets/images/children-smile.jpg'

export default function SignIn() {
  return (
    <section>
      <Navbar/>
      <LabelWelcome labelTitle="Bem vindo ao Compass.io" labelText="Realize aqui o seu login"/>
      <br/>


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
            <InputLine title="Email" type="text" placeholder="Ex: joao.moreira.silva@email.com"/>
          </div>

          <div className="inputLogin">
            <InputLine title="Senha" type="password" placeholder="********"/>
          </div>

          <div className="buttonEnter center">
            <Button id="btnEnter" variant="contained" color="primary">Entrar</Button>
          </div>

          <div className="blueWord formFooter">
            <div className="bold center">Esqueci minha senha</div>
          </div>
          <div className="blueWord formFooter">
            <div className="bold center">Ainda não possui cadastro? <a href="signup" className="yellowWord">Cadastre-se aqui!</a></div>

          </div>
        </span>

    
      </div>
    </section>
  );
};