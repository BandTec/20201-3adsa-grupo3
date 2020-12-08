import React from 'react';
import InputLine from "../../../components/InputLine/input-line";
import LabelTitleForm from "../../../components/LabelTitleForm/label-title-form";
import Button from '@material-ui/core/Button';
import Image from '../../../components/Image/image';
import imgOngSingup from '../../../assets/images/img-ong-singup.jpg';
import imgEyePassword from '../../../assets/images/img-eye-password.png';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import ComboBox from '../../../components/ComboBox/combo-box';
import AlertCard from '../../../components/AlertCard/alert-card';
import InputFile from '../../../components/InputFile/input-file';
import UsuarioJuridicoService from '../../../services/usuario-juridico-service'
import EnderecoService from '../../../services/endereco-service'
import CommomFunctions from '../../../utils/functions'

import './sign-up-ong.css';
import { RecentActorsRounded } from '@material-ui/icons';
import { render } from 'react-dom';

async function cadastrar() {
  try {
    getEnderecoFormData();
    getUsuarioFormData();
  
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
  
    render(<AlertCard message="Dados enviados para análise. Verifique sua caixa de e-mail" severity="success"/>, document.getElementById("alertArea"));
    window.location.href = "/signin";
  } catch (error) {
    let errorString = `${error}`;
    render(<AlertCard message={errorString} severity="error"/>, document.getElementById("alertArea"));
  }
}

function getUsuarioFormData() {

  try {
    validarSenha();
    let NomeDaOng = document.getElementById("nomeOng");
    NomeDaOng.innerText = document.getElementsByName("nomeDaOng")[0].value;
    if (NomeDaOng.innerText.length == 0)
      throw getError("Nome da ONG");

    let Email = document.getElementById("email");
    Email.innerText = document.getElementsByName("email")[0].value;
    if (Email.innerText.length == 0)
      throw getError("Email");

    let Senha = document.getElementById("senha");
    Senha.innerText = document.getElementsByName("senha")[0].value;

    let Telefone = document.getElementById("telefone");
    Telefone.innerText = document.getElementsByName("telefone")[0].value;
    if (Telefone.innerText.length == 0)
      throw getError("Telefone");

    let Cnpj = document.getElementById("cnpj");
    Cnpj.innerText = document.getElementsByName("cnpj")[0].value;
    if (Cnpj.innerText.length == 0)
      throw getError("CNPJ");

    let Causa = document.getElementById("causa");
    Causa.innerText = document.getElementsByName("causa")[0].value;
    if (Causa.innerText.length == 0)
      throw getError("Causa");
  } catch (error) {
    throw error;
  }
}

function getEnderecoFormData() {
  try {
    let Logradouro = document.getElementById("logradouro");
    Logradouro.innerText = document.getElementsByName("logradouro")[0].value;
    if (Logradouro.innerText.length == 0)
      throw getError("Logradouro");
  
    let Numero = document.getElementById("numeroEndereco");
    Numero.innerText = document.getElementsByName("numero")[0].value;
    if (Numero.innerText.length == 0)
      throw getError("Numero");
  
    let Cep = document.getElementById("cep");
    Cep.innerText = document.getElementsByName("cep")[0].value;
    if (Cep.innerText.length == 0)
      throw getError("CEP");
  
    let Bairro = document.getElementById("bairro");
    Bairro.innerText = document.getElementsByName("bairro")[0].value;
    if (Bairro.innerText.length == 0)
      throw getError("Bairro");
  
    let Cidade = document.getElementById("cidade");
    Cidade.innerText = document.getElementsByName("cidade")[0].value;
    if (Cidade.innerText.length == 0)
      throw getError("Cidade");
  
    let Estado = document.getElementById("estado");
    Estado.innerText = document.getElementsByName("estado")[0].value;
    if (Estado.innerText.length == 0)
      throw getError("Estado");
  } catch (error) {
    throw error;
  }
}

function validarSenha() {
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

function getError(field) {
  return new Error(`Campo de ${field} vazio`);
}

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div>Cadastro voluntário</div>

      <React.Fragment>

        <img id="imgTeste"/>
        <div id="alertArea"></div>
        <form id="usuarioJuridicoToSubmit" hidden>
          <input id="nomeOng"/>
          <input id="email"/>
          <input id="senha"/>
          <input id="telefone"/>
          <input id="cnpj"/>
          <input id="causa"/>
        </form>

        <form id="enderecoUsuarioJuridicoToSubmit" hidden>
          <input id="logradouro"/>
          <input id="numeroEndereco"/>
          {/* input id="complemento"/> */}
          <input id="cep"/>
          <input id="bairro"/>
          <input id="estado"/>
          <input id="cidade"/>
        </form>

        <div className="width-100pg mg-b-32 flex">
          <div className="width-50pg flex relative">
            <Image width="100%" className="childrenImage" height="70%" src={imgOngSingup} />
            <div className="bold absolute top-640p font-color-white fs-56p mg-l-16">Encontre aqui os voluntários ideais que <br />
              <span className="yellowWord">você precisa</span>.
            </div>
          </div>
          <div className="mg-l-32 width-50pg">
            <div className="height-720p border border-rd-10 bg-color-gray-light">
              <div className=" mg-t-16 mg-l-16">
                <LabelTitleForm title="Informações Institucionais" />
              </div>
              <div className="mg-t-16 mg-l-16 mg-r-16">
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
              <div className="mg-t-16 mg-l-16 mg-r-16">
                <h3>Endereço</h3>
                <InputLine name="logradouro" title="Logradouro" type="text" placeholder="Nome da Rua/Avenida/Alameda" />
              </div>
              <div className="mg-t-16 mg-l-16 mg-r-16 flex">
                <div className="width-60pg ">
                  <InputLine name="bairro" id="bairroForm" title="Bairro" type="text" placeholder="Ex: Centro" />
                </div>
                <div className="width-30pg mg-l-32">
                  <InputLine name="numero" id="numeroForm" title="Número" type="text" placeholder="XXXX" />
                </div>
              </div>
              <div className="mg-t-16 mg-l-16 mg-r-16 flex">
                <div className="width-30pg ">
                  <InputLine name="cep" title="CEP" type="text" placeholder="XXXXX-XXX" />
                </div>
                <div className="width-30pg mg-l-32">
                  <ComboBox name="estado" labelTitle="Estado" id="estado" nomeItem1="AC" nomeItem2="DF" nomeItem3="MG" nomeItem4="RJ"
                    nomeItem5="SP" />
                </div>
                <div className="width-30pg mg-l-32">
                  <ComboBox name="cidade" labelTitle="Cidade" nomeItem1="Guaianazes" nomeItem2="Guarulhos" nomeItem3="Mogi das Cruzes" nomeItem4="São Paulo"
                    nomeItem5="Suzano" />
                </div>
              </div>
              <div className="mg-t-16 mg-l-8 mg-r-16 flex">
                <div className="width-30pg ">
                  <ComboBox name="causa" labelTitle="Causa" nomeItem1="Animais" nomeItem2="Crianças" nomeItem3="Deficientes" nomeItem4="Desempregados"
                    nomeItem5="Imóveis" />
                </div>
                <div className="width-30pg mg-l-32 mg-r-64 mg-t-24">
                  <Button id="btnAdd" className="btnCause bg-color-blue" variant="contained" color="primary">+ Adicionar Causa</Button>
                </div>
                  <InputFile id="foto" className="inputFoto" text="Escolher foto"/>
              </div>
            </div>



            <div className="height-400p mg-t-24 border border-rd-10 bg-color-gray-light">
              <div className=" mg-t-16 mg-l-16">
                <LabelTitleForm title="Informações da Conta" />
              </div>
              <div className="mg-t-16 mg-l-16 mg-r-16">
                <InputLine name="email" title="Email" type="text" placeholder="Ex: sonhar.acordado@email.com" />
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