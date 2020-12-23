import React from 'react';

const PlusButton = ({onPlusButton}) => {
    return(
        <div className="w-10 ml3">
            <svg className="grow"
            fill='none' stroke='#555555' strokeWidth='10' strokeDashoffset='194' strokeDasharray='0' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'
            onClick={onPlusButton} >
                <circle cx="50" cy="50" r="40"/> 
                <line x1="35" y1="50" x2="65" y2="50" /> 
                <line x1="50" y1="35" x2="50" y2="65" />
            </svg>
        </div>
    )
}

export default PlusButton;

