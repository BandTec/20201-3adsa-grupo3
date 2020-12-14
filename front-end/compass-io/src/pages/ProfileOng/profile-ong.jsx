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

import { render } from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

import UsuarioJuridicoService from '../../services/usuario-juridico-service';
import ArquivoService from '../../services/arquivo-service';
import UsuarioFisicoVagaService from '../../services/usuario-fisico-vaga-service';

import './profile-ong.css';
import VagaService from '../../services/vaga-service';
import UsuarioFisicoService from '../../services/usuario-fisico-service';

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
    this.carregarVoluntarios();
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
    debugger
    let usuarioJuridicoService = new UsuarioJuridicoService();
    let id = parseInt(sessionStorage["userId"]);

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

  carregarVoluntarios = async () => {
    try {
      let vagaService = new VagaService();

      let userIdAsInt = parseInt(sessionStorage["userId"]);
      let userId = userIdAsInt % 2 != 0 ? userIdAsInt : -1;
      if (userId == -1)
        return;

      let vagas = await vagaService.getVagasByFkOng(userId);

      let usuarioFisicoVagaService = new UsuarioFisicoVagaService();
      let contador = 0;
      let ufv;
      do {
        ufv = await usuarioFisicoVagaService.getUsuarioFisicoByIdVaga(vagas.data[contador].id);
        contador++;
      } while (ufv.aprovado != null)

      sessionStorage["candidato"] = ufv.data[0].fkUsuarioFisico.id;
      sessionStorage["vaga"] = ufv.data[0].fkVaga.id;

      let nome = document.getElementById("voluntarioNomeId");
      let img = document.getElementById("voluntarioImgId");
      let idade = document.getElementById("voluntarioIdadeId");

      nome.innerText = ufv.data[0].fkUsuarioFisico.nome;

      let usuarioFisicoService = new UsuarioFisicoService();
      let foto = await usuarioFisicoService.getFoto(ufv.data[0].fkUsuarioFisico.id);
      img.src = "data:image/png;base64," + foto.data;

      let convertData = new Date(ufv.data[0].fkUsuarioFisico.dataNascimento).toLocaleDateString("pt-BR");
      let nascimento = convertData.split('/');
      let hoje = new Date;
      let hojePartes = [hoje.getDate(), (hoje.getMonth() + 1), hoje.getFullYear()];
      let idadeCalculada;
      if (hojePartes[1] >= nascimento[1]) {
        idadeCalculada = hojePartes[2] - nascimento[2];
      } else if (hojePartes[0] >= nascimento[0]) {
        idadeCalculada = hojePartes[2] - nascimento[2];
      } else {
        idadeCalculada = (hojePartes[2] - nascimento[2]) - 1;
      }
      idade.innerHTML += " " + idadeCalculada + " anos";
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      })
    }
  }

  aprovar = async () => {
    try {
      let usuarioFisicoVagaService = new UsuarioFisicoVagaService();

      let idUser = parseInt(sessionStorage["candidato"]);
      let idVaga = parseInt(sessionStorage["vaga"]);

      let ufv = await usuarioFisicoVagaService.aprovarByIds(idUser, idVaga);
      this.setState({
        message: "Voluntário aprovado",
        severity: "success",
        open: true
      });

      window.location.href = "http://localhost:3000/profile/ong";
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      })
    }
  }

  recusar = async () => {
    try {
      let usuarioFisicoVagaService = new UsuarioFisicoVagaService();

      let idUser = parseInt(sessionStorage["candidato"]);
      let idVaga = parseInt(sessionStorage["vaga"]);

      let ufv = await usuarioFisicoVagaService.recusarByIds(idUser, idVaga);
      this.setState({
        message: "Voluntário recusado",
        severity: "success",
        open: true
      });

      window.location.href = "http://localhost:3000/profile/ong";
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
      <section>
        <AlertCard open={this.state.open} message={this.state.message} severity={this.state.severity} onClose={this.fecharAlerta} />
        <div className="mg-v-16 width-100pg">
          <AboutOng name="descricaoOng" nameOng="TETO Brasil" imgId="imgOng"
            infoOng="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, accusantium cupiditate incidunt laboriosam aspernatur. Placeat ut maxime facilis molestias pariatur!"
            width="210"
            height="280"
            link="www.google.com.br"
            isProfile
            editImgOng={this.trocarFoto}/>

          <div className="width-100pg border border-rd-10 height-500pg">
            <div className="flex justcon-sb mg-b-16">
              <h1 className="width-30pg mg-l-32">Vagas Abertas</h1>
              <div className="width-60pg flex justcon-sb mg-t-8">
                <div className="width-40pg mg-r-16 mg-t-8">
                  <Button variant="contained" className={this.classes.btnTeste} onClick={this.ClickDirection}>+ Cadastrar Vaga</Button>
                </div>
                <div className="width-50pg mg-r-16 mg-t-8">
                  <Button variant="contained" onClick={this.baixarArquivo} >Download de vagas em TXT</Button>
                </div>
                <div className="btnUpload">
                  <InputFile id="inputFile" text="UPLOAD DE VAGAS EM TXT" callBack={this.subirArquivo} />
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
              professionVolunteer="Automação"
              schoolVolunteer="Cursando Superior"
              liveInVolunteer="Suzano,SP,Brasil"

              nomeId="voluntarioNomeId"
              volunteerImgId="voluntarioImgId"
              idadeId="voluntarioIdadeId"

              aprovar={this.aprovar}
              recusar={this.recusar}

              profissaoId="voluntarioProfissaoId"
              escolaridadeId="voluntarioEscolaridadeId"
              moraEmId="voluntarioMoraEmId"
            />
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
