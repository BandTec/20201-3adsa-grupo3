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
                <a className="link" href="www.google.com">Seja voluntário</a>
                <a className="link" href="www.google.com">Projetos</a>
                <a className="link" href="www.google.com">Notícias</a>
                <a disabled id="entrar" href="signin" className="link botao">Entrar</a>
            </div>
        </div>
    );
}

export default Navbar;
