import React from 'react';
import './BallOfFate.css';
import { useState } from 'react';
import { textFate } from './constant.js';

// страница отключена от проекта

function BallOfFate() {
    const [fateRandom, setFateRandom] = useState("Спросите...");
    const [textButton, setTextButton] = useState("Узнать...");
    const [caunt, setCaunt] = useState(1);
    const [visibleText, setVisibleText] = useState("");
    const [finish, setFinish] = useState(false);

    function incrementCauntButton() {
        setCaunt(prevCaunt => prevCaunt + 1);
    }

    function getRandomString(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex].text;
    }

    function handleButtonClick() {
        const randomFate = getRandomString(textFate);
        setFateRandom(randomFate);
        incrementCauntButton();
        changeText();
    }

    function changeText() {
        if (caunt > 1) {
            setVisibleText("Прошу не воспринимать эту игру серьезно. Она создана, чтобы разбавить Ваш день.")
            setTextButton("Спросить снова")
        }
        if (caunt > 2) {
            setVisibleText(" ")
            setTextButton("Стоит ли искушать судьбу?")
        }
        if (caunt > 3) {
            setTextButton("Спросить снова!")
        }
        if (caunt > 5) {
            setVisibleText("Осторожно, после следующего нажатия появится спойлер!")
            setTextButton("Спрашивать и спрашивать")
        }
        if (caunt > 6) {
            setVisibleText("Сегодня магический шар на моей стороне;)")
        }
        if (caunt > 7) {
            setVisibleText(" ")
        }
        if (caunt > 14) {
            setVisibleText("Вы великолепны! Немногие дошли до этого текста.")
        }
        if (caunt > 18) {
            setVisibleText("Вы очень настойчивы. Браво!")

        }
        if (caunt > 19) {
            setVisibleText("Я очень жду Вашего звонка! Хорошего дня!")
            setTextButton("Последнее нажатие")
        }
        if (caunt > 20) {
            setTextButton("Пригласите его")
            setFateRandom("Он очень ждет звонка")
            setFinish(true)
        }
        console.log(caunt)
    }

    return (
        <section className="fate__container">
            <h2 className='fate__title'>Пригласить Андрея на собеседование?</h2>
            <div className="fate__sphere">
                <div className="fate__triangle" style={{ animationPlayState: finish ? 'paused' : 'running' }}>
                    <div className='fate__text-container'>
                        <p className="fate__text" lang="ru">{fateRandom}</p>
                    </div>
                </div>
            </div>
            <p className="fate__hidden-text">{visibleText}</p>
            <button type='button' disabled={finish} className={finish ? "fate__button-finish" : "fate__button"} onClick={handleButtonClick}>{textButton}</button>
        </section>
    );
}

export default BallOfFate;