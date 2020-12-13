import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import locationIcon from '@iconify/icons-carbon/location';
import mailOutlined from '@iconify/icons-ant-design/mail-outlined';
import websiteIcon from '@iconify/icons-whh/website';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './card-profile-ong.css';

const useStyles = makeStyles({
    outlineBtn: {
      width: "30%",
      border: "2.5px solid #1975FF",
      color: "#1975FF",
      fontWeight: 600,
      margin: "1rem auto",
      position: "relative",
      left: "33%"
    }
  });

function CardProfileOng(props) {
    const classes = useStyles();
    return (
        <div name={props.name} className="cardProfileOng">
            <div className={props.isContact ? "cardProfileOngContent display-block" : "display-none"}>
                <h1>Contato</h1>
                <div className="flex">
                    <div>
                        <Icon icon={locationIcon} style={{ fontSize: '40px' }} />
                    </div>
                    <div className="pd-t-8 font-weight-500 mg-l-16 vertical-align-center">
                        {props.location}
                    </div>
                </div>
                <div className="pd-t-16 flex">
                    <div>
                        <Icon icon={mailOutlined} style={{ fontSize: '40px' }} />
                    </div>
                    <div className="pd-t-8 font-weight-500 mg-l-16 vertical-align-center">
                        {props.contact}
                    </div>
                </div>
                <div className="pd-t-16 flex">
                    <div>
                        <Icon icon={websiteIcon} style={{ fontSize: '40px' }} />
                    </div>
                    <div className="pd-t-8 font-weight-500 mg-l-16 vertical-align-center">
                        {props.website}
                    </div>
                </div>
                <div className="pd-t-16 flex">
                    <div>
                        <Icon icon={facebookFilled} style={{ fontSize: '40px' }} />
                    </div>
                    <div className="pd-t-8 font-weight-500 vertical-align-center">
                        <a href="">{props.facebook}</a>
                    </div>
                </div>
                <div className="pd-t-16 pd-b-16 flex">
                    <div>
                        <Icon icon={instagramOutlined} style={{fontSize: '40px'}} />
                    </div>
                    <div className="pd-t-8 font-weight-500 mg-l-16 vertical-align-center">
                        {props.instagram}
                    </div>
                </div>
            </div>
            <div className={props.htHelp ? "cardProfileOngContent display-block" : "display-none"}>
                <h1>Como ajudar?</h1>
                <h2 className="blueWord">Alimentos</h2>
                <div className="yellowWord txtal-justify mg-r-16 font-weight-500">
                    Com a chegada do Covid-19, muitas pessoas se utilizaram do auxílio emergencial 
                    oferecido pelo governo. O valor, do auxílio é mais do que bem vindo, mas sabemos que não 
                    é o suficiente! Se puder, ajude-nos doando alimentos para oferecermos aos que precisam!
                </div>
                <h2 className="blueWord">Roupas</h2>
                <div className="yellowWord txtal-justify mg-r-16 font-weight-500">
                    Tem aquela camisa social guardada no seu armário que você não utiliza porque não 
                    é do seu tamanho? Encontre centros de doação de roupas que outras pessoas podem utilizar 
                    em entrevistas de emprego. O que é a sua sobra, pode ajudar outra pessoa!
                </div>
                <Button variant="outline" className={classes.outlineBtn}>Quero Doar</Button>
            </div>
        </div>
    );
}

export default CardProfileOng;
