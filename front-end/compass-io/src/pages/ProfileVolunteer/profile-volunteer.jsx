import React from 'react';
import { render } from 'react-dom';
import Navbar from '../../components/Navbar/navbar';
import AboutVolunteer from '../../components/AboutVolunteer/about-volunteer';
import ImgVolunteer from '../../assets/images/volunteer-woman-img.jpg';
import Rating from '../../components/Rating/rating';
import CommentBox from '../../components/CommentBox/comment-box';
import CarouselInterests from '../../components/CarouselInterests/carousel-interests';
import CarouselSkills from '../../components/CarouselSkills/carousel-skills';
import AlertCard from '../../components/AlertCard/alert-card';

import UsuarioFisicoService from '../../services/usuario-fisico-service';

import Footer from '../../components/Footer/footer';

// import { Container } from './styles';

import './profile-volunteer.css';

async function trocarFoto() {
  try {
    let usuarioFisicoService = new UsuarioFisicoService();

    let foto = document.getElementById("editarFoto").files[0];
    let formDataFoto = new FormData();
    formDataFoto.set("foto", foto);

    debugger
  
    let id = parseInt(sessionStorage["userId"])
    let response = await usuarioFisicoService.uploadFoto(id, formDataFoto);
    
    if (response.status == 201) {
      getFoto();
    }
    render(<AlertCard message="Foto atualizada" severity="success"/>, document.getElementById("alertArea"));
  } catch (error) {
    let errorString = `${error}`;
    render(<AlertCard message={errorString} severity="error"/>, document.getElementById("alertArea"));
  }
}

//window.onload = getFoto();

async function getFoto() {
  debugger;
  let usuarioFisicoService = new UsuarioFisicoService();
  let id = parseInt(sessionStorage["userId"])

  let fotoResponse = await usuarioFisicoService.getFoto(id);
  let imgVolunteer = document.getElementById("imgVolunteer");
  imgVolunteer.src = "data:image/png;base64," + fotoResponse.data;
}

export default class ProfileVolunteer extends React.Component {
  
  state = {

  }

  componentDidMount() {
    getFoto()
  }

  render() {
    return (
      <div classname="containerProfileVolunteer">
        <div id="alertArea"></div>
        <AboutVolunteer imgId="imgVolunteer" editImgVolunteer={trocarFoto} className="mg-b-16" nameVolunteer="Iago Roani de Lima" ageVolunteer="21 anos" professionVolunteer="Automação"
        schoolVolunteer="Cursando Superior" liveInVolunteer="Suzano,SP,Brasil"></AboutVolunteer>
        <div className="">
          <h1>Sobre mim</h1>
        </div>
        {/* <span className><h1><u><b>Sobre Mim</b></u></h1></span> */}
        <div classname="descriptionVolunteer">
        <CommentBox/>
        </div>
        <div>
          <h1><u>Interesses</u></h1>
          <CarouselInterests/>
        </div>
        <div>
          <h1><u>Competências</u></h1>
          <CarouselSkills/>
        </div>
        <div classname="ratingBox">
        <Rating isVolunteerProfile 
              imgVolunteer={ImgVolunteer}
              vacancyTitle="Marcenaria para construção de móveis" 
              infoVacancy="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, 
                        accusantium cupiditate incidunt laboriosam aspernatur. P
                        laceat ut maxime facilis molestias pariatur!"/>
        </div>
      </div>
    );
  }
};