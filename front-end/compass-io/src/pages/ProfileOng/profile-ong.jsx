import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import AboutOng from '../../components/AboutOng/about-ong';
import Button from '@material-ui/core/Button';
import CarouselVacancy from '../../components/CarouselVacancy/carousel-vacancy';
import Rating from '../../components/Rating/rating';
import CardProfileOng from '../../components/CardProfileOng/card-profile-ong';
import InputFile from '../../components/InputFile/input-file';
import ImgVolunteer from '../../assets/images/child-img.jpg';

import { makeStyles } from '@material-ui/core/styles';

import Footer from '../../components/Footer/footer';

import './profile-ong.css';

import UsuarioJuridicoService from '../../services/usuario-juridico-service';

const useStyles = makeStyles({
  outlineBtn: {
    width: "15%",
    border: "2.5px solid #1975FF",
    color: "#1975FF",
    fontWeight: 600,
    margin: "1rem 0",
  }
});

async function renderPerfil() {

  let usuarioJuridicoService = new UsuarioJuridicoService();
  const resposta = await usuarioJuridicoService.getUsuarioJuridicoById(1);
  let vagaInfos = resposta.data[0];
  console.log(vagaInfos);

  /*let DescricaoVaga = document.getElementsByName("descricaoVaga")[0];
  DescricaoVaga.innerHTML = vagaInfos.descricao;
  let ong = document.getElementsByName("ong")[0];
  ong.children.item(1).children.item(0).innerText=vagaInfos.fkUsuarioJuridico.nomeOng;
  ong.children.item(1).children.item(1).innerText=vagaInfos.fkUsuarioJuridico.descricaoOng;
  ong.children.item(1).children.item(2).innerText="www.google.com.br";
  debugger
  let vaga = document.getElementsByName("vaga")[0];
  vaga.children.item(1).children.item(1).innerText=vagaInfos.dataInicio;
  vaga.children.item(2).children.item(1).innerText=vagaInfos.dataFim;
  vaga.children.item(3).children.item(1).innerText=vagaInfos.fkEndereco.logradouro + ', ' + vagaInfos.fkEndereco.numeroEndereco + ' - ' + vagaInfos.fkEndereco.bairro + ', ' + vagaInfos.fkEndereco.cidade + ' - ' + vagaInfos.fkEndereco.estado + ', ' + vagaInfos.fkEndereco.cep;
*/
}

window.onload = renderPerfil();

export default function ProfileOng(props) {
  const classes = useStyles();
  return (
    <section>
      <div className="containerProfileOng">
        <AboutOng nameOng="TETO Brasil" 
            infoOng="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, accusantium cupiditate incidunt laboriosam aspernatur. Placeat ut maxime facilis molestias pariatur!" 
            link="www.google.com.br"
            width="600"/>
        <div className="flex flex-column mg-t-16 width-15pg">
          <InputFile id="editarFoto" text="Editar foto" callBack={props.editImgVolunteer}/>

        </div>
          <Button variant="outline" className={classes.outlineBtn}>+Cadastrar Vaga</Button>
        <div className="vacancyCarousel">
          <h1>Vagas Abertas</h1>
          <CarouselVacancy />
        </div>
        <div className="ratings">
          <Rating isOngProfile 
            imgVolunteer={ImgVolunteer} 
            nameVolunteer="Iago Roani de Lima" 
            ageVolunteer="21 anos" 
            professionVolunteer="Automação"
            schoolVolunteer="Cursando Superior" 
            liveInVolunteer="Suzano,SP,Brasil"/>
        </div>
        <div className="flex justcon-sb">
          <CardProfileOng isContact location="R. Rodrigues, 116 - Vila Zat, São Paulo - SP, 02977-025"
          contact="contato.teto@teto.com.br" website="https://www.techo.org/" instagram="@teto.br" 
          facebook="Ver perfil"/>
          <CardProfileOng is htHelp />
        </div>

      </div>
    </section>
  );
};

