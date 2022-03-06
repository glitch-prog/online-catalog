import React from 'react';
import { InputContainer } from '../../containers/Input/Input';
import { Container } from '../Container/Container';
import { Header } from '../Header/Header';

export const CatalogPageView = () => {
  return (
    <>
      <Container>
        <Header />
        <main className="main_catalog_page">
          <h3>main</h3>
        </main>

        <footer className="footer_catalog_page">
          <h3>footer</h3>
        </footer>
      </Container>
    </>
  );
};
