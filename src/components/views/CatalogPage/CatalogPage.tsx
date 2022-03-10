import React from 'react';
import { InputContainer } from '../../containers/Input/Input';
import { ModalSign } from '../../containers/ModalSign/ModalSign';
import { SignInPageContainer } from '../../containers/SignInPage/SignInPage';
import { SignUpPageContainer } from '../../containers/SignUpPage/SignUpPage';
import { Container } from '../Container/Container';
import { Header } from '../Header/Header';
import { ICatalogPageView } from './CatalogPage.interface';

export const CatalogPageView = ({ isOpen, isClose, handleOnClickSetOpen }: ICatalogPageView) => {
  return (
    <>
      <Container>
        <Header handleOnClickSetOpen={handleOnClickSetOpen} />
        <main className="main_catalog_page">
          <h3>main</h3>
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
