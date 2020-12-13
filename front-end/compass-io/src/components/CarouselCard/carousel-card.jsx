import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import locationIcon from '@iconify/icons-carbon/location';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import Fab from '@material-ui/core/Fab';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import nextOutline from '@iconify/icons-carbon/next-outline';
import './carousel-card.css';

function CarouselCard(props){
    return(
        <div key={props.key} className="carouselCard">
            <div className="cardImg">

            </div>
            <div className="cardContent">
                <div id="contentNameOng">
                    Por {props.nameOng}
                </div> 
                <h3 id="contentTitle">
                    {props.title}
                </h3>    
                <div id="contentDescription">
                    {props.description}
                </div>
                <div id="cardDescription">
                    <div>
                        <div id="contentLocation">
                            <Icon icon={locationIcon} style={{fontSize: '32px'}} />
                            <div id="contentLocationText">
                                {props.location}
                            </div>
                        </div> 
                        <div id="contentSchedule">
                            <Icon icon={calendarOutlined} style={{fontSize: '32px'}} />
                            <div id="contentScheduleText">
                                {props.schedule}
                            </div>
                        </div>
                    </div>
                    <div className="goNextBtn">
                        <a href="www.google.com">
                            <Icon icon={nextOutline} style={{fontSize: '42px'}} />
                        </a>
                    </div>   
                </div>
            </div>
        </div>
    )
};

export default CarouselCard;