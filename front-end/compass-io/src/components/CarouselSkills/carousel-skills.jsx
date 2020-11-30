import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Item, Caption } from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import CarouselVolunteerCard from '../../components/CarouselVolunteerCard/carousel-volunteer-card';
import languageIcon from '@iconify/icons-cil/language';
import hammerAndPick from '@iconify/icons-emojione-monotone/hammer-and-pick';
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
        margintop: "1rem",
        marginleft: "1rem",
        height: "12rem",
        width: "15.8rem",
        backgroundcolor: "#158723"

      },
      carouselContainer: {
        margin: "0 0",
        width: "100%"
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
  <div className={classes.carouselContainer} style={{
    border: "1px solid black",
    borderRadius:"1rem",
    height: "17.5rem",
    width: "72.5rem",
    backgroundColor: "#FAFAFA"
  }}>
    <Slider className={classes.slider} {...settings}>
      <div className={classes.carouselImgContainer}>
      <CarouselVolunteerCard isIcon icon={languageIcon} nameCard="Inglês - Fluente"/>
      </div>
      <div className={classes.carouselImgContainer}>
      <CarouselVolunteerCard isIcon icon={languageIcon} nameCard="Curso de Primeiros Socorros"/>
      </div>
      <div className={classes.carouselImgContainer}>
      <CarouselVolunteerCard isIcon icon={hammerAndPick} nameCard="Organização da Quermesa da Igreja Matriz"/>
      </div>
      <div className={classes.carouselImgContainer}>
          <CarouselVolunteerCard isIcon icon={hammerAndPick} nameCard="Habilidade - tocar violão"/>
      </div>
      </Slider>
  </div>

);
};