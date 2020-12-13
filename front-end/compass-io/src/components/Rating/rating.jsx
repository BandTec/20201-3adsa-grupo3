import React from 'react';
import './rating.css';

function Rating(props) {
    return (
        <div className="width-100pg mg-v-32">
            <div className={props.isVolunteerProfile ? 
                "display-block bg-color-gray-light height-280p width-100pg border border-rd-10 " : 
                "display-none"}>
                <div className="mg-l-16">
                    <h1 >Última vaga pleiteada</h1>
                    <div className="flex ">
                        <img width="140" height="140" src={props.imgVolunteer}></img>
                        <div className="mg-l-16">
                            <div className="fs-24p font-weight-500 mg-b-16">{ props.vacancyTitle }</div>
                            <div className="fs-16p txtal-justify">{ props.infoVacancy }</div>
                        </div>
                        <div className="mg-l-80 width-60pg mg-t-40">
                            <button className="height-56p mg-h-32 buttonProfile width-60pg font-weight-500 bg-color-blue">
                                <a href="/vacancy">
                                    <span className="font-weight-500 fs-24p">
                                        Ver vaga
                                    </span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={props.isOngProfile ?
                "display-block bg-color-gray-light height-320p width-100pg border border-rd-10 " :
                "display-none"}>
                <div className="mg-l-16">
                    <h1 >Candidaturas</h1>
                    <div className="flex ">
                        <img width="140" height="180" src={props.imgVolunteer}></img>
                        <div className="mg-l-16">
                            <div className="fs-24p"><u><b>{props.nameVolunteer}</b></u></div>
                            <div className="fs-16p mg-t-16">
                                <div><span className="font-weight-500">Idade: </span> {props.ageVolunteer}</div>
                                <div><span className="font-weight-500">Profissão: </span> {props.professionVolunteer}</div>
                                <div><span className="font-weight-500">Escolaridade: </span> {props.schoolVolunteer}</div>
                                <div><span className="font-weight-500">Mora em: </span> {props.liveInVolunteer}</div>
                            </div>
                        </div>
                        <div className="mg-l-80 width-60pg mg-t-40">

                            <button className="height-56p mg-h-32 buttonProfileOng width-20pg bg-color-green">
                                <span className="font-weight-500 fs-24p">
                                    Aprovar
                                </span>
                            </button>
                            <button className="height-56p mg-h-32 buttonProfileOng width-20pg font-weight-500 bg-color-red">
                                <span className="font-weight-500 fs-24p">
                                    Recusar
                                </span>
                             </button>
                            <button className="height-56p mg-h-32 buttonProfileOng width-20pg font-weight-500 bg-color-blue">
                                <span className="font-weight-500 fs-24p">
                                    Ver perfil
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;