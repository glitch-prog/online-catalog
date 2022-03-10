import React from 'react';
import { InputContainer } from '../../containers/Input/Input';
import './Header.css';
import { IHeader } from './Header.interface';
import logo from '../../../img/logo.png';
import cart from '../../../img/cart.png';
import loopa from '../../../img/loopa.png';

export const Header = ({ handleOnClickSetOpen }: IHeader) => {
  return (
    <header className="header">
      <div className="header__catalog__page">
        <div className="header__search__input">
          <img src={loopa} alt="loopa" />
          <InputContainer type="search" handleOnChange={() => {}} className="catalog__input__search" />
        </div>

        <div className="header__catalog__logo">
          <h3 className="header__catalog__title">Shopper</h3>
          <img src={logo} alt="logo" className="header__catalog__title__img" />
        </div>

        <div className="header__catalog__page__sign">
          <p onClick={handleOnClickSetOpen}>Sign In</p>
          <p onClick={handleOnClickSetOpen}>Sign Up</p>
        </div>
        <a href="#">
          <img src={cart} alt="cart" />
        </a>
      </div>
    </header>
  );
};
