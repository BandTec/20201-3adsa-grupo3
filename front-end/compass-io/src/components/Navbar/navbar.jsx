import React from 'react';
import './navbar.css';
import LogoCompassio from '../../assets/images/logo.jpg'

function Navbar() {
    return (
        <div className="navbar">
            {/* <div>
                <LogoCompassio></LogoCompassio>
            </div> */}
            {/* <LogoCompassio></LogoCompassio> */}
            {/* <div className="logo"></div> */}
            <span className="logo">
                <a href="/">
                <img src={LogoCompassio}/>
                </a>
            </span>
            <div className="botoes">
                <a className="link" href="#">Seja voluntário</a>
                <a className="link" href="#">Projetos</a>
                <a className="link" href="#">Notícias</a>
                <a disabled id="entrar" href="signin" className="link botao">Entrar</a>
            </div>
        </div>
    );
}

export default Navbar;
