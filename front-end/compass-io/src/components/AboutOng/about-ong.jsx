import React from 'react';
import './about-ong.css';

function AboutOng(props) {
    return (
       <section className="aboutOng">
           <div id="imgOng" width={props.width} height={props.height}></div>
           <div className="infoOng">
               <div className="infoOngTitle">{ props.nameOng }</div>
               <div className="infoOngText">{ props.infoOng }</div>
               <a className="infoOngUrl" href="">{ props.link }</a>
           </div>
       </section>
    );
}

export default AboutOng;
