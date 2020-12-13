import React from 'react';
import './vacancy-header.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Icon, InlineIcon } from '@iconify/react';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';

const useStyles = makeStyles({
    btnFavorite:{
        backgroundColor: '#FFB219',
        color: '#fff',
        width: '10rem',
        height: '3rem',
        fontWeight: 700,
        border: '1px solid #000',
    },
    btnApply:{
        backgroundColor: '#1975FF',
        color: '#fff',
        width: '10rem',
        height: '3rem',
        fontWeight: 700,
        border: '1px solid #000',
        marginLeft: '2rem'
    }
});

export default function VacancyHeader(props) {
    const classes = useStyles();
    return(
<<<<<<< HEAD
        <div className="vacancyHeader">
            <img id={props.imgId} width={props.width} height={props.height} src={props.imgSrc}/>
=======
        <div name={props.name} className="vacancyHeader">
            <div id="imgVacancy">
                <img id={props.imgId} width={props.width} height={props.height} src={props.imgSrc}/>
            </div>
>>>>>>> 625c8cce62fb07de7d906da49225e36ba16deb9a
            <span id="headerText">
                <div id="headerTitle">{ props.title }</div>
                <div id="headerBtn">
                    <Button className={classes.btnFavorite}>
                        <Icon icon={heartOutlined} style={{color: '#eeeeee', fontSize: '2rem'}} />Favoritar
                    </Button>
                    <Button className={classes.btnApply}>Candidatar-se</Button>
                </div>
            </span>
        </div>
    );
}