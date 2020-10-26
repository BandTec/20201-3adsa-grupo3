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

  return(
    <FormControl variant="outlined" className={classes.formControl} >
    <InputLabel id="tituloLabel">{props.labelTitle}</InputLabel>
    <Select
      labelId="tituloLabel"
      id="tituloLabel"
      value={cidade}
      onChange={handleChange}
      label={props.labelTitle}
      width={props.width}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>{props.nomeItem1}</MenuItem>
      <MenuItem value={20}>{props.nomeItem2}</MenuItem>
      <MenuItem value={30}>{props.nomeItem3}</MenuItem>
      <MenuItem value={40}>{props.nomeItem4}</MenuItem>
      <MenuItem value={50}>{props.nomeItem5}</MenuItem>
    </Select>
  </FormControl>
  );
}