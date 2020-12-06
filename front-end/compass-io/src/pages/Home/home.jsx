import React from 'react';
// import Button from '../../components/Button/button'
import Navbar from '../../components/Navbar/navbar';
import CardHome from '../../components/CardHome/card-home';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BlueBanner from '../../components/BlueBanner/blue-banner';
import GrayBanner from '../../components/GrayBanner/gray-banner';
import CarouselMain from '../../components/CarouselMain/carousel-main';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import CarouselFilter from '../../components/CarouselFilter/carousel-filter';
import Footer from '../../components/Footer/footer'

const useStyles = makeStyles({
  outlineBtn: {
    width: "20%",
    border: "2.5px solid #1975FF",
    color: "#1975FF",
    fontWeight: 600,
    margin: "1rem auto",
    left: "40%",
    position: "relative"
  },
  labelWelcome: {
    width: "60%"
  },
  btnVerVagas:{
    color: "#fcfcfc",
    backgroundColor: "#1975FF",
    height: "4rem",
    margin: "auto 0 auto 0",
    fontSize: "1.5rem",
    borderRadius: "10px"
  },
  bannerVerVagas:{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
    marginBottom: "1rem",

  },
});

window.onload = () => {};

export default function Home() {
  function ClickVagas(){
    window.location.href="http://localhost:3000/vacancies";
  }

  function ClickScroll(){
    window.scrollTo(0, 1560);
  }

  const classes = useStyles();
  return (
    <div>
      <CarouselMain></CarouselMain>
      <div className={classes.bannerVerVagas}>
        <div className={classes.labelWelcome}>
            <label className="title">Ajude uma causa que seja do seu interesse!</label>
            <br/>
            <label className="subtitulo">Encontre facilmente aqui, instituições que lutem nas causas que você quer ajudar!</label>
        </div>
        <Button size="large" className={classes.btnVerVagas} variant="contained" onClick={ClickVagas}>Ver vagas</Button>
      </div>
      <CarouselFilter></CarouselFilter>
      {/* <LabelWelcome className="labelWelcome"
        labelTitle="Ajude uma causa que seja do seu interesse!" 
        labelText="Encontre facilmente aqui, instituições que lutem nas causas que você quer ajudar!"></LabelWelcome> */}
      <BlueBanner></BlueBanner>
      <CardHome id="comoFunciona"/>
      <Button variant="outline" className={classes.outlineBtn} onClick={ClickVagas}>Ache aqui a vaga<br />ideal para você!</Button>
      <GrayBanner id="locationTag"></GrayBanner>
    </div>
  );
};