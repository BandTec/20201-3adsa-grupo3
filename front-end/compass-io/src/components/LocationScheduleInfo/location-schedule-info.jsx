import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import locationIcon from '@iconify/icons-carbon/location';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import nextOutline from '@iconify/icons-carbon/next-outline';

import './location-schedule-info.css';

function LocationScheduleInfo(props) {
    return (
        <div className="flex mg-t-16">
            <div>
                <div className="mg-t-8 blueWord flex fw-600">
                    <Icon icon={locationIcon} style={{ fontSize: '32px' }} />
                    <div className="mg-t-8 ">
                        {props.location}
                    </div>
                </div>
                <div className="mg-t-8 yellowWord flex fw-600">
                    <Icon icon={calendarOutlined} style={{ fontSize: '32px' }} />
                    <div className="mg-t-8 ">
                        {props.schedule}
                    </div>
                </div>
            </div>
            <div className="mg-t-24 mg-l-16">
                <a href="/vacancy">
                    <Icon icon={nextOutline} style={{ fontSize: '42px' }} />
                </a>
            </div>
        </div>
    );
}

export default LocationScheduleInfo;
