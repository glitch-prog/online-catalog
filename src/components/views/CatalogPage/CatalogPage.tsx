import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reducingHooks';
import { ICard } from '../../../store/reducers/dataReducer';
import { ModalSign } from '../../containers/ModalSign/ModalSign';
import { SignInPageContainer } from '../../containers/SignInPage/SignInPage';
import { Container } from '../Container/Container';
import { Header } from '../Header/Header';
import { ICatalogPageView } from './CatalogPage.interface';
import './CatalogPage.css';
import { ButtonContainer } from '../../containers/Button/Button';

export const CatalogPageView = ({ isOpen, isClose, handleOnClickSetOpen, handleOnClickNavigateToAddPage, handleOnClickNavigateToCart, addToCart }: ICatalogPageView) => {
  const products = useAppSelector(state => state.data.cards);

  // const addToCart = (el: any) => {
  //   dispatch({
  //     type: 'ADD_TO_CART',
  //     payload: el,
  //   });
  // };

  return (
    <>
      <Container>
        <Header handleOnClickSetOpen={handleOnClickSetOpen} handleOnClickNavigateToAddPage={handleOnClickNavigateToAddPage} handleOnClickNavigateToCart={handleOnClickNavigateToCart} />

        <main className="main_catalog_page">
          {products.length > 1 ? (
            products.map((el: ICard) => (
              <div className="product__card" key={el.id}>
                <img src={el.img} alt="img" />
                <div className="product__info">
                  <p>{el.name}</p>
                  <p>{el.description}</p>
                  <h4>{el.seller}</h4>
                </div>
                <button onClick={() => addToCart(el)}>add to cart</button>
                <ButtonContainer text={'buy'} className={'buy__btn'} handleOnClick={() => {}} />
              </div>
            ))
          ) : (
            <div>No products.Loading...</div>
          )}
        </main>

        <footer className="footer_catalog_page">
          <h3>footer</h3>
        </footer>
        <ModalSign isOpen={isOpen} isClose={isClose}>
          <SignInPageContainer />
        </ModalSign>
      </Container>
    </>
  );
};
