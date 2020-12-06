import React from 'react';
import GenderBox from '../../../components/GenderBox/gender-box';
import InputLine from "../../../components/InputLine/input-line";
import LabelTitleForm from "../../../components/LabelTitleForm/label-title-form";
import Image from '../../../components/Image/image';
import imgVolunteerSingup from '../../../assets/images/img-volunteer-singup.jpg'
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '../../../components/AlertCard/alert-card';
import Button from '@material-ui/core/Button';

import CommomFunctions from '../../../utils/functions'
import UsuarioFisicoService from '../../../services/usuario-fisico-service'

import './sign-up-volunteer.css';

function validarSenha() {
  let senhaInput = document.getElementsByName("senha")[0].value;
  let confSenhaInput = document.getElementsByName("confSenha")[0].value;
  console.log(senhaInput);
  console.log(confSenhaInput);

  if (senhaInput != confSenhaInput) {
    alert("Senhas não coincidem");
    return false;
  }
  else if (senhaInput.length < 8 || senhaInput.length > 20) {
    alert("A senha deve ter entre 8 e 20 caractéres");
    return false;
  }
  else
    return true;
}

function cadastrar(){
  if (!validarSenha()){
    return;
  }
  let Email = document.getElementById('email');
  Email.innerText = document.getElementsByName('email')[0].value;
  let Nome = document.getElementById("nome");
  Nome.innerText = document.getElementsByName("nome")[0].value;
  let SenhaForm = document.getElementById("senha");
  SenhaForm.innerText = CommomFunctions.encryptPassword(document.getElementsByName("senha")[0].value);
  let Telefone = document.getElementById("telefone");
  Telefone.innerText = document.getElementsByName("telefone")[0].value;
  let Nascimento = document.getElementById("dataNascimento");
  let NascimentoSplit = document.getElementsByName("dataNascimento")[0].value.split("/");
  let NascimentoConvert = NascimentoSplit[2] + '-' + NascimentoSplit[1] + '-' + NascimentoSplit[0];
  Nascimento.innerText = NascimentoConvert;
  let Cpf = document.getElementById("cpf");
  Cpf.innerText = document.getElementsByName("cpf")[0].value;
  let Logado = document.getElementById("logado");
  Logado.innerText = false;

  let formFisico = document.getElementById("fisicoForm");
  let fisicoJson = CommomFunctions.convertFormToJson(formFisico);

  let usuarioFisicoService = new UsuarioFisicoService();
  console.log(fisicoJson);
  usuarioFisicoService.postUsuarioFisico(fisicoJson);
}

// import { Container } from './styles';

export default class SignUp extends React.Component {

  render() {

    return (

      <section>

        <form id="fisicoForm" hidden>
          <input id="email"/>
          <input id="nome"/>
          <input id="senha"/>
          <input id="telefone"/>
          <input id="dataNascimento"/>
          <input id="cpf"/>
          <input id="logado"/>
        </form>

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
                <InputLine name="nome" title="Nome Completo" type="text" placeholder="Ex: João Moreira da Silva" />
                <InputLine name="dataNascimento" title="Data de Nascimento" type="date" placeholder="DD/MM/AAAA" />
                <InputLine name="cpf" title="CPF" type="text" placeholder="000.000.000-00" />
                <InputLine name="telefone" title="Telefone" type="text" placeholder="(xx)xxxxx-xxxx" />
              </div>
            </form>

            <form className="infContaVForm">

              <div className="inputInfPessoal">
                <LabelTitleForm title="Informações da Conta" />
                <InputLine name="email" title="Email" type="text" placeholder="Ex: joao.moreira.silva@email.com" />
                <InputLine name="senha" title="Senha(mínimo de 8 dígitos)" type="password" placeholder="********" />
                <InputLine name="confSenha" title="Confirmar Senha" type="password" placeholder="********" />
              </div>
            </form>

            <div className="checkbox">
              <Checkbox></Checkbox>
              <span>Li e concordo com os <b className="blueWord">termos</b></span>
            </div>

            <Button id="btnCadastrar" variant="contained" color="primary" onClick={cadastrar}>Cadastrar</Button>
            <Alert statusAlert="success" />

          </div>

        </div>
      </section>
    );
  }
};