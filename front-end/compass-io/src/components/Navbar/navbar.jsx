import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className="botoes">
                <a className="link">Seja voluntário</a>
                <a className="link">Projetos</a>
                <a className="link">Notícias</a>
                <a id="entrar" className="link botao">Entrar</a>
            </div>
        </div>
    );
}

export default Navbar;