import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import './blue-banner.css';

const useStyles = makeStyles({
    blueBanner: {
        width: "100vw",
        height: "15rem",
        backgroundColor: "#1975FF",
        margin: "1rem -7rem",
        display: "flex",
        color: "#fff",
        fontSize: "1.5rem"
    },
    bannerText: {
        position: "relative",
        width: "40%",
        // height: "30%",
        margin: "0.5rem 7rem",
        // backgroundColor: "#0f0"
    },
    bannerButtons: {
        color: "#fff",
        // backgroundColor: "#f00",
        width: "40%",
        margin: "auto auto",
        display: "flex"
    }

});

function BlueBanner() {
    const classes = useStyles();

    function ClickDonate(){
        window.location.href="https://www.doebem.org.br/";
    }

    return (
        <div className={classes.blueBanner}>
            <Grid className={classes.bannerText}>
                <div className="bannerTextTitle">
                    Doações Mensais
                </div>
                <div >
                    Não pode se voluntariar, mas quer ajudar de alguma forma? Não tem problema!<br /><br />
                    Contribua aqui com o que puder ajudar!
                </div>
            </Grid>
            <Grid container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center" 
                    className={classes.bannerButtons}>
                <Button id="moreBtn" variant="outlined" onClick={ClickDonate} size = "large">Saiba mais</Button>
            </Grid>
        </div>
    );
}

export default BlueBanner;
