import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import locationIcon from '@iconify/icons-carbon/location';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import nextOutline from '@iconify/icons-carbon/next-outline';
import './card-vacancy.css';
import LocationScheduleInfo from '../LocationScheduleInfo/location-schedule-info';

function CardVacancy(props){
    return(
        <div className="flex justcon-sb mg-b-16">
            <div className="border height-280p width-45pg border-rd-10 bg-color-gray-light flex">
                <div>
                    <div className="cardImg">

                    </div>
                    <div className="mg-l-16">
                        por {props.ongName}
                    </div>
                </div>
                <div className="pd-v-16 mg-h-16 txtal-justify">
                    {/* <div>{props.title}</div>
                    <div>{props.description}</div>
                    <div></div> */}
                    <div className="fw-600 fs-32p">Título</div>
                    <div className="gray fw-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit corrupti, molestias iste incidunt magnam 
                        repudiandae dolorum facilis commodi optio excepturi officia! 
                        Eos id voluptatem voluptatum impedit atque praesentium soluta assumenda?
                    </div>
                <LocationScheduleInfo location="São Paulo, SP, Grajaú" schedule="1x por semana" />
                </div>
            </div>
        
        </div>
    )
};

export default CardVacancy;