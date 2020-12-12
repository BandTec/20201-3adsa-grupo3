import React from 'react';
import InputFile from '../InputFile/input-file';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import './about-volunteer.css';

<<<<<<< HEAD
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

function AboutVolunteer(props) {
    const classes = useStyles();

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

           <div className="vagasBox">
                <div className="titleBox">
                   <span><u>Vagas acessadas</u></span>
                </div>
                <div className="filaDeVagas">
                <scroll-container className={classes.root}>
                    <scroll-page alignItems="flex-start">
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Vacancy Ong" src={props.imgVagaOng}/>
                                </ListItemAvatar>
                                <ListItemText id="listItem"
                                    primary="Titulo da Vaga"
                                    secondary={
                                        <React.Fragment>
                                        {"Descrição vai ficar aqui, um props para trocar conforme a vaga"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                    </scroll-page>
                    <scroll-page alignItems="flex-start">
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText id="listItem"
                                    primary="Titulo da Vaga"
                                    secondary={
                                    <React.Fragment>
                                    {"Descrição vai ficar aqui, um props para trocar conforme a vaga"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>    
                    </scroll-page>
                    <scroll-page alignItems="flex-start">
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                </ListItemAvatar>
                                <ListItemText id="listItem"
                                    primary="Titulo da Vaga"
                                    secondary={
                                        <React.Fragment>
                                        {"Descrição vai ficar aqui, um props para trocar conforme a vaga"}
                                        </React.Fragment>
                                }
                                />
                            </ListItem>
                    </scroll-page>
                    <scroll-page alignItems="flex-start">
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Vacancy Ong" src={props.imgVagaOng}/>
                                </ListItemAvatar>
                                <ListItemText id="listItem"
                                    primary="Titulo da Vaga"
                                    secondary={
                                        <React.Fragment>
                                        {"Descrição vai ficar aqui, um props para trocar conforme a vaga"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                    </scroll-page>
                    <scroll-page alignItems="flex-start">
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText id="listItem"
                                    primary="Titulo da Vaga"
                                    secondary={
                                    <React.Fragment>
                                    {"Descrição vai ficar aqui, um props para trocar conforme a vaga"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>    
                    </scroll-page>
                    <scroll-page alignItems="flex-start">
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Vacancy Ong" src={props.imgVagaOng}/>
                                </ListItemAvatar>
                                <ListItemText id="listItem"
                                    primary="Titulo da Vaga"
                                    secondary={
                                        <React.Fragment>
                                        {"Descrição vai ficar aqui, um props para trocar conforme a vaga"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                    </scroll-page>
                    <scroll-page alignItems="flex-start">
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText id="listItem"
                                    primary="Titulo da Vaga"
                                    secondary={
                                    <React.Fragment>
                                    {"Descrição vai ficar aqui, um props para trocar conforme a vaga"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>    
                    </scroll-page>
                </scroll-container>
                </div>
           </div>
       </section>
    );
=======
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
>>>>>>> 98c8e5553ea9f8ff6351b76b14f30490ef1b4724
}

export default AboutVolunteer;
