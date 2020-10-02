import React from 'react';
import './label-welcome.css';

export default function LabelWelcome(props) {
  return(
      <div>
          <label className="bem-vindo">Bem vindo ao Compass.io</label>
          <br/>
          <label className="subtitulo">{props.labelText}</label>
      </div>
  );
}