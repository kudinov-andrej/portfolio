import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      <ul className='header__navigation'>
        <li className='header__link'>Главная</li>
        <li className='header__link'>Мои работы</li>
      </ul>
    </nav>
  );
}

export default Header;