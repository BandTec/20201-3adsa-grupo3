import React from 'react';
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

import './vacancies.css';

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

  return (
    <section>
      <Navbar />
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
          /> */}


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
        </ClickAwayListener> */}
      </div>
      <div className="yellowWord fs-48p fw-400">
        <span className="blueWord">Ache aqui o trabalho perfeito <br />
        </span>
        para o seu perfil.
      </div>
      <div className="flex justcon-sb pd-t-16 pd-b-16">
        <div className="fs-32p fw-600 gray">VAGAS</div>
        <div className="blueWord fs-16p fw-500">Quer conhecer as ONGs parceiras? <a href="" className="yellowWord">Clique aqui</a></div>
      </div>
      <div className="">
        <CardVacancy className="" />
      </div>
      <Pagination count={10} variant="outlined" shape="rounded" className="mg-v-16 center" />
      <Footer />
    </section>
  );
};