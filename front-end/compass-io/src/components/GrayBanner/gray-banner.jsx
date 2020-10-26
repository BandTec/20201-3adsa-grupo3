import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconBanner from "../IconBanner/icon-banner";
import { Icon, InlineIcon } from '@iconify/react';
import handsHelpingSolid from '@iconify/icons-la/hands-helping-solid';
import bxDonateHeart from '@iconify/icons-bx/bx-donate-heart';
import institutionIcon from '@iconify/icons-cil/institution';
import hammerAndPick from '@iconify/icons-emojione-monotone/hammer-and-pick';


import './gray-banner.css';

const useStyles = makeStyles({
    iconStyle:{
        color:"#1975ff",
        fontSize: "138px"
    },
    bannerContent: {
        marginTop: "5rem",
        backgroundColor: "#000"
    }

});

function GrayBanner() {
    const classes = useStyles();
    const handsIcon = <Icon className={classes.iconStyle} icon={handsHelpingSolid} />;
    const donateIcon = <Icon className={classes.iconStyle} icon={bxDonateHeart} />;
    const accountBalanceIcon = <Icon className={classes.iconStyle} icon={institutionIcon} />;
    const hammerAndPickIcon = <Icon className={classes.iconStyle} icon={hammerAndPick} />;


    return (
       <div className="grayBanner">
            <Grid container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <IconBanner className={classes.bannerContent} text="+2.000" subtext="Vagas de voluntariado" icon={handsIcon}></IconBanner>
                <IconBanner className={classes.bannerContent} text="+8.500" subtext="Pessoas assistidas" icon={donateIcon}></IconBanner>
                <IconBanner className={classes.bannerContent} text="50" subtext="ONGs de diferentes temas" icon={accountBalanceIcon}></IconBanner>
                <IconBanner className={classes.bannerContent} text="+100" subtext="Projetos Sociais" icon={hammerAndPickIcon}></IconBanner>
            </Grid>
       </div>
    );
}

export default GrayBanner;
