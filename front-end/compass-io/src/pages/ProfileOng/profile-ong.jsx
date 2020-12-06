import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import AboutOng from '../../components/AboutOng/about-ong';
import Button from '@material-ui/core/Button';
import CarouselVacancy from '../../components/CarouselVacancy/carousel-vacancy';
import Rating from '../../components/Rating/rating';
import CardProfileOng from '../../components/CardProfileOng/card-profile-ong';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../../components/Footer/footer';

import './profile-ong.css';

const useStyles = makeStyles({
  outlineBtn: {
    width: "15%",
    border: "2.5px solid #1975FF",
    color: "#1975FF",
    fontWeight: 600,
    margin: "1rem auto",
  }
});

export default function ProfileOng() {
  const classes = useStyles();
  return (
    <section>
      <div className="containerProfileOng">
        <AboutOng nameOng="TETO Brasil" 
            infoOng="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, accusantium cupiditate incidunt laboriosam aspernatur. Placeat ut maxime facilis molestias pariatur!" 
            link="www.google.com.br"
            width="600"/>
        <Button variant="outline" className={classes.outlineBtn}>+Cadastrar Vaga</Button>
        <div className="vacancyCarousel">
          <h1>Vagas Abertas</h1>
          <CarouselVacancy />
        </div>
        <div className="ratings">
          <h1>Avaliações</h1>
          <Rating />
          <Rating />
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