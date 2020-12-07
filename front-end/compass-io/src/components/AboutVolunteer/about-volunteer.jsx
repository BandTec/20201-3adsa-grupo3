import React from 'react';
import InputFile from '../InputFile/input-file';

import './about-volunteer.css';

function AboutVolunteer(props) {
    return (
       <section className="width-100pg flex ">

           {/* <div className="grid">
               <img width="210" height="280" src={props.imgVolunteer}></img>
               <InputFile className="width-100pg" id="editarFoto" text="Editar foto" callBack={props.editImgVolunteer}/>    
           </div> */}
           
           <div className="imgVolunteerBox grid">
                <img id={props.imgId} width="210" height="280" src={props.imgSrc}></img>
                <InputFile className="" id="editarFoto" text="Editar foto" callBack={props.editImgVolunteer}/>
           </div>
           <div className="infoVolunteer mg-l-16">
               <div className="infoVolunteerTitle"><u><b>{ props.nameVolunteer }</b></u></div>
               <div className="infoVolunteerText">
                    <div><span className="font-weight-500">Idade: </span> { props.ageVolunteer }</div>
                    <div><span className="font-weight-500">Profissão: </span> { props.professionVolunteer }</div>
                    <div><span className="font-weight-500">Escolaridade: </span> { props.schoolVolunteer }</div>
                    <div><span className="font-weight-500">Mora em: </span> { props.liveInVolunteer }</div>
               </div>
           </div>

           {/* <div className="vagasBox">
               <div>
                   <span>Vagas acessadas</span>
               </div>
               <a href="https://www.google.com/"><img width="60" height="70" src={props.imgVolunteer}></img></a>
               <a href="https://www.google.com/"><img width="60" height="70" src={props.imgVolunteer}></img></a>
               <a href="https://www.google.com/"><img width="60" height="70" src={props.imgVolunteer}></img></a>
               <a href="https://www.google.com/"><img width="60" height="70" src={props.imgVolunteer}></img></a>
               <a href="https://www.google.com/"><img width="60" height="70" src={props.imgVolunteer}></img></a>
               <a href="https://www.google.com/"><img width="60" height="70" src={props.imgVolunteer}></img></a>
               <a href="https://www.google.com/"><img width="60" height="70" src={props.imgVolunteer}></img></a>
               <a href="https://www.google.com/"><img width="60" height="70" src={props.imgVolunteer}></img></a>
               <a href="https://www.google.com/"><img width="60" height="70" src={props.imgVolunteer}></img></a>
           </div> */}
       </section>
    );
}

export default AboutVolunteer;
