import React from 'react'


const Option = ({value}) => {
    //console.log(value);
    return(
        <option key={value} value={value}>{value}</option>
    )
}

export default Option;

