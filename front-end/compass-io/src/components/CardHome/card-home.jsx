import React from 'react';
import './card-home.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import TouchAppRoundedIcon from '@material-ui/icons/TouchAppRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",

  },
  cardHeader: {
    display: "flex",
    marginBottom: "0.5rem"
    // justifyContent: "space-between"

  },
  icons: {
    color: "#1975FF",
    fontSize: 80
  },
  root: {
    width: "30%",
    backgroundColor: "#FAFAFA",
    borderRadius: "1rem",
    border: "1px solid #000",
    boxShadow: "2.5px 2.5px 2.5px black"

  },
  title: {
    paddingLeft: "2rem",
    fontSize: 32,
    lineHeight: 1,
    color: "#FFB219",
    margin: "auto"
  },
  cardText: {
    fontSize: 20,
    textAlign: "justify",
    lineHeight: 1.5,
  }
});

export default function CardHome(props) {
  const classes = useStyles();
  return (
    // <Card className="cardComponent">
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.cardHeader}>
            <PersonAddRoundedIcon className={classes.icons} />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Cadastre-se
                </Typography>
          </div>

          <Typography className={ classes.cardText } >
            Antes de mais nada, para iniciar o seu trabalho voluntário, <span className="yellowWord">cadastre-se</span> no site da Compass.io.<br />
            É super fácil e rápido realizar o seu cadastro. Só precisamos que você preencha para te ajudarmos a buscar o seu 
            <span className="blueWord"> trabalho voluntário ideal</span>!
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <div className={classes.cardHeader}>

            <TouchAppRoundedIcon className={classes.icons} />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Escolha uma ONG
            </Typography>
          </div>

          <Typography className={ classes.cardText } >
            Depois de realizar o cadastro, traremos para você <span className="yellowWord">algumas opções</span> de ONGs que estão precisando de ajuda 
            conforme o seu perfil.<br />
            Mostre interesse e <span className="blueWord">entre em contato com a ONG</span> para passar pelo seu processo seletivo específico.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <div className={classes.cardHeader}>

            <PeopleAltRoundedIcon className={classes.icons} />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Ajude
            </Typography>
          </div>
          <Typography className={ classes.cardText } >
            Depois de conversar e passar pelo processo seletivo da ONG você estará liberado a 
            <span className="yellowWord"> ajudar uma causa</span> que te agrade, e tornar, com um passo de cada vez, 
            o mundo em um <span className="blueWord">lugar melhor</span>! Simples, não? Comece agora!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
