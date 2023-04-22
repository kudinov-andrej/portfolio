import React from 'react';
import './Footer.css';
import vkImg from "./image/vk.svg"
import tgImg from "./image/telegram.svg"
import waImg from "./image/whatsapp.svg"
import telephoneImg from "./image/telephone.svg"
import githubImg from "./image/github.svg"

function Footer() {
    return (
        <section className="footer">
            <nav className="footer-nav">
                <ul className='footer__navigation'>
                    <li className='footer__link'><a className='footer__link-punct' href="https://wa.me/+79284702312"><img className='footer__link-img' src={waImg} target='blank' alt="Иконка Вотсап" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="tel:+79284702312"><img className='footer__link-img' src={telephoneImg} target='blank' alt="Иконка телефона" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="https://t.me/+79284702312"><img className='footer__link-img' src={tgImg} target='blank' alt="Иконка телеграмм" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="https://vk.com/andreika01"><img className='footer__link-img' src={vkImg} target='blank' alt="иконка Вконтакте" /></a></li>
                    <li className='footer__link'><a className='footer__link-punct' href="https://github.com/kudinov-andrej" target='blank'><img className='footer__link-img' src={githubImg} alt="иконка Гитхаб" /></a></li>
                </ul>
            </nav >
            <p className='footer__avtor'>Кудинов Андрей</p>
        </section>
    );
}

export default Footer;