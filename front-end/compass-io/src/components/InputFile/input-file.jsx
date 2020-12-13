import React from 'react';

import './input-file.css';

function InputFile(props) {
  return(
      <React.Fragment>
        {/* <div className="center-v-h "> */}
          <label className="btnPhoto pd-t-8 fs-24 bg-color-blue width-30pg pd-b-8 txtal-center height-40p mg-r-16 font-color-white border-rd-5 center" 
            for={props.id}>{props.text}</label>
        {/* </div> */}
        <input type="file" id={props.id} onChange={props.callBack}></input>
      </React.Fragment>
  )
}

export default InputFile;