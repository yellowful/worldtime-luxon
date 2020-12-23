import React from 'react';
import { DateTime } from 'luxon'
import SubButton from '../component/SubButton';
import UpButton from '../component/UpButton';
import { Draggable } from 'react-beautiful-dnd';

const Timezone = ({tz, onSubButton, onUpButton, index, local}) => {
    const tzDataStr = DateTime.local().setZone(tz).setLocale('en-us').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
    const tzDataStrHuge = DateTime.local().setZone(tz).setLocale('en-us').toLocaleString(DateTime.DATETIME_HUGE);
    const zoneName = DateTime.local().setZone(tz).zoneName;
    const subZoneName = zoneName.substring(zoneName.indexOf("/")+1);

    return(
        <Draggable
        draggableId={tz}
        index={index}
        >
        {(provided) => {
            return (
                <div 
                className="center br3 w-90 pv3 ph4 bg-white mt2"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                    <div className="dib f3 f2-ns" id="zoneName"> {/*地名*/}
                        {subZoneName}
                    </div>
                    {/*刪除按鈕*/}
                    {                                                   
                    zoneName === local ? 
                    null
                    :
                    <SubButton
                        tz={tz}
                        onSubButton={onSubButton}
                    />
                    }
                    <div className="w-40-l  center-l"> {/*分鐘 AM PM*/}
                        <div className="dib w-70 tr pr2">
                            <span className="f1" id="10:14">
                                {tzDataStr.slice(-11, -6)}
                            </span>
                            <span className="f2 gray" id=":55">
                                {tzDataStr.slice(-6, -3)}
                            </span>
                        </div>
                        <div className="f4 dib" id="AM PM"> {/*AM PM*/}
                            {tzDataStr.slice(-2)} 
                        </div>                    
                    </div>                                                  
                    <div className="f5 f3-ns gray dib " id="Friday, December 11, 2020">{/*日期*/}
                        {tzDataStrHuge.slice(0, tzDataStrHuge.lastIndexOf(","))}
                    </div>
                    {
                    index !== 0 ?
                    <UpButton
                        tz={tz}
                        onUpButton={onUpButton} 
                    />
                    :
                    null
                    }
                </div>
            )
        }}

        </Draggable>
    )
}

export default Timezone;

