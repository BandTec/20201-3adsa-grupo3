import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import VacancyHeader from '../../components/VacancyHeader/vacancy-header';
import AboutOng from '../../components/AboutOng/about-ong';
import WorkSchedule from '../../components/WorkSchedule/work-schedule';
import CarouselVacancyCause from '../../components/CarouselVacancyCause/carousel-vacancy-cause';
import Button from '@material-ui/core/Button';
import { Loader } from "@googlemaps/js-api-loader"
import AlertCard from '../../components/AlertCard/alert-card';

import './vacancy-specific.css'

import VagaService from '../../services/vaga-service';
import UsuarioFisicoService from '../../services/usuario-fisico-service';
import UsuarioJuridicoService from '../../services/usuario-juridico-service';
import UsuarioFisicoVagaService from '../../services/usuario-fisico-vaga-service';

export default class VacancySpecific extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    message: '',
    severity: '',
    open: false,
    idUsuarioDaVez: '',
    vagaRequerida: ''
  }

  async componentDidMount() {
    this.renderVaga()
    let url = window.location.href;
    var res = url.split('3000');
    if (res[1] === undefined) {
      alert('página sem parâmetros.');
    }
    var parametros = res[1].split('/');
    console.log('Parametros encontrados:\n' + parametros);
    var idUsuario = new Array();
    idUsuario = parametros[1];
    this.setState({ idUsuarioDaVez: idUsuario });
    var idVaga = new Array();
    idVaga = parametros[3];
    this.setState({ vagaRequerida: idVaga });
  }

  renderVaga = async () => {
    try {
      debugger
      let vagaService = new VagaService();
      let url = window.location.href;
      var res = url.split('3000');
      if (res[1] === undefined) {
        alert('página sem parâmetros.');
      }
      var parametros = res[1].split('/');
      console.log('Parametros encontrados:\n' + parametros);
      var idUsuario = new Array();
      idUsuario = parametros[3];
      let inteiro = parseInt(idUsuario);
      const resposta = await vagaService.getVagaById(inteiro);
      let vagaInfos = resposta.data[0];
      console.log(vagaInfos);
      sessionStorage.setItem("causa", vagaInfos.causa);

      let DescricaoVaga = document.getElementById("descricaoVaga");
      DescricaoVaga.innerText = vagaInfos.descricao;
      let header = document.getElementsByName("headerVaga")[0];
      header.children.item(1).children.item(0).innerText = vagaInfos.titulo;

      let ong = document.getElementsByName("ong")[0];
      ong.children.item(1).children.item(0).innerText = vagaInfos.fkUsuarioJuridico.nomeOng;
      ong.children.item(1).children.item(1).innerText = vagaInfos.fkUsuarioJuridico.descricao;
      ong.children.item(1).children.item(2).innerText = 'www.' + vagaInfos.fkUsuarioJuridico.nomeOng.replace(/\s/g, '').toLowerCase() + '.org';

      let vaga = document.getElementsByName("vaga")[0];
      vaga.children.item(1).children.item(1).innerText = "Início: " + new Date(vagaInfos.dataInicio).toLocaleDateString("pt-BR");
      vaga.children.item(2).children.item(1).innerText = "Fim: " + new Date(vagaInfos.dataFim).toLocaleDateString("pt-BR");
      vaga.children.item(3).children.item(1).innerText = vagaInfos.fkEndereco.logradouro + ', ' + vagaInfos.fkEndereco.numeroEndereco + ' - ' + vagaInfos.fkEndereco.bairro + ', ' + vagaInfos.fkEndereco.cidade + ' - ' + vagaInfos.fkEndereco.estado + ', ' + vagaInfos.fkEndereco.cep;


      let img = document.getElementById("ongImg");
      let usuarioJuridicoService = new UsuarioJuridicoService();
      try {
        let foto = await usuarioJuridicoService.getFoto(vagaInfos.fkUsuarioJuridico.id);
        img.src = "data:image/png;base64," + foto.data;
      } catch (error) {

      }


      let vacancyImage = document.getElementById("vacancyImage");
      try {
        let fotoResponse = await vagaService.getFoto(resposta.data[0].id);
        vacancyImage.src = "data:image/png;base64," + fotoResponse.data;
      } catch (error) {

      }

      let usuarioFisicoService = new UsuarioFisicoService();

      let userId = this.state.idUsuarioDaVez;
      let userIdAsInt = parseInt(userId);
      let vagaAsJson = JSON.stringify(resposta.data[0]);
      await usuarioFisicoService.setUltimaVaga(userIdAsInt, vagaAsJson);
    } catch (error) {

    }
  }

  baixarArquivo = async () => {
    let userId = parseInt(this.state.idUsuarioDaVez);
    let usuarioAtual = await new UsuarioJuridicoService().getUsuarioJuridicoById(userId);
    let nomeOng = usuarioAtual.data[0].nomeOng;

    window.location.href = `http://localhost:8080/arquivos/arquivo02?nomeDoArquivo=VoluntariosDaVaga&nomeDaOng=${nomeOng}&nomeDaVaga=${sessionStorage["currentVacancy"]}&isCsv=false`;
  }

  candidatar = async () => {
    try {
      debugger
      let usuarioFisicoVagaService = new UsuarioFisicoVagaService();

      let userIdAsInt = parseInt(this.state.idUsuarioDaVez);
      let userId = userIdAsInt % 2 == 0 ? userIdAsInt : -1;
      if (userId == -1)
        return;

      let vagaId = parseInt(this.state.vagaRequerida);
      if (vagaId <= 0)
        return;

      let ufv = await usuarioFisicoVagaService.postUFVByIds(userId, vagaId);
      await usuarioFisicoVagaService.aplicar(ufv.data);

      this.setState({
        message: "Candidatura enviada",
        severity: "success",
        open: true
      });
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      });
    }
  }

  favoritar = async () => {
    try {
      debugger
      let usuarioFisicoVagaService = new UsuarioFisicoVagaService();

      let userIdAsInt = parseInt(this.state.idUsuarioDaVez);
      let userId = userIdAsInt % 2 == 0 ? userIdAsInt : -1;
      if (userId == -1)
        return;

      let vagaId = parseInt(this.state.vagaRequerida);
      if (vagaId <= 0)
        return;

      let ufv = await usuarioFisicoVagaService.curtirByIds(userId, vagaId);

      this.setState({
        message: "Vaga favoritada",
        severity: "success",
        open: true
      });
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      });
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

        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6hOO7TuGsB5W39Y7g6oaAXWaUMnrxyeA&callback=initMap"
          type="text/javascript"></script>

        <VacancyHeader name="headerVaga" imgId="vacancyImage" title="Teste" width="520" height="300"
          candidatarCallBack={this.candidatar} favoritarCallBack={this.favoritar}
        />

        <AlertCard open={this.state.open} message={this.state.message} severity={this.state.severity} onClose={this.fecharAlerta} />

        <div className="border-b mg-t-24 height-56p font-color-gray-light fs-32p">
          <a href="#aboutVacancy" className="mg-t-8 mg-r-64 menuOptions">Sobre a vaga</a>
          <a href="#aboutOng" className="mg-t-8 mg-r-64 menuOptions">ONG</a>
          <a href="#workSchedule" className="mg-t-8 mg-r-64 menuOptions">Horário de Trabalho</a>
        </div>
        <div className="width-60pg mg-b-16">
          <h1 className="fs-32p">Sobre a Vaga</h1>
          <div id="descricaoVaga" className="aboutVacancyText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque illo ea earum et perferendis dolore voluptate temporibus commodi quia, officia autem. Odit fugit sint exercitationem reprehenderit eum animi delectus.
          </div>
          <Button onClick={this.baixarArquivo}>Baixar arquivo da vaga TXT</Button>
        </div>
        <div id="aboutOng">
          <h1 className="fs-32p">Sobre a ONG</h1>
          <AboutOng name="ong" nameOng="TETO Brasil" imgId="ongImg"
            infoOng="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, accusantium cupiditate incidunt laboriosam aspernatur. Placeat ut maxime facilis molestias pariatur!"
            link="www.google.com.br"
            width="210"
            height="210"
          />
          {/* <div className="aboutVacancyText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, accusantium cupiditate incidunt laboriosam aspernatur. Placeat ut maxime facilis molestias pariatur!
          </div> */}
        </div>
        <div id="workSchedule">
          <h1 className="fs-32p">Horário de Trabalho</h1>
          <div id="vagaSchedule" className="workScheduleInfo">
            <WorkSchedule name="vaga"
              schedule="1x por semana (preferencialmente nos fins de semana)"
              hour="4h por semana"
              location="R. Rodrigues, 116 - Vila Zat, São Paulo - SP, 02977-025" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14625.417545413482!2d-46.6222736!3d-23.5916201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59809b3e923d%3A0x68e088a655e1151d!2sLeroy%20Merlin%20Ricardo%20Jafet!5e0!3m2!1spt-BR!2sbr!4v1605138964243!5m2!1spt-BR!2sbr" width="500" height="250" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
        <div className="vacancyCarousel">
          <h1>Vagas   Similares</h1>
          <CarouselVacancyCause />
        </div>
      </section>
    );
  }
};