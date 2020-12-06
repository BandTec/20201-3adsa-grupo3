import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import './alert-card.css';

function Alert(props) {
  return (
      <div>
        <MuiAlert elevation={6} variant="filled" {...props} ><label>{props.menssage}</label></MuiAlert>
      </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
    /*{Textos para status do alerta: "success", "error", "warning", "info"}*/

  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;
  
   const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState(false);
  };    

  return (
    <div className={classes.root}>
      <Button id="buttonCSS" variant="contained" color="inherit" onClick={handleClick({vertical: "top", horizontal: "right"})}>
        Cadastrar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
        <Alert onClose={handleClose} severity={props.statusAlert} menssage="Só sucesso no alerta!"/>
      </Snackbar>
    </div>
  );
}
