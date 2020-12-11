import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import './combo-box.css';

export default class ComboBox extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    content: [],
    selectedItem: ''
  }

  classes = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 140,
      marginTop: 25,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  componentDidMount() {
    this.setContent();
  }

  setContent = () => {
    this.setState({content: this.props.content});
  }

  handleChange = (event) => {
    this.setState({selectedItem: event.target.value});
  };

  render() {
    return(
        <FormControl fullWidth={true} variant="outlined" className={this.classes.formControl} >
        <InputLabel id="tituloLabel">{this.props.labelTitle}</InputLabel>
        <Select
          labelId="tituloLabel"
          id="tituloSelect"
          name={this.props.name}
          value={this.state.selectedItem}
          onChange={this.handleChange}
          label={this.props.labelTitle}
          width={this.props.width}
        >
          {this.state.content.map(item => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
        </Select>
      </FormControl>
    );
  }
}