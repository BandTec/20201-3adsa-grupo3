import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className="botoes">
                <a className="link" href="www.google.com">Seja voluntário</a>
                <a className="link" href="www.google.com">Projetos</a>
                <a className="link" href="www.google.com">Notícias</a>
                <a disabled id="entrar" className="link botao">Entrar</a>
            </div>
        </div>
    );
}

export default Navbar;
