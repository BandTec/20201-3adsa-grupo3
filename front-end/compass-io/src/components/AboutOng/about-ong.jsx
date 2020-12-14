import React from 'react';
import './about-ong.css';
import InputFile from '../InputFile/input-file';

function AboutOng(props) {
    return (
       <section name={props.name} className="aboutOng">
            <div className="imgVolunteerBox grid width-20pg">
                <img id={props.imgId} width="210" height="280" src={props.imgSrc}></img>
                <div id="btnPhotoOngEdit" className="mg-t-16 width-250pg">
                    <InputFile className="" id="editarFoto" text="Editar foto" callBack={props.editImgOng} />
                </div>
            </div>
           <div className="infoOng">
               <div className="infoOngTitle">{ props.nameOng }</div>
               <div className="infoOngText">{ props.infoOng }</div>
               <a className="infoOngUrl" href="">{ props.link }</a>
           </div>
       </section>
    );
}

export default AboutOng;
