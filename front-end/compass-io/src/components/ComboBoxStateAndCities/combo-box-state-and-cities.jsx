import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import ConsultaSimplesService from '../../services/consulta-simples-service';

import './combo-box-state-and-cities.css';

export default class ComboBoxStateAndCities extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    states: [],
    cities: [],
    selectedState: '',
    selectedCity: ''
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
    this.getEstados();
  }

  handleChangeEstado = (event) => {
    this.setState({selectedState: event.target.value});
    this.getCidades(event.target.value);
  };

  handleChangeCidade = (event) => {
    this.setState({selectedCity: event.target.value});
  };

  getEstados = async () => {
    let estados = await new ConsultaSimplesService().getEstados();
    this.setState({ states: estados.data });
  }

  getCidades = async (estado) => {
    let cidades = await new ConsultaSimplesService().getCidadesByUF(estado);
    this.setState({ cities: cidades.data });
  }

  render() {
    return (
      <React.Fragment>
        <FormControl variant="outlined" className={this.classes.formControl} >
          <InputLabel id="tituloLabelEstado">Estados</InputLabel>
          <Select
            labelId="tituloLabelEstadoSelect"
            id="tituloSelectEstado"
            name={this.props.estadoName}
            value={this.state.selectedState}
            onChange={this.handleChangeEstado}
            label={this.props.labelTitle}
            width={this.props.width}
          >
            {this.state.states.map(estado => (
              <MenuItem key={estado.SIGLA_UF} value={estado.SIGLA_UF}>{estado.SIGLA_UF}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={this.classes.formControl} >
          <InputLabel id="tituloLabelCidade">Cidades</InputLabel>
          <Select
            labelId="tituloLabelCidadeSelect"
            id="tituloSelectCidade"
            name={this.props.cidadeName}
            value={this.state.selectedCity}
            onSelect={this.getCidades}
            onChange={this.handleChangeCidade}
            label="Cidades"
            width={this.props.width}
          >
            {this.state.cities.map(cidade => (
              <MenuItem key={cidade.NOME} value={cidade.NOME}>{cidade.NOME}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </React.Fragment>
    );
  }
}