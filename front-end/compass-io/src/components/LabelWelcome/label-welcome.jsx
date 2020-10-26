import React from 'react';
import './label-welcome.css';

export default function LabelWelcome(props) {
  return(
      <div className="labelWelcome">
          <label className="title">{props.labelTitle}</label>
          <br/>
          <label className="subtitulo">{props.labelText}</label>
      </div>
  );
}