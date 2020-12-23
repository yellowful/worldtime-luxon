import React from 'react';

const SubButton = ({onSubButton, tz}) => {
    return(
        <div className="w-10 dib fr w2-ns ">
            <svg 
            onClick={() => {onSubButton(tz)}}
            className="grow"
            fill='none' stroke='#555555' strokeWidth='10' strokeDashoffset='194' strokeDasharray='0' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                <circle cx="50" cy="50" r="40"/> 
                <line x1="35" y1="50" x2="65" y2="50" />
            </svg>
        </div>
    )
}

export default SubButton;

