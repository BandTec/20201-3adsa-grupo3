import React from 'react';
import { render } from 'react-dom';
import InputLine from "../../../components/InputLine/input-line";
import LabelTitleForm from "../../../components/LabelTitleForm/label-title-form";
import Button from '@material-ui/core/Button';
import Image from '../../../components/Image/image';
import imgOngSingup from '../../../assets/images/img-ong-singup.jpg';
import Checkbox from '@material-ui/core/Checkbox';
import ComboBox from '../../../components/ComboBox/combo-box';
import ComboBoxStateAndCities from '../../../components/ComboBoxStateAndCities/combo-box-state-and-cities';
import AlertCard from '../../../components/AlertCard/alert-card';

import UsuarioJuridicoService from '../../../services/usuario-juridico-service'
import EnderecoService from '../../../services/endereco-service'
import CommomFunctions from '../../../utils/functions';

import './sign-up-ong.css';

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
      this.getEnderecoFormData();
      this.getUsuarioFormData();
  
      let enderecoService = new EnderecoService();
      let usuarioJuridicoService = new UsuarioJuridicoService();
  
      let formEndereco = document.getElementById("enderecoUsuarioJuridicoToSubmit");
      const enderecoAsJson = CommomFunctions.convertFormToJson(formEndereco);
      var respEndereco = await enderecoService.postEndereco(enderecoAsJson);
  
      let formUsuario = document.getElementById("usuarioJuridicoToSubmit");
      let usuarioObj = CommomFunctions.convertFormToObject(formUsuario);
      usuarioObj.fkEndereco = respEndereco.data;
      usuarioObj.senha = CommomFunctions.encryptPassword(usuarioObj.senha);
      let usuarioAsJson = JSON.stringify(usuarioObj);
      await usuarioJuridicoService.postUsuarioJuridico(usuarioAsJson);

      this.setState({
        message: "Dados enviados! Verifique seu email para concluir o seu cadastro.",
        severity: "error",
        open: true
      });

      window.location.href = "/signin";
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      })
    }
  }
  
  getUsuarioFormData = () => {  
    try {
      this.validarSenha();
      let NomeDaOng = document.getElementById("nomeOng");
      NomeDaOng.innerText = document.getElementsByName("nomeDaOng")[0].value;
      if (NomeDaOng.innerText.length == 0)
        throw this.getError("nome da ONG");
  
      let Email = document.getElementById("email");
      Email.innerText = document.getElementsByName("email")[0].value;
      if (Email.innerText.length == 0)
        throw this.getError("email");
  
      let Senha = document.getElementById("senha");
      Senha.innerText = document.getElementsByName("senha")[0].value;
  
      let Telefone = document.getElementById("telefone");
      Telefone.innerText = document.getElementsByName("telefone")[0].value;
      if (Telefone.innerText.length == 0)
        throw this.getError("telefone");
  
      let Cnpj = document.getElementById("cnpj");
      Cnpj.innerText = document.getElementsByName("cnpj")[0].value;
      if (Cnpj.innerText.length == 0)
        throw this.getError("CNPJ");
  
      let Causa = document.getElementById("causa");
      Causa.innerText = document.getElementsByName("causa")[0].value;
      if (Causa.innerText.length == 0)
        throw this.getError("causa");
    } catch (error) {
      throw error;
    }
  }
  
  getEnderecoFormData = () => {
    try {
      let Logradouro = document.getElementById("logradouro");
      Logradouro.innerText = document.getElementsByName("logradouro")[0].value;
      if (Logradouro.innerText.length == 0)
        throw this.getError("logradouro");
  
      let Numero = document.getElementById("numeroEndereco");
      Numero.innerText = document.getElementsByName("numero")[0].value;
      if (Numero.innerText.length == 0)
        throw this.getError("numero");
  
      let Cep = document.getElementById("cep");
      Cep.innerText = document.getElementsByName("cep")[0].value;
      if (Cep.innerText.length == 0)
        throw this.getError("CEP");
  
      let Bairro = document.getElementById("bairro");
      Bairro.innerText = document.getElementsByName("bairro")[0].value;
      if (Bairro.innerText.length == 0)
        throw this.getError("bairro");
  
      let Cidade = document.getElementById("cidade");
      Cidade.innerText = document.getElementsByName("cidade")[0].value;
      if (Cidade.innerText.length == 0)
        throw this.getError("cidade");
  
      let Estado = document.getElementById("estado");
      Estado.innerText = document.getElementsByName("estado")[0].value;
      if (Estado.innerText.length == 0)
        throw this.getError("estado");
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
        <form id="usuarioJuridicoToSubmit" hidden>
          <input id="nomeOng" />
          <input id="email" />
          <input id="senha" />
          <input id="telefone" />
          <input id="cnpj" />
          <input id="causa" />
        </form>

        <form id="enderecoUsuarioJuridicoToSubmit" hidden>
          <input id="logradouro" />
          <input id="numeroEndereco" />
          <input id="cep" />
          <input id="bairro" />
          <input id="estado" />
          <input id="cidade" />
        </form>

        <div className="width-100pg mg-b-64 height-1056p flex">

          <div className="width-50pg flex relative">
            <Image width="100%" className="childrenImage" height="80%" src={imgOngSingup} />
            <div className="bold absolute top-640p font-color-white fs-56p mg-l-16">Encontre aqui os voluntários ideais que <br />
              <span className="yellowWord">você precisa</span>.
            </div>
          </div>

          <div className="mg-l-32 width-50pg">
            <div className="height-60pg border border-rd-10 bg-color-gray-light">
              <div className=" mg-t-32 mg-l-16">
                <LabelTitleForm title="Informações Institucionais" />
              </div>

              <div className="mg-t-32 mg-l-16 mg-r-16">
                <InputLine name="nomeDaOng" title="Nome da Instituição" type="text" placeholder="Ex: Sonhar Acordado" />
              </div>

              <div className="mg-t-8 mg-l-16 flex">
                <div className="width-50pg ">
                  <InputLine name="cnpj" title="CNPJ" type="text" placeholder="XX.XXX.XXX/XXXX-XX" />
                </div>
                <div className="width-40pg mg-l-32">
                  <InputLine name="telefone" title="Telefone de Contato" type="text" placeholder="(XX)XXXXX-XXXX" />
                </div>
              </div>

              <div className="mg-t-32 mg-l-16 mg-r-16">
                <h3>Endereço</h3>
                <InputLine name="logradouro" title="Logradouro" type="text" placeholder="Nome da Rua/Avenida/Alameda" />
              </div>

              <div className="mg-t-32 mg-l-16 mg-r-16 flex">
                <div className="width-60pg ">
                  <InputLine name="bairro" id="bairroForm" title="Bairro" type="text" placeholder="Ex: Centro" />
                </div>
                <div className="width-30pg mg-l-32">
                  <InputLine name="numero" id="numeroForm" title="Número" type="text" placeholder="XXXX" />
                </div>
              </div>

              <div className="mg-t-32 mg-l-16 mg-r-16 flex">
                <div className="width-30pg mg-t-8">
                  <InputLine name="cep" title="CEP" type="text" placeholder="XXXXX-XXX" />
                </div>
                <div className="width-50pg mg-l-32">
                  <ComboBoxStateAndCities cidadeName="cidade" estadoName="estado" />
                </div>
              </div>

              <div className="mg-t-32 mg-l-8 mg-r-16 flex">
                <div className="width-30pg ">
                  <ComboBox name="causa" content={['Animais', 'Crianças', 'Deficientes', 'Desempregados', 'Imóveis', 'Saúde', 'Lazer', 'Idosos']} labelTitle="Causa" />
                </div>
              </div>

            </div>


            <div className="mg-t-24 height-30pg border border-rd-10 bg-color-gray-light">
              <div className=" mg-t-32 mg-l-16">
                <LabelTitleForm title="Informações da Conta" />
              </div>
              <div className="mg-t-24 mg-l-16 mg-r-16">
                <InputLine name="email" title="Email" type="text" placeholder="Ex: sonhar.acordado@email.com" />
              </div>
              <div className="mg-t-24 mg-l-16 mg-r-16 width-70pg">
                <InputLine name="senha" title="Senha(mínimo de 8 dígitos)" type="password" placeholder="********" />
              </div>
              <div className="mg-t-24 mg-l-16 mg-r-16 width-70pg">
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