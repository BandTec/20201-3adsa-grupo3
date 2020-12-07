import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import VacancyHeader from '../../components/VacancyHeader/vacancy-header';
import AboutOng from '../../components/AboutOng/about-ong';
import WorkSchedule from '../../components/WorkSchedule/work-schedule';
import CarouselVacancy from '../../components/CarouselVacancy/carousel-vacancy';
// import './vacancy-specific.css';
import { Loader } from "@googlemaps/js-api-loader"

import VagaService from '../../services/vaga-service';

window.onload = () => {};

async function renderVaga() {
  debugger;
  let vagaService = new VagaService();
  const resposta = await vagaService.getVagaById(1);
  let vagaInfos = resposta.data[0];
  console.log(vagaInfos);

  let DescricaoVaga = document.getElementsByName("descricaoVaga")[0];
  DescricaoVaga.innerHTML = vagaInfos.descricao;
  
  let ong = document.getElementsByName("ong")[0];
  ong.children.item(1).children.item(0).innerText=vagaInfos.fkUsuarioJuridico.nomeOng;
  ong.children.item(1).children.item(1).innerText=vagaInfos.fkUsuarioJuridico.descricaoOng;
  ong.children.item(1).children.item(2).innerText="www.google.com.br";

  let vaga = document.getElementsByName("vaga")[0];
  vaga.children.item(1).children.item(1).innerText=vagaInfos.dataInicio;
  vaga.children.item(2).children.item(1).innerText=vagaInfos.dataFim;
  vaga.children.item(3).children.item(1).innerText=vagaInfos.fkEndereco.logradouro + ', ' + vagaInfos.fkEndereco.numeroEndereco + ' - ' + vagaInfos.fkEndereco.bairro + ', ' + vagaInfos.fkEndereco.cidade + ' - ' + vagaInfos.fkEndereco.estado + ', ' + vagaInfos.fkEndereco.cep;
}

export default function VacancySpecific() {
  return (
    <section>

      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6hOO7TuGsB5W39Y7g6oaAXWaUMnrxyeA&callback=initMap"
        type="text/javascript"></script>
        
      <VacancyHeader title="Teste"></VacancyHeader>
      <div id="vacancyMenu">
        <a href="#aboutVacancy" className="menuOptions">Sobre a vaga</a>
        <a href="#aboutOng" className="menuOptions">ONG</a>
        <a href="#workSchedule" className="menuOptions">Horário de Trabalho</a>
      </div>
      <div id="aboutVacancy">
        <h1 className="fs-32p">Sobre a Vaga</h1>
        <div name="descricaoVaga" className="aboutVacancyText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque illo ea earum et perferendis dolore voluptate temporibus commodi quia, officia autem. Odit fugit sint exercitationem reprehenderit eum animi delectus.
        </div>
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
        <h1>Vagas Similares</h1>
        <CarouselVacancy />
      </div>
    </section>
  );
};