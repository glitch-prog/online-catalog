import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartPageContainer } from '../../components/containers/CartPage/CartPage';
import { CatalogPageContainer } from '../../components/containers/CatalogPage/CatalogPage';
import { LoadingProductPageContainer } from '../../components/containers/LoadingProductPage/LoadingProductPage';
import { SignInPageContainer } from '../../components/containers/SignInPage/SignInPage';
import { SignUpPageContainer } from '../../components/containers/SignUpPage/SignUpPage';
import { CART_PAGE, CATALOG_PAGE, LOADING_PRODUCT, SIGN_IN_PAGE, SIGN_UP_PAGE } from '../../constants/constants';

export function RootRouter() {
  return (
    <Routes>
      <Route path={SIGN_IN_PAGE} element={<SignInPageContainer />} />
      <Route path={CART_PAGE} element={<CartPageContainer />} />
      <Route path={SIGN_UP_PAGE} element={<SignUpPageContainer />} />
      <Route path={LOADING_PRODUCT} element={<LoadingProductPageContainer />} />
      <Route path={'/'} element={<CatalogPageContainer />} />
    </Routes>
  );
}
