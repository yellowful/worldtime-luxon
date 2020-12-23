import React from 'react';
import {DateTime} from 'luxon';

const TimezoneNow = ({now}) => {
    const timeStr = now.setLocale('en-us').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
    // 12/11/2020, 11:31:37 AM
    const timeStrHuge = now.setLocale('en-us').toLocaleString(DateTime.DATETIME_HUGE);
    // Friday, December 11, 2020, 11:33 AM Taipei Standard Time
    // Friday, December 11, 2020, 10:51:01 AM Taipei Standard Time  // DATETIME_HUGE_WITH_SECONDS
    const zoneName = now.zoneName;
    const subZoneName = zoneName.substring(zoneName.indexOf("/")+1);
    return(
        <div className="center br3 w-90 pv3 ph4 bg-white">
            <div className="" id="zoneName">
                {subZoneName}
            </div>
            <div>
                <div className="">
                    <div className="dib w-70 tr pr2">
                        <span className="f1" id="10:14">
                            {timeStr.slice(-11, -6)}
                        </span>
                        <span className="f2 gray" id=":55">
                            {timeStr.slice(-6, -3)}
                        </span>
                    </div>
                    <div className="f4 dib" id="AM PM">
                        {timeStr.slice(-2)} 
                    </div>                    
                </div>
                <div className="f5 gray" id="Friday, December 11, 2020">
                    {timeStrHuge.slice(0, timeStrHuge.lastIndexOf(","))}
                </div>
            </div>
        </div>
    )
}

export default TimezoneNow;





    //     <div>
    //     <h1 className="f4 bold center mw5 tc">{now.zoneName}</h1>
    //     <ul className="list pl0 ml0 center mw5 ba b--mid-gray br2">
    //         <li className="ph3 pv2 tc bb b--mid-gray">{now.toLocaleString()}</li>
    //         <li className="ph3 pv2 tc">{now.toLocaleString(DateTime.TIME_WITH_SECONDS)}</li>
    //     </ul>
    // </div>