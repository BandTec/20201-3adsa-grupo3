import React from 'react';
import './about-ong.css';

function AboutOng(props) {
    return (
       <section name={props.name} className="aboutOng">
           <img id={props.imgId} width={props.width} height={props.height} src={props.imgSrc}/>
           <div className="infoOng">
               <div className="infoOngTitle">{ props.nameOng }</div>
               <div className="infoOngText">{ props.infoOng }</div>
               <a className="infoOngUrl" href="">{ props.link }</a>
           </div>
       </section>
    );
}

export default AboutOng;
