import React from 'react';
import './Skils.css';
import SkilsItem from './SkilsItem';
import { useEffect, useState } from 'react';


function Skils({ cards }) {


    return (
        <section className="skils">
            <h2 className="skils__title">Технологии</h2>
            <div className='skils__block'>
                {cards.map((card) =>
                    <SkilsItem
                        card={card}
                        key={card.id}
                    />)}
            </div>
        </section>
    );
}

export default Skils;