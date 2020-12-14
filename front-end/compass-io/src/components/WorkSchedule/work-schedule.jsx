import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxCalendarX from '@iconify/icons-bx/bx-calendar-x';
import bxCalendarCheck from '@iconify/icons-bx/bx-calendar-check';
import locationIcon from '@iconify/icons-carbon/location';
import './work-schedule.css';

function WorkSchedule(props) {
    return (
       <section name={props.name} className="workSchedule">
           <div className="grayPhrase">Informações a respeito do horário de trabalho</div>
           <div className="infoWorkSchedule">
               <Icon icon={bxCalendarCheck} style={{fontSize: '48px'}} />
               <div className="boldText">
                    { props.schedule }
                </div>            
            </div>
           <div className="infoWorkSchedule">
                <Icon icon={bxCalendarX} style={{fontSize: '48px'}} />
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
