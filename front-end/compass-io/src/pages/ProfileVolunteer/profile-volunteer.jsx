import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import AboutVolunteer from '../../components/AboutVolunteer/about-volunteer';
import ImgVolunteer from '../../assets/images/volunteer-woman-img.jpg';
import Rating from '../../components/Rating/rating';
import CommentBox from '../../components/CommentBox/comment-box';
import CarouselInterests from '../../components/CarouselInterests/carousel-interests';
import CarouselSkills from '../../components/CarouselSkills/carousel-skills';

import Footer from '../../components/Footer/footer';

// import { Container } from './styles';

import './profile-volunteer.css';

export default function ProfileVolunteer() {
  return (
    <div classname="containerProfileVolunteer">
      <Navbar/>
      <AboutVolunteer imgVolunteer={ImgVolunteer} nameVolunteer="Iago Roani de Lima" ageVolunteer="21 anos" professionVolunteer="Automação"
      schoolVolunteer="Cursando Superior" liveInVolunteer="Suzano,SP,Brasil"></AboutVolunteer>
      <span><h1><u><b>Sobre Mim</b></u></h1></span>
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
      <h1><u>Avaliações</u></h1>
      <Rating/>
      <Rating/>
      </div>
      <Footer/>
    </div>
  );
};