import React from 'react';
import './Information.css';


function Information() {
  return (
    <section className="information">
      <div className='information__block'>
        <h2 className='information__title'>Портфолио</h2>
        <p className='information__subtitle'>Привет! Меня зовут Андрей. Я Web-разработчик.</p>
        <p className='information__text'>В моем портфолио вы найдете реализованные проекты, которые я считаю наиболее интересными. Каждый из них претерпел несколько итераций и выстроен с учетом наилучших практик.</p>
        <button className='information__button' type='button'><a className='works__link' href="tel:+79284702312">Позвонить</a></button>
      </div>
      <div className='information__img'></div>
    </section>
  );
}

export default Information;