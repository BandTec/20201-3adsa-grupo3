import React from 'react';
import './navbar.css';
import LogoCompassio from '../../assets/images/logo.jpg';
import { Icon, InlineIcon } from '@iconify/react';
import profileIcon from '@iconify/icons-gg/profile';


export default class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogado: false,
            message: ""
        }
    }

    teste = () => {
        if (sessionStorage.getItem("userId") == undefined) {
            this.setState({
                isLogado: false,
                message: "Entrar"
            });
        } else {
            this.state.isLogado = true;
            this.state.message =
                <span className="flex txtal-vertical-center">
                    <Icon className="" icon={profileIcon} style={{ fontSize: '32px' }} />
                    <div className=" mg-l-8 fs-24p">
                        Sair
                    </div>
                </span>;
            if (window.location.pathname == "/signin") {
                this.state.isLogado = false;
                this.state.message = "Entrar"
            }
        }
    }

    componentDidMount() {
        this.teste();
    }

    render() {

        return (
            <div className="flex width-100pg mg-v-16">
                <span className="width-40pg">
                    <a href="/">
                        <img src={LogoCompassio} />
                    </a>
                </span>

                <div className="flex width-80pg">
                    <a className="link relative bold fs-24p" href="/signup">Seja voluntário</a>
                    <a className="link relative bold fs-24p" href="/#comoFunciona">Como funciona</a>
                    <a className="link relative bold fs-24p" href="vacancies">Vagas</a>
                    <a disabled id="entrar" href="http://localhost:3000/signin"
                        className={this.state.isLogado ? "bg-color-yellow height-32p bold mg-t-16" : "link bold fs-24p botao"}>{this.state.message}</a>
                </div>
            </div>
        );
    }
}

