import React, { Component } from 'react';
import Slider from "react-slick";
import CarouselCard from '../CarouselCard/carousel-card';
import { makeStyles } from '@material-ui/core/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VagaService from '../../services/vaga-service';

export default class CarouselVacancy extends React.Component {
  state = {
    resposta: []
  };

  componentDidMount() {
    this.loadVagas();
  }

  loadVagas = async () => {
    debugger
    let vagaService = new VagaService();
    const vagas = await vagaService.getVagasByFkOng(parseInt(sessionStorage.getItem("userId")));
    
    let vetorResposta = [];
    try {
      for (var i = 0; i < vagas.data.length; i++) {
        const fotoVaga = '';
        try {
          fotoVaga = await vagaService.getFoto(vagas.data[i].id);
        } catch (error) {
  
        }
        vetorResposta.push({
          vaga: vagas.data[i],
          foto: "data:image/png;base64,"+fotoVaga.data
        })
      }
    } catch (error) {
      
    }
    this.setState({resposta: vetorResposta});
  }

  SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          zIndex: 1,
          marginRight: "3.5rem",
          background: "#ddd"
        }}
        onClick={onClick}
      />
    );
  }

  SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          zIndex: 1,
          marginLeft: "0rem",
          // size: "5rem"
          background: "#ddd"
        }}
        onClick={onClick}
      />
    );
  }

  classes = makeStyles({
    // carouselImgContainer: {
    //     height: "30rem",
    //   },
    carouselImg: {
      height: "25rem",
      // width: "90%",
      // marginRight: "0rem",
      justifyContent: "space-between"

    },
    carouselContainer: {
      margin: "0 0 0 2rem",
      // width: "100%"
      width: "77rem"
    },
    textImg: {
      color: "#fcfcfc",
      fontSize: "1.25rem",
      position: "fixed",
      marginTop: "23rem",
      marginLeft: "1rem",
      fontWeight: 700,
      // textStrokeWidth: "1px",
      // textStrokeColor: "#000",
      width: "40rem"
      // marginTop: "28rem"
      // alignContent: "center",
      // textAlign: "end"
      // marginRight: "5rem",
      // marginLeft: "6rem",
      // marginTop: "22rem"

      // marginTop: "50%"
      // paddingBottom: "2rem"

    }
  })

  settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <this.SamplePrevArrow />,
    nextArrow: <this.SampleNextArrow />,
    slidesToShow: 3
  };

  render() {
    return (

      <div style={{marginLeft:"3rem"}}>

        <Slider id="slider" className={this.classes.slider} {...this.settings}>

          {this.state.resposta.map(res => (
              <CarouselCard key={res.vaga.idVaga} imgSrc={res.foto}
              nameOng={res.vaga.fkUsuarioJuridico.nomeOng} title={res.vaga.titulo}
              description={res.vaga.descricao.toString().length > 130 ? res.vaga.descricao.toString().substring(0, 130) + '...' : res.vaga.descricao}
              location={`${res.vaga.fkEndereco.cidade} - ${res.vaga.fkEndereco.estado}, ${res.vaga.fkEndereco.bairro}`} schedule="1x por semana" />
          ))}

        </Slider>
      </div>

    );
  }
}