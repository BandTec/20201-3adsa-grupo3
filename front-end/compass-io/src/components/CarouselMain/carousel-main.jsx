import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Item, Caption } from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import BlackLivesImg from '../../assets/images/black-power-image.jpg';
import CharityTruckImg from '../../assets/images/charity-truck.jpg';
import DonationImg from '../../assets/images/donation-image.jpg';
import HandsHeartImg from '../../assets/images/hand-heart.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../Image/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        zIndex: 1,
        marginRight: "2rem",
        // background: "red" 
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        zIndex: 1,
        marginLeft: "2rem",
        // size: "5rem"
        // background: "red"
      }}
      onClick={onClick}
    />
  );
}

const useStyles = makeStyles({
  // slider: {
  //   margin: "0 -7rem"
  // },
  carouselImgContainer: {
    height: "35rem"
  },
  carouselImg: {
    height: "40rem",
    width: "100%",
    // filter: "brightness(80%)"
  },
  carouselContainer: {
    margin: "0 -6rem",
    // width: "10rem"
  },
  textImg:{
    color: "#fcfcfc",
    fontSize: "2.5rem",
    position: "fixed",
    marginTop: "28rem",
    marginLeft: "5rem",
    fontWeight: 700,
    textStrokeWidth: "1px",
    textStrokeColor: "#000",
    width: "40rem",

    // marginTop: "50%"
    // paddingBottom: "2rem"

  }
});



// import { Container } from './styles';

export default function CarouselMain() {
  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    slidesToShow: 1,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          zIndex: 1
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
          position: "absolute"
        }}
      >
        {i + 1}
      </div>
    )
}

return (
  <div className={classes.carouselContainer}>
    <Slider className={classes.slider} {...settings}>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Ajude em lutas que você acredita!</span>
        <img src={BlackLivesImg} className={classes.carouselImg} />
      </div>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Você pode encontrar diversas formas de ajudar.</span>
        <img src={CharityTruckImg} className={classes.carouselImg} />
      </div>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Encontre os pontos de coleta para doações mais próximos.</span>
        <img src={DonationImg} className={classes.carouselImg} />
      </div>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Ajudando os outros, você transforma o mundo!</span>
        <img src={HandsHeartImg} className={classes.carouselImg} />
      </div>
    </Slider>
  </div>

);
};