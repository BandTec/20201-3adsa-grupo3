import React from 'react';
import './navbar.css';
import LogoCompassio from '../../assets/images/logo.jpg';
import { Icon, InlineIcon } from '@iconify/react';
import profileIcon from '@iconify/icons-gg/profile';

import AlertCard from '../../components/AlertCard/alert-card';
import AuthService from '../../services/auth-service';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            controle: {
                isLogado: false,
                message: ""
            },
            alerta: {
                message: '',
                severity: '',
                open: false
            }
        };
    }

    renderBotaoEntrar = () => {
        if (sessionStorage.getItem("userId") == "undefined" || sessionStorage.getItem("userId") == undefined) {
            this.setState({
                controle: {
                    isLogado: false,
                    message: "Entrar"
                }
            });
        } else {
            this.state.controle.isLogado = true;
            this.state.controle.message = "Sair";
            if (window.location.pathname == "/signin") {
                this.state.controle.isLogado = false;
                this.state.controle.message = "Entrar"
            }
        }
    }

    setandoUrl = () => {
        let url = window.location.href;
        var res = url.split('3000');
        if (res[1] === undefined) {
            alert('página sem parâmetros.');
        }
        var parametros = res[1].split('/');
        console.log('Parametros encontrados:\n' + parametros);
        var idUsuario = new Array();
        idUsuario = parametros[1];
        if (idUsuario == undefined || idUsuario == 'undefined') {
            return -1;
        } else {
            return idUsuario;
        }
    }

    sair = async () => {
        try {
            await new AuthService().logout();
        } catch (error) {
            let errorString = `${error}`;
            this.setState({
                message: errorString,
                severity: "error",
                open: true
            })
        }
    }

    componentDidMount() {
        this.renderBotaoEntrar();
    }

    fecharAlerta = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            alerta: {
                message: '',
                severity: '',
                open: false
            }
        })
    };

    render() {

        return (
            <div className="flex width-100pg mg-v-16">

                <AlertCard open={this.state.alerta.open} message={this.state.alerta.message} severity={this.state.alerta.severity} onClose={this.fecharAlerta} />

                <span className="width-40pg">
                    <a href={`http://localhost:3000/${this.setandoUrl()}`}>
                        <img src={LogoCompassio} />
                    </a>
                </span>

                <div className="flex width-80pg">
                    <a className="link relative bold fs-24p" href={`http://localhost:3000/${this.setandoUrl()}/signup`}>Seja voluntário</a>
                    <a className="link relative bold fs-24p" href={`http://localhost:3000/${this.setandoUrl()}/#comoFunciona`}>Como funciona</a>
                    <a className="link relative bold fs-24p" href={`http://localhost:3000/${this.setandoUrl()}/vacancies`}>Vagas</a>
                    <a disabled id="entrar" href={`http://localhost:3000/${this.setandoUrl()}/signin`}
                        className={this.state.isLogado ? "bg-color-yellow height-32p bold mg-t-16" : "link bold fs-24p botao"}>

                        {this.state.controle.message == "Entrar" ? "Entrar" :
                            <span onClick={this.sair} className="flex txtal-vertical-center">
                                <Icon className="" icon={profileIcon} style={{ fontSize: '32px' }} />
                                <div className=" mg-l-8 fs-24p">
                                    Sair
                                </div>
                            </span>
                        }
                    </a>
                </div>
            </div>
        );
    }
}
