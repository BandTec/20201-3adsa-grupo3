import React from 'react';
import './icon-banner.css';


export default function IconBanner(props) {
  return(
    <span className="iconBanner">
        <div className="center">{props.icon}</div>
        <div className="text center">{props.text}</div>
        <div className="subText center">{props.subtext}</div>
          {/* <TextField id="inputLine" type={props.type} label={props.title} placeholder={props.placeholder} fullWidth/> */}
    </span>
  );
}