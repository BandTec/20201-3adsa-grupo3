import React from 'react';
import './navbar.css';
import LogoCompassio from '../../assets/images/logo.jpg'

function Navbar(props) {

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
                <a className="link" href="/signup">Seja voluntário</a>
                {/*<button className="link" onClick={props.direciona}>Como funciona</button>*/}
                <a className="link" onClick={props.position} href={props.directionURL} onChange={props.changes}>Como funciona</a>
                <a className="link" href="vacancies">Vagas</a>
                <a disabled id="entrar" href="signin" className="link botao">Entrar</a>
            </div>
        </div>
    );
}

export default Navbar;
