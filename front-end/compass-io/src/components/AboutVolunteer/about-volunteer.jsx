import React from 'react';
import InputFile from '../InputFile/input-file';

import './about-volunteer.css';

import UsuarioFisicoService from '../../services/usuario-fisico-service';
import VagaService from '../../services/vaga-service';

async function getLastAccessedVacancy() {
    let usuarioFisicoService = new UsuarioFisicoService();

    let userId = sessionStorage["userId"];
    let userIdAsInt = parseInt(userId);

    debugger

    let ultimasVagas = await usuarioFisicoService.getUltimasVagas(userIdAsInt);
    let containerVagas = document.getElementsByClassName("vagasBox")[0];

    for (var i = 0; i < ultimasVagas.data.length; i++) {
        let fotoVaga = await new VagaService().getFoto(ultimasVagas.data[i].id);
        containerVagas.innerHTML += `<a href=""><img width="60" height="70" src="data:image/jpeg;base64,${fotoVaga.data}"></img></a>`;
    }
}

class AboutVolunteer extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        getLastAccessedVacancy();
    }

    render() {
        return (
            <section className="width-100pg flex ">
     
                {/* <div className="grid">
                    <img width="210" height="280" src={props.imgVolunteer}></img>
                    <InputFile className="width-100pg" id="editarFoto" text="Editar foto" callBack={props.editImgVolunteer}/>    
                </div> */}
                
                <div className="imgVolunteerBox grid">
                     <img id={this.props.imgId} width="210" height="280" src={this.props.imgSrc}></img>
                     <InputFile className="" id="editarFoto" text="Editar foto" callBack={this.props.editImgVolunteer}/>
                </div>
                <div className="infoVolunteer mg-l-16">
                    <div className="infoVolunteerTitle"><u><b>{ this.props.nameVolunteer }</b></u></div>
                    <div className="infoVolunteerText">
                         <div><span className="font-weight-500">Idade: </span> { this.props.ageVolunteer }</div>
                         <div><span className="font-weight-500">Profissão: </span> { this.props.professionVolunteer }</div>
                         <div><span className="font-weight-500">Escolaridade: </span> { this.props.schoolVolunteer }</div>
                         <div><span className="font-weight-500">Mora em: </span> { this.props.liveInVolunteer }</div>
                    </div>
                </div>
     
                <div className="vagasBox">
                    <div>
                        <span>Vagas acessadas</span>
                    </div>
                </div>
            </section>
         );
    }
}

export default AboutVolunteer;
