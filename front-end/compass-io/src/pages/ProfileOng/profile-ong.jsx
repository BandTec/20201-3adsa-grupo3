import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import AboutOng from '../../components/AboutOng/about-ong';
import Button from '@material-ui/core/Button';
import CarouselVacancy from '../../components/CarouselVacancy/carousel-vacancy';
import Rating from '../../components/Rating/rating';
import CardProfileOng from '../../components/CardProfileOng/card-profile-ong';
import InputFile from '../../components/InputFile/input-file';
import ImgVolunteer from '../../assets/images/child-img.jpg';
import AlertCard from '../../components/AlertCard/alert-card';
import Footer from '../../components/Footer/footer';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { render } from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

import UsuarioJuridicoService from '../../services/usuario-juridico-service';
import ArquivoService from '../../services/arquivo-service';

import './profile-ong.css';

export default class ProfileOng extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    message: '',
    severity: '',
    open: false
  }

  componentDidMount() {
    this.renderPerfil();
  }

  renderPerfil = async () => {
    let usuarioJuridicoService = new UsuarioJuridicoService();
    const resposta = await usuarioJuridicoService.getUsuarioJuridicoById(parseInt(sessionStorage["userId"]));
    let perfilJuridicoInfo = resposta.data[0];
    console.log(perfilJuridicoInfo);

    this.getFoto();

    let ong = document.getElementsByName("descricaoOng")[0];
    console.log(ong);
    ong.children.item(1).children.item(0).innerText = perfilJuridicoInfo.nomeOng;
    ong.children.item(1).children.item(1).innerText = perfilJuridicoInfo.descricao;
    ong.children.item(1).children.item(2).innerText = "www.google.com.br";
    let OngLocation = document.getElementsByName("ongLocation")[0];
    OngLocation.children.item(0).children.item(0).innerText = perfilJuridicoInfo.email;
    OngLocation.children.item(0).children.item(2).children.item(0).innerText = "https://www.techo.org/";
    OngLocation.children.item(0).children.item(1).innerText = perfilJuridicoInfo.fkEndereco.logradouro + ', ' + perfilJuridicoInfo.fkEndereco.numeroEndereco + ' - ' + perfilJuridicoInfo.fkEndereco.bairro + ', ' + perfilJuridicoInfo.fkEndereco.cidade + ' - ' + perfilJuridicoInfo.fkEndereco.estado + ', ' + perfilJuridicoInfo.fkEndereco.cep;

  }

  trocarFoto = async () => {
    try {
      let usuarioJuridicoService = new UsuarioJuridicoService();

      let foto = document.getElementById("editarFoto").files[0];
      let formDataFoto = new FormData();
      formDataFoto.set("foto", foto);

      let id = parseInt(sessionStorage["userId"])
      let response = await usuarioJuridicoService.uploadFoto(id, formDataFoto);

      if (response.status == 201) {
        this.getFoto();
      }

      this.setState({
        message: "Foto atualizada",
        severity: "success",
        open: true
      })
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      })
    }
  }

  getFoto = async () => {
    debugger;
    let usuarioJuridicoService = new UsuarioJuridicoService();
    let id = parseInt(sessionStorage["userId"])

    let fotoResponse = await usuarioJuridicoService.getFoto(id);
    let imgOng = document.getElementById("imgOng");
    imgOng.src = "data:image/png;base64," + fotoResponse.data;
  }

  baixarArquivo = async () => {
    let userId = parseInt(sessionStorage["userId"]);
    let usuarioAtual = await new UsuarioJuridicoService().getUsuarioJuridicoById(userId);
    let nomeOng = usuarioAtual.data[0].nomeOng;

    window.location.href = `http://localhost:8080/arquivos/arquivo01?nomeDoArquivo=TodasAsVagas&nomeDaOng=${nomeOng}&isCsv=false`;
  }

  subirArquivo = async () => {

    let arquivo = document.getElementById("inputFile").files[0];
    let formDataFile = new FormData();
    formDataFile.set("file", arquivo);

    await new ArquivoService().subirArquivo(formDataFile);
    window.location.href = "http://localhost:3000/profile/ong";
  }

  ClickDirection = () => {
    window.location.href = "/register";
  }

  classes = makeStyles({
    outlinedBtn: {
      width: "15%",
      border: "2.5px solid #1975FF",
      color: "#1975FF",
      fontWeight: 600,
      margin: "1rem 0",
    },
    btnTeste: {
      color: "#1975FF"
    }
  });

  
  fecharAlerta = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false })
  };

  render() {
    return (
      <section>
        <AlertCard open={this.state.open} message={this.state.message} severity={this.state.severity} onClose={this.fecharAlerta} />
        <div className="mg-v-16 width-100pg">
          <AboutOng name="descricaoOng" nameOng="TETO Brasil"
            infoOng="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, accusantium cupiditate incidunt laboriosam aspernatur. Placeat ut maxime facilis molestias pariatur!"
            link="www.google.com.br"
            width="600" />
          <div className="flex mg-v-16 width-100pg">
            <div className="width-40pg flex flex-column">
              <div className="width-100pg">
                <InputFile id="editarFoto" text="Editar foto" callBack={this.trocarFoto} />
              </div>
            </div>
            
          </div>
          <div className="width-100pg border border-rd-10 height-500pg">
            <div className="flex justcon-sb mg-b-16">
              <h1 className="width-30pg mg-l-32">Vagas Abertas</h1>
              <div className="width-60pg flex justcon-sb mg-t-8">
                <div className="width-40pg mg-r-16 mg-t-8">
                  <Button variant="contained" className={this.classes.btnTeste} onClick={this.ClickDirection}>+ Cadastrar Vaga</Button>
                </div>
                <div className="width-50pg mg-r-16 mg-t-8">
                  <Button variant="contained" onClick={this.baixarArquivo} >Upload de vagas em TXT</Button>
                </div>
                <div className="width-100pg mg-t-8 flex flex-column">
                  <InputFile id="inputFile" text="Importar arquivo" callBack={this.subirArquivo} />
                </div>
              </div>
            </div>
            <div className="mg-b-16">
              <CarouselVacancy />
            </div>
          </div>
          <div className="ratings">
            <Rating isOngProfile
              imgVolunteer={ImgVolunteer}
              nameVolunteer="Iago Roani de Lima"
              ageVolunteer="21 anos"
              professionVolunteer="Automação"
              schoolVolunteer="Cursando Superior"
              liveInVolunteer="Suzano,SP,Brasil" />
          </div>
          <div className="flex justcon-sb">
            <CardProfileOng name="ongLocation" isContact location="R. Rodrigues, 116 - Vila Zat, São Paulo - SP, 02977-025"
              contact="contato.teto@teto.com.br" website="https://www.techo.org/" instagram="@teto.br"
              facebook="Ver perfil" />
            <CardProfileOng is htHelp />
          </div>

        </div>
      </section>
    );
  }
};
