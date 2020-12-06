import React from 'react';

import './about-volunteer.css';

function AboutVolunteer(props) {
    return (
       <section className="aboutVolunteer">
           
           <div className="imgVolunteerBox">
           <img width="210" height="280" src={props.imgVolunteer}></img>
           <label id="trocaFoto" for="file">Editar Perfil </label>
           <input type="file" id="file"></input>
           </div>
           <div className="infoVolunteer">
               <div className="infoVolunteerTitle"><u><b>{ props.nameVolunteer }</b></u></div>
               <div className="infoVolunteerText">
                    <div><span className="font-weight-500">Idade: </span> { props.ageVolunteer }</div>
                    <div><span className="font-weight-500">Profissão: </span> { props.professionVolunteer }</div>
                    <div><span className="font-weight-500">Escolaridade: </span> { props.schoolVolunteer }</div>
                    <div><span className="font-weight-500">Mora em: </span> { props.liveInVolunteer }</div>
               </div>
           </div>

           <div className="vagasBox">
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
           </div>
       </section>
    );
}

export default AboutVolunteer;
