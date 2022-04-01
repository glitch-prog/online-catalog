import React from 'react';
import { InputContainer } from '../../containers/Input/Input';
import './Header.css';
import { IHeader } from './Header.interface';
import logo from '../../../img/logo.png';
import cart from '../../../img/cart.png';
import loopa from '../../../img/loopa.png';
import AddIcon from '@mui/icons-material/Add';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useAppSelector } from '../../../hooks/reducingHooks';

export const Header = ({ handleOnClickSetOpen, handleOnClickNavigateToAddPage, handleOnClickNavigateToCart }: IHeader) => {
  const isAuthorized = useAppSelector(state => state.auth.auth);
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
        {!isAuthorized ? (
          <div className="header__catalog__page__sign">
            <p onClick={handleOnClickSetOpen}>Sign In</p>
            <p onClick={handleOnClickSetOpen}>Sign Up</p>
          </div>
        ) : (
          <div>
            <AddIcon onClick={handleOnClickNavigateToAddPage} />
            <button onClick={handleOnClickNavigateToCart}>
              <img src={cart} alt="cart" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
