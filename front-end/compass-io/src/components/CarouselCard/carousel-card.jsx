import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import locationIcon from '@iconify/icons-carbon/location';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import Fab from '@material-ui/core/Fab';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import nextOutline from '@iconify/icons-carbon/next-outline';
import './carousel-card.css';

class CarouselCard extends React.Component {

    constructor(props) {
        super(props);
    }
    
    redirectToVacancy = () => {
        sessionStorage["idVaga"] = this.props.idVaga;
        window.location.href = "http://localhost:3000/vacancy";
    }

    render() {
        return(
            <div key={this.props.key} className = "carouselCard" >
                <img className="cardImg" src={this.props.imgSrc}></img>
                <div className="cardContent">
                    <div id="contentNameOng">
                        Por {this.props.nameOng}
                    </div> 
                    <h3 id="contentTitle">
                        {this.props.title}
                    </h3>    
                    <div id="contentDescription">
                        {this.props.description}
                    </div>
                    <div id="cardDescription">
                        <div>
                            <div id="contentLocation">
                                <Icon icon={locationIcon} style={{fontSize: '32px'}} />
                                <div id="contentLocationText">
                                    {this.props.location}
                                </div>
                            </div> 
                            <div id="contentSchedule">
                                <Icon icon={calendarOutlined} style={{fontSize: '32px'}} />
                                <div id="contentScheduleText">
                                    {this.props.schedule}
                                </div>
                            </div>
                        </div>
                        <div className="goNextBtn">
                            <a onClick={this.redirectToVacancy}>
                                <Icon icon={nextOutline} style={{fontSize: '42px'}} />
                            </a>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
};

export default CarouselCard;