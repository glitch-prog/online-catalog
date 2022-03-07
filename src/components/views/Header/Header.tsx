import React from 'react';
import { InputContainer } from '../../containers/Input/Input';
import './Header.css';
import { IHeader } from './Header.interface';

export const Header = ({ handleOnClickSetOpen }: IHeader) => {
  return (
    <header className="header">
      <div className="header_catalog_page">
        <InputContainer type="search" handleOnChange={() => {}} className="catalog__input__search" />
        <div className="header_catalog_page_sign">
          <p onClick={handleOnClickSetOpen}>Sign In</p>
          <p onClick={handleOnClickSetOpen}>Sign Up</p>
        </div>
        <a href="#">
          <img src="" alt="cart" />
        </a>
      </div>
    </header>
  );
};
