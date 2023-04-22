import React from 'react';
import './SkilsItem.css';


function SkilsItem(props) {

    

    return (
        <div className='skils__card '>
            <img className='skils__img' src={props.card.link} alt={props.card.name} />
            <h2 className="skils__name">{props.card.name}</h2>
        </div>
    );
}

export default SkilsItem;