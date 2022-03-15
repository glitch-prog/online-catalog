import React from 'react';
import './BurgerMenu.css';

export const BurgerMenu = () => {
  return (
    <div className="hamburger-menu">
      {/* <div className='menu__icon'> */}
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
      {/* </div> */}

      <ul className="menu__box">
        <li>
          <a className="menu__item" href="#">
            Главная
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Проекты
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Команда
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Блог
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
};
