import React from 'react';
import './image.css';

export default function Image(props) {
  return (
      <div>
          <img className="image" width={props.width} height={props.height} src={props.src}/>
      </div>
  );
}