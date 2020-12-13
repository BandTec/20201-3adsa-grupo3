import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Item, Caption } from 'react-bootstrap/Carousel';
import Slider from "react-slick";
// import AnimalImg from '../../assets/images/animal-img.jpg';
// import ChildImg from '../../assets/images/child-img.jpg';
// import DisabilityImg from '../../assets/images/disability-img.jpg';
// import ElderlyImg from '../../assets/images/elderly-img.jpg';
// import GardeningImg from '../../assets/images/gardening-img.jpg';
// import HumanRightsImg from '../../assets/images/human-rights-img.jpg';
// import NatureImg from '../../assets/images/nature-img.jpg';
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
    const response = await vagaService.getVagas();
    this.setState({ resposta: response.data });
    console.log(response);
    console.log(this.state.resposta);
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

      <div>

        <Slider id="slider" className={this.classes.slider} {...this.settings}>

          {this.state.resposta.map(vaga => (
              <CarouselCard key={vaga.idVaga} nameOng={vaga.fkUsuarioJuridico.nomeOng} title={vaga.titulo}
              description={vaga.descricao}
              location={`${vaga.fkEndereco.cidade} - ${vaga.fkEndereco.estado}, ${vaga.fkEndereco.bairro}`} schedule="1x por semana" />
          ))}

        </Slider>
      </div>

    );
  }
}