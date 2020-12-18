import React, { Component, useState } from 'react';
import CardVacancy from '../../components/CardVacancy/card-vacancy';
import Pagination from '@material-ui/lab/Pagination';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { fade, makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer'

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import SearchField from "react-search-field";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import VagaService from '../../services/vaga-service';

import './vacancies.css';

export default class Vacancies extends React.Component {

  state = {
    resposta: [],
    open: false,
    openLocation: false,
    causas: {
      animais: false,
      Crianças: false,
      pcd: false,
      idosos: false,
      direitosCivis: false,
      meioAmbiente: false
    },
    stateLocation: {
      AC: false,
      AL: false,
      AP: false,
      AM: false,
      BA: false,
      CE: false,
      DF: false,
      ES: false,
      GO: false,
      MA: false,
      MT: false,
      MS: false,
      MG: false,
      PA: false,
      PB: false,
      PR: false,
      PE: false,
      PI: false,
      RJ: false,
      RN: false,
      RS: false,
      RO: false,
      RR: false,
      SC: false,
      SP: false,
      SE: false,
      TO: false,
      DF: false
    },
    filtro: {
      estado: null,
      causa: null
    },
    exibir: []
  }

  getVagas = async () => {
    let response = await new VagaService().getVagas();
    console.log(response);
    this.setState({ resposta: response.data });
    this.setState({ exibir: response.data });
  }

  componentDidMount() {
    //this.getVagas();
    this.getFotos();
  }

  setarIdvaga(id) {
    sessionStorage.setItem("idVaga", id);
  }

  renderExibicao = () => {
    let vagasFiltradas = [];
    if (this.state.filtro.causa != null && this.state.filtro.estado != null) {
      {
        this.state.exibir.forEach(vaga => {
          if (vaga.vaga.fkEndereco.estado == this.state.filtro.estado && vaga.vaga.causa == this.state.filtro.causa) {
            vagasFiltradas.push(vaga);
          }
        })
      }
    } else if (this.state.filtro.causa != null) {
      {
        this.state.exibir.forEach(vaga => {
          if (vaga.vaga.causa == this.state.filtro.causa) {
            vagasFiltradas.push(vaga);
          }
        })
      }
    } else if (this.state.filtro.estado != null) {
      {
        this.state.exibir.forEach(vaga => {
          if (vaga.vaga.fkEndereco.estado == this.state.filtro.estado) {
            vagasFiltradas.push(vaga);
          }
        })
      }
    } else if (this.state.filtro.causa == null && this.state.filtro.estado == null) {
      {
        debugger
        this.state.exibir.forEach(vaga => {
          vagasFiltradas.push(vaga);
        })
      }
    }
    this.setState({ exibir: vagasFiltradas });
    console.log(this.state.exibir);
  }

  getFotos = async () => {
    debugger
    let vagaService = new VagaService()
    let vagas = await vagaService.getVagas();
    let vagasComFoto = [];
    for (var i = 0; i < vagas.data.length; i++) {
      let fotoBase64 = ''
      try {
        let fotoResponse = await vagaService.getFoto(vagas.data[i].id);
        fotoBase64 = "data:image/png;base64," + fotoResponse.data;
      } catch (error) { }
      vagasComFoto.push(
        {
          vaga: vagas.data[i],
          foto: fotoBase64
        }
      );
    }
    this.setState({ exibir: vagasComFoto });
  }

  render() {

    const handleClick = () => {
      this.setState({ open: ((prev) => !prev) });
    };

    const handleClickAway = () => {
      this.setState({ open: false });
    };

    const classesForm = makeStyles((theme) => ({
      root: {
        position: 'relative',

      },
      dropdownCauses: {
        position: 'absolute',
        top: 35,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid #fff',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        width: '1000%'
      },
      dropdownLocation: {
        position: 'absolute',
        top: 35,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid #fff',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        width: '500%'
      },

      rootForm: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(3),
        display: 'flex'
      },

      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));

    const classes = makeStyles((theme) => ({
      root: {
        position: 'relative',

      },
      dropdownCauses: {
        position: 'absolute',
        top: 35,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid #fff',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        width: '1000%'
      },
      dropdownLocation: {
        position: 'absolute',
        top: 35,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid #fff',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        width: '500%'
      },

      rootForm: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(3),
        display: 'flex'
      },

      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));


    const handleChange = (event) => {
      this.setState({ causas: { [event.target.name]: event.target.checked } });
      this.setState({
        filtro: {
          estado: this.state.filtro.estado,
          causa: event.target.name
        }
      });
    };

    const classesLocation = makeStyles((theme) => ({
      root: {
        position: 'relative',

      },
      dropdownCauses: {
        position: 'absolute',
        top: 35,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid #fff',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        width: '1000%'
      },
      dropdownLocation: {
        position: 'absolute',
        top: 35,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid #fff',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        width: '100%'
      },

      rootForm: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(3),
        display: 'flex'
      },

      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));

    const handleClickLocation = () => {
      this.setState({ openLocation: ((prev) => !prev) });
    };

    const handleClickAwayLocation = () => {
      this.setState({ openLocation: (false) });
    };

    const classesFormLocation = makeStyles((theme) => ({
      root: {
        position: 'relative',

      },
      dropdownCauses: {
        position: 'absolute',
        top: 35,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid #fff',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        width: '50%'
      },
      dropdownLocation: {
        position: 'absolute',
        top: 35,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid #fff',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        width: '50%'
      },

      rootForm: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(3),
        display: 'flex'
      },

      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));

    const handleChangeLocation = (event) => {
      this.setState({ stateLocation: { [event.target.name]: event.target.checked } });
      this.setState({
        filtro: {
          estado: event.target.name,
          causa: this.state.filtro.causa
        }
      });
    };

    function setUrl() {
      let url = window.location.href;
        var res = url.split('3000');
        if (res[1] === undefined) {
            alert('página sem parâmetros.');
        }
        var parametros = res[1].split('/');
        console.log('Parametros encontrados:\n' + parametros);
        var idUsuario = new Array();
        idUsuario = parametros[1];
        if (idUsuario == undefined || idUsuario == 'undefined') {
            return -1;
        } else {
            return idUsuario;
        }
    }

    return (
      <section>
        <div className="mg-b-16 border-b pd-b-16 flex justcon-sb">
          <div className="flex justcon-sb width-100pg">
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className={classes.root}>
                <button type="button" className="bg-color-blue font-color-white border-rd-10 width-250pg height-40p fs-16p" onClick={handleClick}>
                  Causas
                </button>
                {this.state.open ? (
                  <div className={classes.dropdownCauses}>

                    <FormControl component="fieldset" className={classesForm.formControl}>
                      <FormLabel component="legend">Filtrar por causa</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox color="primary" color="primary" checked={this.state.causas.animais} onChange={handleChange} name="animais" />}
                          label="Animais"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.causas.Crianças} onChange={handleChange} name="Crianças" />}
                          label="Crianças"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.causas.pcd} onChange={handleChange} name="pcd" />}
                          label="Pessoas com Deficiência"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.causas.idosos} onChange={handleChange} name="idosos" />}
                          label="Idosos"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.causas.direitosCivis} onChange={handleChange} name="direitosCivis" />}
                          label="Direitos Civis"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.causas.meioAmbiente} onChange={handleChange} name="meioAmbiente" />}
                          label="Meio Ambiente"
                        />
                      </FormGroup>
                      <FormHelperText>Be careful</FormHelperText>
                    </FormControl>
                  </div>
                ) : null}
              </div>
            </ClickAwayListener>

            {/* <SearchField
              placeholder="Search..."
              // onChange={onChange}
              searchText="This is initial search text"
              classNames="test-class"
            /> */}


            <ClickAwayListener onClickAway={handleClickAwayLocation}>
              <div className={classesLocation.root}>
                <button type="button" className="bg-color-white-fc border-rd-10 width-100pg height-40p fs-16p" onClick={handleClickLocation}>
                  Estado
              </button>
                {this.state.openLocation ? (
                  <div className={classesLocation.dropdownLocation}>
                    <FormControl component="fieldset" className={classesFormLocation.formControl}>
                      <FormLabel component="legend">Filtrar por estado</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.AC} onChange={handleChangeLocation} name="AC" />}
                          label="AC"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.AL} onChange={handleChangeLocation} name="AL" />}
                          label="AL"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.AP} onChange={handleChangeLocation} name="AP" />}
                          label="AP"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.AM} onChange={handleChangeLocation} name="AM" />}
                          label="AM"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.BA} onChange={handleChangeLocation} name="BA" />}
                          label="BA"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.CE} onChange={handleChangeLocation} name="CE" />}
                          label="CE"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.ES} onChange={handleChangeLocation} name="ES" />}
                          label="ES"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.GO} onChange={handleChangeLocation} name="GO" />}
                          label="GO"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.MA} onChange={handleChangeLocation} name="MA" />}
                          label="MA"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.MT} onChange={handleChangeLocation} name="MT" />}
                          label="MT"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.MS} onChange={handleChangeLocation} name="MS" />}
                          label="MS"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.MG} onChange={handleChangeLocation} name="MG" />}
                          label="MG"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.PA} onChange={handleChangeLocation} name="PA" />}
                          label="PA"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.PB} onChange={handleChangeLocation} name="PB" />}
                          label="PB"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.PR} onChange={handleChangeLocation} name="PR" />}
                          label="PR"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.PE} onChange={handleChangeLocation} name="PE" />}
                          label="PE"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.PI} onChange={handleChangeLocation} name="PI" />}
                          label="PI"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.RJ} onChange={handleChangeLocation} name="RJ" />}
                          label="RJ"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.RN} onChange={handleChangeLocation} name="RN" />}
                          label="RN"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.RS} onChange={handleChangeLocation} name="RS" />}
                          label="RS"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.RO} onChange={handleChangeLocation} name="RO" />}
                          label="RO"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.RR} onChange={handleChangeLocation} name="RR" />}
                          label="RR"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.SC} onChange={handleChangeLocation} name="SC" />}
                          label="SC"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.SP} onChange={handleChangeLocation} name="SP" />}
                          label="SP"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.SE} onChange={handleChangeLocation} name="SE" />}
                          label="SE"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.TO} onChange={handleChangeLocation} name="TO" />}
                          label="TO"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" checked={this.state.stateLocation.DF} onChange={handleChangeLocation} name="DF" />}
                          label="DF"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                ) : null}
              </div>
            </ClickAwayListener>
            <div>
              <button type="button" className="bg-color-white-fc border-rd-10 width-100pg height-40p fs-16p" onClick={this.renderExibicao}>
                Filtrar
                </button>

            </div>

          </div>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          {/* <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
            <button type="button" onClick={handleClick}>
                Open menu dropdown
            </button>
              {open ? (
                <div className={classes.dropdown}>
                  Click me, I will stay visible until you click outside.
              </div>
              ) : null}
            </div>
          </ClickAwayListener> */}
        </div>
        <div className="yellowWord fs-48p fw-400">
          <span className="blueWord">Ache aqui o trabalho perfeito <br />
          </span>
          para o seu perfil.
        </div>
        <div className="flex justcon-sb pd-t-16 pd-b-16">
          <div className="fs-32p fw-600 gray">VAGAS</div>
          <div className="blueWord fs-16p fw-500">Quer conhecer a nossa parceira doebem? <a href="https://www.doebem.org.br/" className="yellowWord">Clique aqui</a></div>
        </div>
        <div className="">
          {this.state.exibir.map(vaga => (
            <div key={vaga.vaga.id} className="">
              <CardVacancy href={`http://localhost:3000/${setUrl()}/vacancy/${vaga.vaga.id}`} hrefSeta={`http://localhost:3000/${setUrl()}/vacancy/${vaga.vaga.id}`} className="" key={vaga.vaga.id} imgSrc={vaga.foto}
                ongName={vaga.vaga.fkUsuarioJuridico.nomeOng} description={vaga.vaga.descricao} titulo={vaga.vaga.titulo}
                location={`${vaga.vaga.fkEndereco.cidade} - ${vaga.vaga.fkEndereco.estado}, ${vaga.vaga.fkEndereco.bairro}`} />
            </div>
          ))}
        </div>
      </section>
    );
  };
}
/*
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',

  },
  dropdownCauses: {
    position: 'absolute',
    top: 35,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid #fff',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    width: '1000%'
  },
  dropdownLocation: {
    position: 'absolute',
    top: 35,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid #fff',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    width: '500%'
  },

  rootForm: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
    display: 'flex'
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Vacancies() {

  const getVagas = async () => {
    let response = await new VagaService().getVagas();
    console.log(response);
  }

  componentDidMount(){
    getVagas();
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const classesForm = useStyles();
  const [state, setState] = React.useState({
    animais: false,
    criancas: false,
    pcd: false,
    idosos: false,
    direitosCivis: false,
    meioAmbiente: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { animais, criancas, pcd, idosos, direitosCivis, meioAmbiente } = state;
  const error = [animais, criancas, pcd, idosos, direitosCivis, meioAmbiente].filter((v) => v).length !== 2;


  const classesLocation = useStyles();
  const [openLocation, setOpenLocation] = React.useState(false);

  const handleClickLocation = () => {
    setOpenLocation((prev) => !prev);
  };

  const handleClickAwayLocation = () => {
    setOpenLocation(false);
  };

  const classesFormLocation = useStyles();
  const [stateLocation, setStateLocation] = React.useState({
    SP: false,
    RJ: false,
    RS: false,
    MG: false,
    MA: false,
    AM: false,
  });

  const handleChangeLocation = (event) => {
    setStateLocation({ ...state, [event.target.name]: event.target.checked });
  };

  const { SP, RJ, RS, MG, MA, AM } = stateLocation;
  const errorLocation = [SP, RJ, RS, MG, MA, AM].filter((v) => v).length !== 2;



  console.log(stateLocation);
  console.log(state);

  return (
    <section>
      <div className="mg-b-16 border-b pd-b-16 flex justcon-sb">
        <div className="flex justcon-sb width-20pg">
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
              <button type="button" className="bg-color-blue font-color-white border-rd-10 width-250pg height-40p fs-16p" onClick={handleClick}>
                Causas
              </button>
              {open ? (
                <div className={classes.dropdownCauses}>

                  <FormControl component="fieldset" className={classesForm.formControl}>
                    <FormLabel component="legend">Filtrar por causa</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox color="primary" color="primary" checked={animais} onChange={handleChange} name="animais" />}
                        label="Animais"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" checked={criancas} onChange={handleChange} name="criancas" />}
                        label="Crianças"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" checked={pcd} onChange={handleChange} name="pcd" />}
                        label="Pessoas com Deficiência"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox color="primary" checked={idosos} onChange={handleChange} name="idosos" />}
                        label="Idosos"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" checked={direitosCivis} onChange={handleChange} name="direitosCivis" />}
                        label="Direitos Civis"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" checked={meioAmbiente} onChange={handleChange} name="meioAmbiente" />}
                        label="Meio Ambiente"
                      />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                  </FormControl>
                </div>
              ) : null}
            </div>
          </ClickAwayListener>

          {/* <SearchField
            placeholder="Search..."
            // onChange={onChange}
            searchText="This is initial search text"
            classNames="test-class"
          /> *//*}


<ClickAwayListener onClickAway={handleClickAwayLocation}>
<div className={classesLocation.root}>
<button type="button" className="bg-color-white-fc border-rd-10 width-250pg height-40p fs-16p" onClick={handleClickLocation}>
Estado
</button>
{openLocation ? (
<div className={classesLocation.dropdownLocation}>
<FormControl component="fieldset" className={classesFormLocation.formControl}>
<FormLabel component="legend">Filtrar por causa</FormLabel>
<FormGroup>
<FormControlLabel
control={<Checkbox color="primary" color="primary" checked={SP} onChange={handleChangeLocation} name="SP" />}
label="SP"
/>
<FormControlLabel
control={<Checkbox color="primary" checked={RJ} onChange={handleChangeLocation} name="RJ" />}
label="RJ"
/>
<FormControlLabel
control={<Checkbox color="primary" checked={RS} onChange={handleChangeLocation} name="RS" />}
label="RS"
/>
</FormGroup>
<FormGroup>
<FormControlLabel
control={<Checkbox color="primary" checked={MG} onChange={handleChangeLocation} name="MG" />}
label="MG"
/>
<FormControlLabel
control={<Checkbox color="primary" checked={MA} onChange={handleChangeLocation} name="MA" />}
label="MA"
/>
<FormControlLabel
control={<Checkbox color="primary" checked={AM} onChange={handleChangeLocation} name="AM" />}
label="AM"
/>
</FormGroup>
<FormHelperText>Be careful</FormHelperText>
</FormControl>
</div>
) : null}
</div>
</ClickAwayListener>

</div>

<div className={classes.search}>
<div className={classes.searchIcon}>
<SearchIcon />
</div>
<InputBase
placeholder="Buscar..."
classes={{
root: classes.inputRoot,
input: classes.inputInput,
}}
inputProps={{ 'aria-label': 'search' }}
/>
</div>

{/* <ClickAwayListener onClickAway={handleClickAway}>
<div className={classes.root}>
<button type="button" onClick={handleClick}>
Open menu dropdown
</button>
{open ? (
<div className={classes.dropdown}>
Click me, I will stay visible until you click outside.
</div>
) : null}
</div>
</ClickAwayListener> *//*}
</div>
<div className="yellowWord fs-48p fw-400">
<span className="blueWord">Ache aqui o trabalho perfeito <br />
</span>
para o seu perfil.
</div>
<div className="flex justcon-sb pd-t-16 pd-b-16">
<div className="fs-32p fw-600 gray">VAGAS</div>
<div className="blueWord fs-16p fw-500">Quer conhecer a nossa parceira doebem? <a href="https://www.doebem.org.br/" className="yellowWord">Clique aqui</a></div>
</div>
{/* {this.state.resposta.map(vaga => (
<div className="">
  <CardVacancy className="" />
</div>
))} *//*}
<Pagination count={10} variant="outlined" shape="rounded" className="mg-v-16 center" />
</section>
);
};
*/