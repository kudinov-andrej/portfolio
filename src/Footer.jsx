import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <nav className="footer-nav">
                <ul className='footer__navigation'>
                    <li className='footer__link'><a className='footer__link-punct' href="https://wa.me/+79284702312"><img className='footer__link-img' src="./image/whatsapp.svg" target='blank' alt="Иконка Вотсап" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="tel:+79284702312"><img className='footer__link-img' src="./image/telephone.svg" target='blank' alt="Иконка телефона" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="https://t.me/+79284702312"><img className='footer__link-img' src="./image/telegram.svg" target='blank' alt="Иконка телеграмм" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="https://vk.com/andreika01"><img className='footer__link-img' src="./image/vk.svg" target='blank' alt="иконка Вконтакте" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="https://github.com/kudinov-andrej" target='blank'><img className='footer__link-img' src="./image/github.svg" alt="иконка Гитхаб" /></a></li>
                </ul>
            </nav >
            <p className='footer__avtor'>Кудинов Андрей</p>
        </section>
    );
}

export default Footer;