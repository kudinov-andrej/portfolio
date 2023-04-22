import React from 'react';
import './WorksItem.css';


function WorksItem(props) {

    return (
        <div className='works__card '>
            <button className='works__button'><a className='works__link' href={props.work.href} target="blank"><img className='works__img' src={props.work.link} alt={props.work.name} /></a></button>
            <div className='works__discription'>
                <h2 className="works__name">{props.work.name}</h2>
                <p className="works__text">{props.work.discription}</p>
            </div>
        </div>
    );
}

export default WorksItem;