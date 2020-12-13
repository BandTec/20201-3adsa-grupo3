import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import VacancyHeader from '../../components/VacancyHeader/vacancy-header';
import AboutOng from '../../components/AboutOng/about-ong';
import WorkSchedule from '../../components/WorkSchedule/work-schedule';
import CarouselVacancyCause from '../../components/CarouselVacancyCause/carousel-vacancy-cause';
import Button from '@material-ui/core/Button';
// import './vacancy-specific.css';
import { Loader } from "@googlemaps/js-api-loader"

import './vacancy-specific.css'

import VagaService from '../../services/vaga-service';
import UsuarioFisicoService from '../../services/usuario-fisico-service';
import UsuarioJuridicoService from '../../services/usuario-juridico-service';

window.onload = () => {};

async function renderVaga() {
  let vagaService = new VagaService();
  const resposta = await vagaService.getVagaById(sessionStorage.getItem("idVaga"));
  let vagaInfos = resposta.data[0];
  console.log(vagaInfos);
  sessionStorage.setItem("causa", vagaInfos.causa);

  let DescricaoVaga = document.getElementById("descricaoVaga");
  DescricaoVaga.innerText = vagaInfos.descricao;
  let header = document.getElementsByName("headerVaga")[0];
  header.children.item(1).children.item(0).innerText=vagaInfos.titulo;

  let ong = document.getElementsByName("ong")[0];
  ong.children.item(1).children.item(0).innerText=vagaInfos.fkUsuarioJuridico.nomeOng;
  ong.children.item(1).children.item(1).innerText=vagaInfos.fkUsuarioJuridico.descricao;
  ong.children.item(1).children.item(2).innerText='www.' + vagaInfos.fkUsuarioJuridico.nomeOng + '.org';

  let vaga = document.getElementsByName("vaga")[0];
  vaga.children.item(1).children.item(1).innerText=new Date(vagaInfos.dataInicio).toLocaleDateString("pt-BR");
  vaga.children.item(2).children.item(1).innerText=new Date(vagaInfos.dataFim).toLocaleDateString("pt-BR");
  vaga.children.item(3).children.item(1).innerText=vagaInfos.fkEndereco.logradouro + ', ' + vagaInfos.fkEndereco.numeroEndereco + ' - ' + vagaInfos.fkEndereco.bairro + ', ' + vagaInfos.fkEndereco.cidade + ' - ' + vagaInfos.fkEndereco.estado + ', ' + vagaInfos.fkEndereco.cep;


  //sessionStorage["currentVacancy"] = vagaInfos.titulo;

  let usuarioFisicoService = new UsuarioFisicoService();

  let userId = sessionStorage["userId"];
  let userIdAsInt = parseInt(userId);

  let vagaAsJson = JSON.stringify(resposta.data[0]);
  let ultimaVagaResponse = await usuarioFisicoService.setUltimaVaga(userIdAsInt, vagaAsJson);
  
  let fotoResponse = await vagaService.getFoto(resposta.data[0].id);
  let vacancyImage = document.getElementById("vacancyImage");
  vacancyImage.src = "data:image/png;base64," + fotoResponse.data;
}

async function baixarArquivo() {
  let userId = parseInt(sessionStorage["userId"]);
  let usuarioAtual = await new UsuarioJuridicoService().getUsuarioJuridicoById(userId);
  let nomeOng = usuarioAtual.data[0].nomeOng;

  window.location.href=`http://localhost:8080/arquivos/arquivo02?nomeDoArquivo=VoluntariosDaVaga&nomeDaOng=${nomeOng}&nomeDaVaga=${sessionStorage["currentVacancy"]}&isCsv=false`;
}

export default class VacancySpecific extends React.Component {

  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    renderVaga()
  }

  render() {
    return (
      <section>
  
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6hOO7TuGsB5W39Y7g6oaAXWaUMnrxyeA&callback=initMap"
          type="text/javascript"></script>
          
        <VacancyHeader name="headerVaga" imgId="vacancyImage" title="Teste"></VacancyHeader>
  
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
          <Button onClick={baixarArquivo}>Baixar arquivo da vaga TXT</Button>
        </div>
        <div id="aboutOng">
          <h1 className="fs-32p">Sobre a ONG</h1>
          <AboutOng name="ong" nameOng="TETO Brasil"
            infoOng="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, accusantium cupiditate incidunt laboriosam aspernatur. Placeat ut maxime facilis molestias pariatur!"
            link="www.google.com.br" />
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