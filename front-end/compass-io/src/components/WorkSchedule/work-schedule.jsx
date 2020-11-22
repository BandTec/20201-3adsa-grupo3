import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import clockCircleOutlined from '@iconify/icons-ant-design/clock-circle-outlined';
import locationIcon from '@iconify/icons-carbon/location';
import './work-schedule.css';

function WorkSchedule(props) {
    return (
       <section className="workSchedule">
           <div className="grayPhrase">Informações a respeito do horário de trabalho</div>
           <div className="infoWorkSchedule">
               <Icon icon={calendarOutlined} style={{fontSize: '48px'}} />
               <div className="boldText">
                    { props.schedule }
                </div>            
            </div>
           <div className="infoWorkSchedule">
                <Icon icon={clockCircleOutlined} style={{fontSize: '48px'}} />
                <div className="boldText">
                    { props.hour }
                </div>
            </div>
           <div className="infoWorkSchedule">
                <Icon icon={locationIcon} style={{fontSize: '48px'}} />
                <div className="boldText">
                    { props.location }
                </div>            
            </div>
           {/* <div id="imgOng"></div>
           <div className="infoOng">
               <div className="infoOngTitle">{ props.nameOng }</div>
               <div className="infoOngText">{ props.infoOng }</div>
               <a className="infoOngUrl" href="">{ props.link }</a>
           </div> */}
       </section>
    );
}

export default WorkSchedule;
