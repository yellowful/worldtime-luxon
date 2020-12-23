import React from 'react';

const UpButton = ({onUpButton, tz}) => {
    return(
        <div className="w-10 dib fr w2-ns">
            <svg 
            onClick={() => {onUpButton(tz)}}
            className="grow"
            fill='none' stroke='#555555' strokeWidth='10' strokeDashoffset='194' strokeDasharray='0' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                <polyline fill="none" points="30,30 50,15 70,30" />
            </svg>
        </div>
    )
}

export default UpButton;

