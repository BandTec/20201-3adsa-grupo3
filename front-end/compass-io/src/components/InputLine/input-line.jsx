import React from 'react';
import './input-line.css';
import TextField from '@material-ui/core/TextField';

export default function InputLine(props) {
  return(
    <div>
      <TextField name={props.name} InputLabelProps={{ shrink: true }} color="primary" className="inputLine" id={props.id} type={props.type} label={props.title} placeholder={props.placeholder} fullWidth/>
    </div>
  );
}
