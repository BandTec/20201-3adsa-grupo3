import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import './combo-box.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 140,
      marginTop: 25,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

export default function ComboBox(props) {
  const classes = useStyles();
  const [cidade, setCidade] = React.useState('');

  const handleChange = (event) => {
    setCidade(event.target.value);
  };

  const items = [];
  let estados = JSON.parse(props.menuItems)

  for (let item of estados) {
    items.push(<MenuItem value={item}/>)
  }

  return(
    <FormControl variant="outlined" className={classes.formControl} >
    <InputLabel id="tituloLabel">{props.labelTitle}</InputLabel>
    <Select
      labelId="tituloLabel"
      id="tituloSelect"
      name={props.name}
      value={cidade}
      onChange={handleChange}
      label={props.labelTitle}
      width={props.width}
    >
      {items}
    </Select>
  </FormControl>
  );
}