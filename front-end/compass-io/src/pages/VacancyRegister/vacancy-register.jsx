import React from 'react';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import InputLine from "../../components/InputLine/input-line";
import LabelTitleForm from "../../components/LabelTitleForm/label-title-form";
import Image from '../../components/Image/image';
import Button from '@material-ui/core/Button';
import GirlVolunteerImg from '../../assets/images/girl-volunteer.jpg';
import ComboBox from '../../components/ComboBox/combo-box';
import ComboBoxStateAndCities from '../../components/ComboBoxStateAndCities/combo-box-state-and-cities';
import InputFile from '../../components/InputFile/input-file';
import AlertCard from '../../components/AlertCard/alert-card';
import Alerta from '../../components/Alerta/alerta'

import VagaService from '../../services/vaga-service';
import UsuarioJuridicoService from '../../services/usuario-juridico-service';
import EnderecoService from '../../services/endereco-service';
import CommomFunctions from '../../utils/functions';

import './vacancy-register.css';
import { Input } from '@material-ui/core';
import { render } from 'react-dom';

export default class VacancyRegister extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    message: '',
    severity: '',
    open: false
  }

  cadastrarVaga = async () => {
    try {
      this.getEnderecoVagaFormData()
      this.getVagaFormData()

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

      this.uparFoto(vagaCadastrada.data);
      
      this.setState({
        message: "Vaga cadastrada com sucesso",
        severity: "success",
        open: true
      })

      window.location.href = "/profile/ong";
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      })
    }
  }

  getVagaFormData = () => {
    try {
      let Titulo = document.getElementById("titulo");
      Titulo.innerText = document.getElementsByName("titulo")[0].value;
      if (Titulo.innerText.length == 0)
        throw this.getError("título");

      let Descricao = document.getElementById("descricao");
      Descricao.innerText = document.getElementsByName("descricao")[0].value;
      if (Descricao.innerText.length == 0)
        throw this.getError("descricao");

      let Causa = document.getElementById("causa");
      Causa.innerText = document.getElementsByName("causa")[0].value;
      if (Causa.innerText.length == 0)
        throw this.getError("causa");

      let DataInicio = document.getElementById("dataInicio");
      DataInicio.innerText = document.getElementsByName("dataInicio")[0].value;
      if (DataInicio.innerText.length == 0)
        throw this.getError("data de início");

      let DataFim = document.getElementById("dataFim");
      DataFim.innerText = document.getElementsByName("dataFim")[0].value;
      if (DataFim.innerText.length == 0)
        throw this.getError("data de fim");
    } catch (error) {
      throw error;
    }
  }

  getEnderecoVagaFormData = () => {
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

  getError = (field) => {
    return new Error(`Campo de ${field} vazio`);
  }

  uparFoto = async (vaga) => {
    try {
      let vagaService = new VagaService();

      let foto = document.getElementById("adicionarFoto").files[0];
      let formDataFoto = new FormData();
      formDataFoto.set("foto", foto);

      let id = parseInt(vaga.id);

      await vagaService.uploadFoto(id, formDataFoto);

    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      })
    }
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

        <form id="formVagaToSubmit" hidden>
          <input id="titulo" />
          <input id="descricao" />
          <input id="causa" />
          <input id="dataInicio" />
          <input id="dataFim" />
        </form>

        <form id="formEnderecoVagaToSubmit" hidden>
          <input id="logradouro" />
          <input id="numeroEndereco" />
          <input id="cep" />
          <input id="bairro" />
          <input id="estado" />
          <input id="cidade" />
        </form>

        <LabelWelcome labelTitle="Detalhes da oportunidade" labelText="Nos ajude a divulgar a sua vaga" />
        <br />

        <div className="container width-100pg height-800p">
          <div className="width-50pg flex relative">
            <Image width="100%" className="childrenImage" height="90%" src={GirlVolunteerImg} />
          </div>

          <span className="height-80pg mg-l-16 border border-rd-10 bg-color-gray-light width-60pg">
            <div className=" mg-t-16 mg-l-16">
              <LabelTitleForm title="Informações da Vaga" />
            </div>
            <div className="mg-t-24 mg-l-16 mg-r-16">
              <InputLine name="titulo" title="Título da vaga" type="text" placeholder="O que você busca?" />
            </div>
            <div className="mg-t-24 mg-h-16 flex width-100pg">
              <div className="mg-t-16 width-40pg">
                <InputFile id="foto" className="inputFoto" text="Escolher foto" />
              </div>
              <div className="width-30pg mg-t-24 mg-l-32">
                <ComboBox name="causa" labelTitle="Causa" content={['Animais', 'Crianças', 'Deficientes', 'Desempregados', 'Imóveis', 'Saúde', 'Lazer', 'Idosos']} />
              </div>
            </div>
            <div className="flex mg-t-24 mg-l-16 mg-r-16">
              <div className="width-40pg">
                <InputLine name="dataInicio" title="Data Início" type="date" placeholder="DD/MM/AAAA" />
              </div>
              <div className="width-40pg mg-l-64">
                <InputLine name="dataFim" title="Data Fim" type="date" placeholder="DD/MM/AAAA" />
              </div>
            </div>

            <div className="mg-t-24 mg-l-16 mg-r-16">
              <InputLine name="descricao" title="Descrição" type="text" placeholder="Dê uma breve descrição do trabalho" />
            </div>

            <div className="flex mg-t-24 mg-l-16 mg-r-16 justcon-sb">
              <div className="width-30pg">
                <InputLine name="cep" title="CEP" type="text" />
              </div>
            </div>

            <div className="flex mg-t-24 mg-l-16 mg-r-16 justcon-sb">
              <div className="width-70pg">
                <InputLine name="logradouro" title="Logradouro" type="text" />
              </div>
              <div className="width-20pg mg-r-16">
                <InputLine name="numero" title="Número" type="tel" />
              </div>
            </div>

            <div className="flex width-100pg mg-t-24 mg-l-16 mg-r-16 ">
              <div className="width-30pg">
                <InputLine name="bairro" title="Bairro" type="text" />
              </div>
              <div className="width-50pg mg-l-32">
                <ComboBoxStateAndCities cidadeName="cidade" estadoName="estado" />
              </div>
            </div>
            <div className="flex mg-t-64 mg-l-16 mg-r-16">
              <Button id="btnVoltarOng" variant="contained" href="http://localhost:3000/profile/ong">Voltar</Button>
              <Button id="btnCadastrarOng" onClick={this.cadastrarVaga} variant="contained" color="primary">Cadastrar</Button>

            </div>
          </span>
        </div>
      </React.Fragment>
    );
  }
};