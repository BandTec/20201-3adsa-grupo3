import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Item, Caption } from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import AnimalImg from '../../assets/images/animal-img.jpg';
import ChildImg from '../../assets/images/child-img.jpg';
import DisabilityImg from '../../assets/images/disability-img.jpg';
import { makeStyles } from '@material-ui/core/styles';
import CarouselVolunteerCard from '../../components/CarouselVolunteerCard/carousel-volunteer-card';
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
  <div className={classes.carouselContainer}>
    <Slider className={classes.slider} {...settings}>
      <div className={classes.carouselImgContainer}>
      <CarouselVolunteerCard isImage nameCard="TETO - Brasil"/>
      </div>
      <div className={classes.carouselImgContainer}>
      <CarouselVolunteerCard isImage nameCard="Sonhar Acordado"/>
      </div>
      <div className={classes.carouselImgContainer}>
      <CarouselVolunteerCard isImage nameCard="ProMigra"/>
      </div>
      <div className={classes.carouselImgContainer}>
          <CarouselVolunteerCard isImage nameCard="ABEUNI"/>
      </div>
      </Slider>
  </div>

);
};