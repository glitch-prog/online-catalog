import React from 'react';
import { InputContainer } from '../../containers/Input/Input';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header_catalog_page">
        <InputContainer type="search" handleOnChange={() => {}} className="catalog__input__search" />
        <div className="header_catalog_page_sign">
          <p>Sign In</p>
          <p>Sign Up</p>
        </div>
        <a href="#">
          <img src="" alt="cart" />
        </a>
      </div>
    </header>
  );
};
