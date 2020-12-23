import React from 'react';
import Timezone from './Timezone';
import { Droppable } from 'react-beautiful-dnd';

const TimezoneList = ({timezoneStrList, onSubButton, onUpButton, local}) => {
    return(
        <Droppable droppableId="droppable">
        {(provided, snapshot) => {
            return(
                <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                >
                {
                    timezoneStrList.map((item, index) => {
                        return(
                            <Timezone
                            key={item}
                            tz={item}
                            onSubButton={onSubButton}
                            onUpButton={onUpButton}
                            index={index}
                            local={local}
                            />                      
                        )
                    })
                }
                {provided.placeholder}
                </div>
            )
        }}   
        
        </Droppable>
    )
}


export default TimezoneList;