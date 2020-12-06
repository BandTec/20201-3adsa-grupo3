import React from 'react';
import './carousel-volunteer-card.css';
import { Icon, InlineIcon } from '@iconify/react';

function CarouselCard(props){
    return(
        <div className="carouselVCard">
            <div className={props.isIcon ?"cardVIcon display-block":"cardVIcon display-none"}>
            <Icon className="iconStyle" icon={props.icon} style={{fontSize: '190px'}} />

            </div>
            <div className={props.isImage ?"cardVImg display-block":"cardVImg display-none"}>

            </div>
            <div className="cardVContent">
                <div id="contentNameVCard">
                    {props.nameCard}
                </div>  
                <div id="contentVCardDescription">
                    {props.description}
                </div>
            </div>
        </div>
    )
};

export default CarouselCard;