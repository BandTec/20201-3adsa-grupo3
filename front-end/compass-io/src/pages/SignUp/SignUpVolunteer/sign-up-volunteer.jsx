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

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    message: '',
    severity: '',
    open: false
  }

  cadastrar = async () => {
    try {
      this.getVolunteerForm();
      this.getCadastroForm();

      let Logado = document.getElementById("logado");
      Logado.innerText = false;

      let formFisico = document.getElementById("fisicoForm");
      let fisicoJson = CommomFunctions.convertFormToJson(formFisico);

      let usuarioFisicoService = new UsuarioFisicoService();
      console.log(fisicoJson);
      await usuarioFisicoService.postUsuarioFisico(fisicoJson);

      this.setState({
        message: "Dados enviados! Verifique seu email para concluir o seu cadastro.",
        severity: "success",
        open: true
      });

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

  getVolunteerForm = () => {
    try {
      this.validarSenha();

      let Nome = document.getElementById("nome");
      Nome.innerText = document.getElementsByName("nome")[0].value;
      if (Nome.innerText.length == 0)
        throw this.getError("nome");

      let Telefone = document.getElementById("telefone");
      Telefone.innerText = document.getElementsByName("telefone")[0].value;
      if (Telefone.innerText.length == 0)
        throw this.getError("telefone");

      let Nascimento = document.getElementById("dataNascimento");
      let NascimentoSplit = document.getElementsByName("dataNascimento")[0].value.split("/");
      Nascimento.innerText = NascimentoSplit;
      if (Nascimento.innerText.length == 0)
        throw this.getError("data de Nascimento");

      let Cpf = document.getElementById("cpf");
      Cpf.innerText = document.getElementsByName("cpf")[0].value;
      if (Cpf.innerText.length == 0)
        throw this.getError("CPF");

    } catch (error) {
      throw error;
    }
  }

  getCadastroForm = () => {
    try {
      let Email = document.getElementById('email');
      Email.innerText = document.getElementsByName('email')[0].value;
      if (Email.innerText.length == 0)
        throw this.getError("email");

      let SenhaForm = document.getElementById("senha");
      SenhaForm.innerText = CommomFunctions.encryptPassword(document.getElementsByName("senha")[0].value);
      if (SenhaForm.innerText.length == 0)
        throw this.getError("senha");
    } catch (error) {
      throw error;
    }
  }

  validarSenha = () => {
    try {
      let senha = document.getElementsByName("senha")[0].value;
      let confSenha = document.getElementsByName("confSenha")[0].value;
      if (senha != confSenha) {
        throw new Error("Senhas não coincidem");
      }
      else if (senha.length < 8 || senha.length > 20) {
        throw new Error("A senha deve ter entre 8 e 20 caractéres");
      }
    } catch (error) {
      throw error;
    }
  }

  getError = (field) => {
    return new Error(`Campo de ${field} vazio`);
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
        <form id="fisicoForm" hidden>
          <input id="email" />
          <input id="nome" />
          <input id="senha" />
          <input id="telefone" />
          <input id="dataNascimento" />
          <input id="cpf" />
          <input id="logado" />
        </form>

        <div className="width-100pg height-880p flex">
          <div className="width-50pg flex relative">
            <Image width="100%" className="childrenImage" height="90%" src={imgVolunteerSingup} />
            <div className="bold absolute top-560p font-color-white fs-56p mg-l-16">Venha também fazer <br />parte desta <br />
              <span className="yellowWord">mudança</span>.
            </div>
          </div>
          <div className="height-400p mg-l-32 width-50pg">
            <div className="height-80pg border border-rd-10 bg-color-gray-light">
              <div className=" mg-t-16 mg-l-16">
                <LabelTitleForm title="Informações Pessoais" />
              </div>
              <div className="mg-t-16 mg-l-16 mg-r-16">
                <InputLine name="nome" title="Nome Completo" type="text" placeholder="Ex: João Moreira da Silva" />
              </div>
              <div className="mg-t-32 mg-l-16 mg-r-16 width-40pg">
                <InputLine name="dataNascimento" title="Data de Nascimento" type="date" placeholder="DD/MM/AAAA" />
              </div>
              <div className="mg-t-32 mg-l-16 flex">
                <div className="width-40pg ">
                  <InputLine name="cpf" title="CPF" type="text" placeholder="000.000.000-00" />
                </div>
                <div className="width-40pg mg-l-32">
                  <InputLine name="telefone" title="Telefone" type="text" placeholder="(xx)xxxxx-xxxx" />
                </div>
              </div>
            </div>

            <div className="height-80pg mg-t-24 border border-rd-10 bg-color-gray-light">
              <div className=" mg-t-16 mg-l-16">
                <LabelTitleForm title="Informações da Conta" />
              </div>
              <div className="mg-t-16 mg-l-16 mg-r-16">
                <InputLine name="email" title="Email" type="text" placeholder="Ex: joao.moreira.silva@email.com" />
              </div>
              <div className="mg-t-32 mg-l-16 mg-r-16 width-70pg">
                <InputLine name="senha" title="Senha(mínimo de 8 dígitos)" type="password" placeholder="********" />
              </div>
              <div className="mg-t-32 mg-l-16 mg-r-16 width-70pg">
                <InputLine name="confSenha" title="Confirmar Senha" type="password" placeholder="********" />
              </div>
            </div>

            <div className="mg-t-16">
              <Checkbox></Checkbox>
              <span>Li e concordo com os <b className="blueWord">termos</b></span>
            </div>

            <div className="mg-t-16 flex">
              <Button id="btnCadastrar" variant="contained" color="primary" onClick={this.cadastrar}>Cadastrar</Button>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}