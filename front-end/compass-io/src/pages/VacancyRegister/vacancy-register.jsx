import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import InputLine from "../../components/InputLine/input-line";
import LabelTitleForm from "../../components/LabelTitleForm/label-title-form";
import Image from '../../components/Image/image';
import Button from '@material-ui/core/Button';
import GirlVolunteerImg from '../../assets/images/girl-volunteer.jpg';
import ComboBox from '../../components/ComboBox/combo-box'
import InputFile from '../../components/InputFile/input-file';
import AlertCard from '../../components/AlertCard/alert-card';

import VagaService from '../../services/vaga-service'
import UsuarioJuridicoService from '../../services/usuario-juridico-service'
import EnderecoService from '../../services/endereco-service'
import CommomFunctions from '../../utils/functions'

import './vacancy-register.css';
import { Input } from '@material-ui/core';
import { render } from 'react-dom';

async function cadastrarVaga() {
  try {
    debugger
    getEnderecoVagaFormData()
    getVagaFormData()
  
    let vagaService = new VagaService();
    let usuarioJuridicoService = new UsuarioJuridicoService();
    let enderecoService = new EnderecoService();

    let formEndereco = document.getElementById("formEnderecoVagaToSubmit");
    const enderecoAsJson = CommomFunctions.convertFormToJson(formEndereco);
    var respEndereco = await enderecoService.postEndereco(enderecoAsJson);

    if (sessionStorage["userId"] == "undefined")
      throw new Error("Você precisa estar logado para fazer está ação");

    let respUsuarioJuridico = await usuarioJuridicoService.getUsuarioJuridicoById(sessionStorage["userId"]);
    if (respUsuarioJuridico == "")
      throw new Error("Ocorreu um erro com seu usuário. Favor fazer login novamente");

    let formVaga = document.getElementById("formVagaToSubmit");
    let vagaObj = CommomFunctions.convertFormToObject(formVaga);
    vagaObj.fkEndereco = respEndereco.data;
    vagaObj.fkUsuarioJuridico = respUsuarioJuridico.data[0];
    const vagaAsJson = JSON.stringify(vagaObj);
    let vagaCadastrada = await vagaService.postVaga(vagaAsJson);
    
    uparFoto(vagaCadastrada.data);

    render(<AlertCard message="Vaga cadastrada" severity="success"/>, document.getElementById("alertArea"));
    window.location.href = "/profile/ong";
  } catch (error) {
    let errorString = `${error}`;
    render(<AlertCard message={errorString} severity="error"/>, document.getElementById("alertArea"));
  }
}

function getVagaFormData() {
  try {
    let Titulo = document.getElementById("titulo");
    Titulo.innerText = document.getElementsByName("titulo")[0].value;
    if (Titulo.innerText.length == 0)
      throw getError("Titulo");
  
    let Descricao = document.getElementById("descricao");
    Descricao.innerText = document.getElementsByName("descricao")[0].value;
    if (Descricao.innerText.length == 0)
      throw getError("Descricao");

    let Causa = document.getElementById("causa");
    Causa.innerText = document.getElementsByName("causa")[0].value;
    if (Causa.innerText.length == 0)
      throw getError("Causa");
    
    let DataInicio = document.getElementById("dataInicio");
    DataInicio.innerText = document.getElementsByName("dataInicio")[0].value;
    if (DataInicio.innerText.length == 0)
      throw getError("Data de início");
  
    let DataFim = document.getElementById("dataFim");
    DataFim.innerText = document.getElementsByName("dataFim")[0].value;
    if (DataFim.innerText.length == 0)
      throw getError("Datade fim");
  } catch (error) {
    throw error;
  }
}

function getEnderecoVagaFormData() {
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

function getError(field) {
  return new Error(`Campo de ${field} vazio`);
}

async function uparFoto(vaga) {
  try {
    debugger
    let vagaService = new VagaService();

    let foto = document.getElementById("editarFoto").files[0];
    let formDataFoto = new FormData();
    formDataFoto.set("foto", foto);
    
    let id = parseInt(vaga.idVaga);

    await vagaService.uploadFoto(id, formDataFoto);

  } catch (error) {
    let errorString = `${error}`;
    render(<AlertCard message={errorString} severity="error"/>, document.getElementById("alertArea"));
  }
}

export default function VacancyRegister() {
  return (
    <React.Fragment>

      <div id="alertArea"></div>

      <form id="formVagaToSubmit" hidden>
        <input id="titulo"/>
        <input id="descricao"/>
        <input id="causa"/>
        <input id="dataInicio"/>
        <input id="dataFim"/>
      </form>

      <form id="formEnderecoVagaToSubmit" hidden>
      <input id="logradouro"/>
        <input id="numeroEndereco"/>
        <input id="cep"/>
        <input id="bairro"/>
        <input id="estado"/>
        <input id="cidade"/>
      </form>

      <LabelWelcome labelTitle="Detalhes da oportunidade" labelText="Nos ajude a divulgar a sua vaga"/>
      <br/>

      <div className="container">
        <span className="loginImagePart">
          <span className="loginImage">
            <Image width="535" className="childrenImage" height="560" src={GirlVolunteerImg} />
          </span>
          <span className="textImage">
            Fazendo a diferença conforme o seu <br/>
            <span className="yellowWord">perfil</span>.
          </span>
        </span>

        <span className="registerVacancyForm">
            <span className="lblForm">
                <div className="inputLogin">
                    <InputLine name="titulo" title="Título da vaga" type="text" placeholder="O que você busca?"/>
                </div> 
                <div className="inputLogin">
                    <ComboBox name="causa" labelTitle="Causa" nomeItem1="AC" nomeItem2="DF" nomeItem3="MG" nomeItem4="RJ"
                    nomeItem5="SP" />
                </div>
                <div className="inputLogin">
                    <InputFile id="editarFoto" text="Enviar foto"/>
                </div>
            </span>

            <span className="lblForm">
                <div className="inputLogin">
                    <InputLine title="Carga Horária" type="text" placeholder="Ex: 4h semanais"/>
                </div> 
                <div className="inputLogin">
                    <InputLine name="dataInicio" title="Data Início" type="date" placeholder="DD/MM/AAAA"/>
                </div>
                <div className="inputLogin">
                    <InputLine name="dataFim" title="Data Fim" type="date" placeholder="DD/MM/AAAA"/>
                </div>
            </span>

          <div className="inputLogin">
            <InputLine name="descricao" title="Descrição" type="text" placeholder="Dê uma breve descrição do trabalho"/>
          </div>
          <div className="lblForm inputLogin">
              <InputLine name="cep" title="CEP" type="text"  />
              <InputLine name="logradouro" title="Logradouro" type="text" />
              <InputLine name="numero" title="Número" type="number" />
          </div>
          <div className="lblForm inputLogin">
              <InputLine name="bairro" title="Bairro" type="text" />
              <InputLine name="estado" title="Estado" type="text" />
              <InputLine name="cidade" title="Cidade" type="text" />
          </div>
          <div className="btnPage">
            <Button id="btnVoltarOng" variant="contained" color="primary">Voltar</Button>
            <Button id="btnCadastrarOng" onClick={cadastrarVaga} variant="contained" color="primary">Cadastrar</Button>
          </div>
        </span>
      </div>
    </React.Fragment>
  );
};