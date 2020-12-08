import React from 'react';
import GenderBox from '../../../components/GenderBox/gender-box';
import InputLine from "../../../components/InputLine/input-line";
import LabelTitleForm from "../../../components/LabelTitleForm/label-title-form";
import Image from '../../../components/Image/image';
import imgVolunteerSingup from '../../../assets/images/img-volunteer-singup.jpg'
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import AlertCard from '../../../components/AlertCard/alert-card';

import CommomFunctions from '../../../utils/functions'
import UsuarioFisicoService from '../../../services/usuario-fisico-service'

import './sign-up-volunteer.css';
import { render } from 'react-dom';

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

async function cadastrar() {
  try {
    if (!validarSenha()) {
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
    await usuarioFisicoService.postUsuarioFisico(fisicoJson);
    render(<AlertCard message="Dados enviados para análise. Verifique sua caixa de e-mail" severity="success" />, document.getElementById("alertArea"));
  } catch (error) {
    let errorString = `${error}`;
    render(<AlertCard message={errorString} severity="error" />, document.getElementById("alertArea"));
  }
}

// import { Container } from './styles';

export default class SignUp extends React.Component {

  render() {

    return (

      <React.Fragment>
        <div id="alertArea"></div>
        <form id="fisicoForm" hidden>
          <input id="email" />
          <input id="nome" />
          <input id="senha" />
          <input id="telefone" />
          <input id="dataNascimento" />
          <input id="cpf" />
          <input id="logado" />
        </form>

        <div className="width-100pg height-1040p flex">
          <div className="width-50pg flex relative">
            <Image width="640" className="childrenImage" height="950" src={imgVolunteerSingup} />
            <div className="bold absolute top-640p font-color-white fs-56p mg-l-16">Venha também fazer <br />parte desta <br />
              <span className="yellowWord">mudança</span>.
            </div>
          </div>
          <div className="height-400p mg-l-32 width-50pg">
            <div className="height-400p border border-rd-10 bg-color-gray-light">
              <div className=" mg-t-16 mg-l-16">
                <LabelTitleForm title="Informações Pessoais" />
              </div>
              <div className="mg-t-16 mg-l-16 mg-r-16">
                <InputLine name="nome" title="Nome Completo" type="text" placeholder="Ex: João Moreira da Silva" />
              </div>
              <div className="mg-t-8 mg-l-16 mg-r-16 width-40pg">
                <InputLine name="dataNascimento" title="Data de Nascimento" type="date" placeholder="DD/MM/AAAA" />
              </div>
              <div className="mg-t-8 mg-l-16 flex">
                <div className="width-40pg ">
                  <InputLine name="cpf" title="CPF" type="text" placeholder="000.000.000-00" />
                </div>
                <div className="width-40pg mg-l-32">
                  <InputLine name="telefone" title="Telefone" type="text" placeholder="(xx)xxxxx-xxxx" />
                </div>
              </div>
              <div className="mg-t-8 mg-l-16 mg-r-16">
              </div>
            </div>



            <div className="height-400p mg-t-24 border border-rd-10 bg-color-gray-light">
              <div className=" mg-t-16 mg-l-16">
                <LabelTitleForm title="Informações da Conta" />
              </div>
              <div className="mg-t-16 mg-l-16 mg-r-16">
                <InputLine name="email" title="Email" type="text" placeholder="Ex: joao.moreira.silva@email.com" />
              </div>
              <div className="mg-t-8 mg-l-16 mg-r-16 width-70pg">
                <InputLine name="senha" title="Senha(mínimo de 8 dígitos)" type="password" placeholder="********" />
              </div>
              <div className="mg-t-8 mg-l-16 mg-r-16 width-70pg">
                <InputLine name="confSenha" title="Confirmar Senha" type="password" placeholder="********" />
              </div> 
            </div>

            <div className="mg-t-16">
              <Checkbox></Checkbox>
              <span>Li e concordo com os <b className="blueWord">termos</b></span>
           </div> 

          <Button id="btnCadastrar" variant="contained" color="primary" onClick={cadastrar}>Cadastrar</Button>
     
          </div>
        </div>

      </React.Fragment>
    );
  }
};