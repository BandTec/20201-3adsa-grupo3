import React from 'react';
import './label-text.css';

export default function LabelText(props) {
  return(
      <div className="labelText">
          <label className="main">{props.labelMain}</label>
          <br/>
          <label className="subtitulo">{props.labelSub}</label>
      </div>
  );
}