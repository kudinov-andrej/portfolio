
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      <NavLink className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`} to="/">Главная</NavLink>
      <NavLink className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`} to="/works">Мои работы</NavLink >
    </nav >
  );
}

export default Header;

/* 
отключил страницу с шаром судьбы:

 <NavLink className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`} to="/fate">Только для HR</NavLink >

 */
