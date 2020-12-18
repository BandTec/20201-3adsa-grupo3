import React from 'react';
import InputFile from '../InputFile/input-file';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import UsuarioFisicoService from '../../services/usuario-fisico-service';
import VagaService from '../../services/vaga-service';

import './about-volunteer.css';

class AboutVolunteer extends React.Component {

    state = {
        ultimasVagas: [{
            dados: {},
            foto: ''
        }]
    }

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.getLastAccessedVacancy();
        debugger
        let url = window.location.href;
        var res = url.split('3000');
        if (res[1] === undefined) {
            alert('página sem parâmetros.');
        }
        var parametros = res[1].split('/');
        console.log('Parametros encontrados:\n' + parametros);
        var idUsuario;
        idUsuario = parametros[1];
        sessionStorage["usuarioDaVez"] = idUsuario;
    }

    getLastAccessedVacancy = async () => {
        debugger
        let usuarioFisicoService = new UsuarioFisicoService();

        let url = window.location.href;
        var res = url.split('3000');
        if (res[1] === undefined) {
            alert('página sem parâmetros.');
        }
        var parametros = res[1].split('/');
        console.log('Parametros encontrados:\n' + parametros);
        var idUsuario;
        idUsuario = parametros[1];
        let userId = idUsuario;
        let userIdAsInt = parseInt(userId);

        let ultimasVagasAcessadas = await usuarioFisicoService.getUltimasVagas(userIdAsInt);
        let vagas = [];

        for (var i = 0; i < ultimasVagasAcessadas.data.length; i++) {
            let fotoVaga = '';
            try {
                fotoVaga = await new VagaService().getFoto(ultimasVagasAcessadas.data[i].id);
            } catch (error) {

            }
            vagas.push({
                dados: ultimasVagasAcessadas.data[i],
                foto: 'data:image/jpeg;base64,' + fotoVaga.data
            })
        }
        this.setState({ ultimasVagas: vagas });
    }



    classes = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: '36ch',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
    }));

    render() {
        return (
            <section name={this.props.name} className="width-100pg flex ">
                <div className="imgVolunteerBox grid width-20pg">
                    <img id={this.props.imgId} width="210" height="280" src={this.props.imgSrc}></img>
                    <div id="btnPhotoEdit" className="mg-t-16 width-250pg">
                        <InputFile className={sessionStorage.getItem("usuarioDaVez") % 2 == 1 ? "display-none" : ""} id="editarFoto" text="Editar foto" callBack={this.props.editImgVolunteer} />
                    </div>
                </div>

                <div className="infoVolunteer mg-l-16">
                    <div className="infoVolunteerTitle"><u><b>{this.props.nameVolunteer}</b></u></div>
                    <div className="infoVolunteerText">
                        <div><span className="font-weight-500">Idade: </span> {this.props.ageVolunteer}</div>
                        <div><span className="font-weight-500">Profissão: </span> {this.props.professionVolunteer}</div>
                        <div><span className="font-weight-500">Escolaridade: </span> {this.props.schoolVolunteer}</div>
                        <div><span className="font-weight-500">Mora em: </span> {this.props.liveInVolunteer}</div>
                    </div>
                </div>

                <div className="vagasBox">
                    <div className="titleBox">
                        <span><u>Vagas acessadas</u></span>
                    </div>
                    <div className="filaDeVagas overflow-y-scroll">
                        <scroll-container className={this.classes.root}>
                            {this.state.ultimasVagas.map(vaga => (
                                <scroll-page key={vaga.id} alignItems="flex-start">
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Vacancy Ong" src={vaga.foto} />
                                        </ListItemAvatar>
                                        <ListItemText id="listItem"
                                            primary={vaga.dados.titulo}
                                            secondary={
                                                <React.Fragment>
                                                    {vaga.dados.descricao}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                </scroll-page>
                            ))}
                        </scroll-container>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutVolunteer;
