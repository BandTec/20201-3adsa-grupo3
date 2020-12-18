import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import locationIcon from '@iconify/icons-carbon/location';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import nextOutline from '@iconify/icons-carbon/next-outline';
import './card-vacancy.css';
import LocationScheduleInfo from '../LocationScheduleInfo/location-schedule-info';

class CardVacancy extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.key} className="mg-b-16 flex">
                <div className="border height-280p width-100pg border-rd-10 bg-color-gray-light flex">
                    <div>
                        <img src={this.props.imgSrc} name="vacancyImg" className="cardImg"></img>
                        <div className="mg-l-16">
                            por {this.props.ongName}
                        </div>
                    </div>
                    <div className="pd-v-16 mg-h-16 txtal-justify">
                        {/* <div>{props.title}</div>
                    <div>{props.description}</div>
                    <div></div> */}
                        <div className="fw-600 fs-32p"><a href={this.props.href}>{this.props.titulo}</a></div>
                        <div className="gray fw-500">
                            {this.props.description}
                        </div>
                        <LocationScheduleInfo hreSeta={this.props.hrefSeta} location={this.props.location} schedule="1x por semana" />
                    </div>
                </div>
            </div>
        )
    }
};

export default CardVacancy;