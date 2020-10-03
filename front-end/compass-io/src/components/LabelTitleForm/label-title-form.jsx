import React from 'react';
import './label-title-form.css';

export default function LabelTitleForm(props) {
  return(
      <div>
          <label className="label-title">{props.title}</label>
      </div>
  );
}