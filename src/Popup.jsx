import React from 'react';
import './Popup.css'


// компонент в процессе доработки

function Popup(props) {

  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ""}`}>
      <div className="popup__conteiner">
        <button className="popup__button-close" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">Вы действительно HR?</h2>
        <form className="popup__form" action="#" name="popup-form" noValidate>
          <button type="button" className="popup__button" value="Да"><Route path="/fate" element={<BallOfFate />} />Да</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;



