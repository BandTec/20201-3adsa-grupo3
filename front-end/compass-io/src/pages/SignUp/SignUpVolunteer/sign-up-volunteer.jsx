import React from 'react';
import InputLine from "../../../components/InputLine/input-line";
import LabelTitleForm from "../../../components/LabelTitleForm/label-title-form";
import Button from '@material-ui/core/Button';
import Image from '../../../components/Image/image';
import imgVolunteerSingup from '../../../assets/images/img-volunteer-singup.jpg'
import Checkbox from '@material-ui/core/Checkbox';

import './sign-up-volunteer.css';


// import { Container } from './styles';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <section>
        <div className="container">
          <span className="loginImage">
            <Image width="640" className="childrenImage" height="950" src={imgVolunteerSingup} />
          </span>

          <span className="textImage">Venha também fazer <br />parte desta <br />
            <span className="yellowWord">mudança</span>.
          </span>

          <div className="formVolunteer">
            <form className="signupVForm">
              <div className="inputInfPessoal">
                <LabelTitleForm title="Informações Pessoais" />
                <InputLine title="Nome Completo" type="text" placeholder="Ex: João Moreira da Silva" />
                <InputLine title="Data de Nascimento" type="text" placeholder="DD/MM/AAAA" />
                <InputLine title="CPF" type="text" placeholder="000.000.000-00" />
                <InputLine title="Telefone" type="text" placeholder="(xx)xxxxx-xxxx" />
                <InputLine title="Telefone" type="text" placeholder="(xx)xxxxx-xxxx" />
              </div>
            </form>

            <form className="infContaVForm">

              <div className="inputInfPessoal">
                <LabelTitleForm title="Informações da Conta" />
                <InputLine title="Email" type="text" placeholder="Ex: joao.moreira.silva@email.com" />
                <InputLine title="Senha(mínimo de 8 dígitos)" type="password" placeholder="********" />
                <InputLine title="Confirmar Senha" type="password" placeholder="********" />
              </div>
            </form>

            <div className="checkbox">
              <Checkbox></Checkbox>
              <span>Li e concordo com os <b className="blueWord">termos</b></span>
            </div>

            <Button id="btnVoltar" variant="contained" color="primary">Voltar</Button>
            <Button id="btnCadastrar" variant="contained" color="primary">Cadastrar</Button>

          </div>

        </div>
      </section>
    );
  }
};