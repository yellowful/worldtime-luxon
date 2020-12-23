import React from 'react';
import Option from './Option';
import PlusButton from './PlusButton';

const Searchbox = ({splitedTimezone, onInputChange, completeCity, errorMes, searchboxValue, onPlusButton}) => {
    //completeCity=['newyork','new_jersy','new_mexico'].slice()
    //console.log(splitedTimezone);
    return (
        <div className="measure pa4 black-80 ">
            <label  className="f4 b db">What time is it in</label><br/>
            <div className="flex">
            <input 
            onChange={onInputChange}
            id="city" 
            list="cityDatalist" 
            className="input-reset ba b--black-30 pa2 db w-60" 
            type="text" 
            aria-describedby="name-desc" 
            placeholder="enter city name"
            value={searchboxValue}
            ></input>
            <PlusButton
            onPlusButton={onPlusButton}
            />
            </div>
            <br/>
            <small id="name-desc" 
            className="f5 black-60 db mb2">{errorMes}</small>
            <datalist id='cityDatalist' >
            {
                //completeCity.length !== 0?
                // map the comparison results so every city can show in the autocomplete component 
                splitedTimezone.map((item, index) => {
                    return <Option 
                    value={item[item.length-1]}/>
                })
            }
            </datalist>
        </div>
    )
}

export default Searchbox;