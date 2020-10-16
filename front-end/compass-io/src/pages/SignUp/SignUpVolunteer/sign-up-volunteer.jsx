import React from 'react';
import InputLine from "../../../components/InputLine/input-line";
import LabelTitleForm from "../../../components/LabelTitleForm/label-title-form";
import Image from '../../../components/Image/image';
import Button from '@material-ui/core/Button';
// import ingVolunteerSingup from '../../../assets/images/ing-volunteer-singup.jpg';

// import { Container } from './styles';

export default function SignUp() {
  return (
    // <div>Cadastro voluntário</div>

<section>
      <h2>asdasdsadsads</h2>
      <div className="container">
        <span className="loginImage">
            {/* <Image width="600" className="childrenImage" height="480" src={ingVolunteerSingup} /> */}
        </span>

        <span className="textImage">Fazendo a diferença conforme o seu <br/>
            <span className="yellowWord">perfil</span>.
        </span>


        <span className="loginForm">
          <div className="center title">
            <LabelTitleForm title="Entrar"/>
          </div>

          <div className="inputLogin">
            <InputLine title="Email" type="text" placeholder="Ex: joao.moreira.silva@email.com"/>
          </div>

          <div className="inputLogin">
            <InputLine title="Senha" type="password" placeholder="**"/>
          </div>

          <div className="buttonEnter center">
            <Button id="btnEnter" variant="contained" color="primary">Entrar</Button>
          </div>

          <div className="blueWord formFooter">
            <div className="bold center">Esqueci minha senha</div>
          </div>
          <div className="blueWord formFooter">
            <div className="bold center">Ainda não possui cadastro? <span className="yellowWord">Cadastre-se aqui!</span></div>

          </div>
        </span>


      </div>
    </section>
  );
};