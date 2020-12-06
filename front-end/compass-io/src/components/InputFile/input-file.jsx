import React from 'react';

import './input-file.css';

function InputFile(props) {
  return(
      <React.Fragment>
        <label className="inputFile" for={props.id}>{props.text}</label>
        <input type="file" id={props.id} onChange={props.callBack}></input>
      </React.Fragment>
  )
}

export default InputFile;