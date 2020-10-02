import React from 'react';
import './button.css';

export default function Button(props) {
  return (
    <button className='button'>{props.text}</button>
  );
};