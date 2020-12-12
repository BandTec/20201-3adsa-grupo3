import React from 'react';

import './input-file.css';

function InputFile(props) {
  return(
      <React.Fragment>
        {/* <div className="center-v-h "> */}
          <label className="btnPhoto mg-t-24 pd-t-16 fs-24 bg-color-blue width-35pg height-40p mg-r-16 font-color-white border-rd-5 txtal-center" 
            for={props.id}>{props.text}</label>
        {/* </div> */}
        <input type="file" id={props.id} onChange={props.callBack}></input>
      </React.Fragment>
  )
}

export default InputFile;