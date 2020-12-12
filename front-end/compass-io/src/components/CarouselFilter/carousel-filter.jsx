import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Item, Caption } from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import AnimalImg from '../../assets/images/animal-img.jpg';
import ChildImg from '../../assets/images/child-img.jpg';
import DisabilityImg from '../../assets/images/disability-img.jpg';
import ElderlyImg from '../../assets/images/elderly-img.jpg';
import GardeningImg from '../../assets/images/gardening-img.jpg';
import HumanRightsImg from '../../assets/images/human-rights-img.jpg';
import NatureImg from '../../assets/images/nature-img.jpg';
import { makeStyles } from '@material-ui/core/styles';
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
        marginRight: "3.5rem",
        background: "#ddd" 
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
        marginLeft: "0rem",
        // size: "5rem"
        background: "#ddd"
      }}
      onClick={onClick}
    />
  );
}

const useStyles = makeStyles({
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
        margin: "0 0",
        width: "105%"
        // width: "10rem"
      },
      textImg:{
        color: "#fcfcfc",
        fontSize: "1.25rem",
        position: "fixed",
        marginTop: "23rem",
        marginLeft: "1rem",
        fontWeight: 700,
        // textStrokeWidth: "1px",
        // textStrokeColor: "#000",
        width: "40rem",
        // marginTop: "28rem"
        // alignContent: "center",
        // textAlign: "end"
        // marginRight: "5rem",
        // marginLeft: "6rem",
        // marginTop: "22rem"
    
        // marginTop: "50%"
        // paddingBottom: "2rem"
    
      }
});



// import { Container } from './styles';

export default function CarouselFilter() {

  function vacancyFilter(){
    window.location.href="vacancies";
  }

  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    slidesToShow: 4,
    
}

return (
  <div className={classes.carouselContainer}>
    <Slider className={classes.slider} {...settings}>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Animais</span>
        <a href="vacancies"><img className="filter" src={AnimalImg} className={classes.carouselImg} /></a> 
      </div>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Crianças</span>
        <a href="vacancies"><img src={ChildImg} className={classes.carouselImg} /></a>
      </div>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Pessoas com Deficiência</span>
        <a href=""><img src={DisabilityImg} className={classes.carouselImg} /></a>
      </div>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Idosos</span>
        <a href="vacancies"><img src={ElderlyImg} className={classes.carouselImg} /></a>  
      </div>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Lares</span>
        <a href="vacancies"><img src={GardeningImg} className={classes.carouselImg} /></a>
      </div>
      <div className={classes.carouselImgContainer}>
        <span className={classes.textImg}>Direitos Civis</span>
        <a href="vacancies"><img src={HumanRightsImg} className={classes.carouselImg} /></a>
      </div>
      <div className={classes.carouselImgContainer}>
          <span className={classes.textImg}>Meio Ambiente</span>
          <a href="vacancies"><img src={NatureImg} className={classes.carouselImg} /></a>
      </div>
    </Slider>
  </div>

);
};