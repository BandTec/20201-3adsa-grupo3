import React from 'react';
import './input-line.css';

export default function InputLine(props) {
  return(
      <div>
          <label className="input-label">{props.title}</label>
          <br/>
            <input type="text" type={props.type} placeholder={props.placeholder}/>
      </div>
  );
}