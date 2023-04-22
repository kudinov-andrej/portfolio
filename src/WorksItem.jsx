import React from 'react';
import './WorksItem.css';


function WorksItem(props) {

    return (
        <div className='works__card '>
            <img className='works__img' src={props.work.link} alt={props.work.name} />
            <h2 className="works__name">{props.work.name}</h2>
            <p className="works__text">{props.work.discription}</p>
        </div>
    );
}

export default WorksItem;