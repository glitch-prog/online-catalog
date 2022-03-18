import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CatalogPageContainer } from '../../components/containers/CatalogPage/CatalogPage';
import { LoadingProductPageContainer } from '../../components/containers/LoadingProductPage/LoadingProductPage';
import { SignInPageContainer } from '../../components/containers/SignInPage/SignInPage';
import { SignUpPageContainer } from '../../components/containers/SignUpPage/SignUpPage';
import { CATALOG_PAGE, LOADING_PRODUCT, SIGN_IN_PAGE, SIGN_UP_PAGE } from '../../constants/constants';

export function RootRouter() {
  return (
    <Routes>
      <Route path={SIGN_IN_PAGE} element={<SignInPageContainer />} />
      <Route path={SIGN_UP_PAGE} element={<SignUpPageContainer />} />
      <Route path={LOADING_PRODUCT} element={<LoadingProductPageContainer />} />
      <Route path={'/'} element={<CatalogPageContainer />} />
      {/* <Route
        path={CANVAS_PAGE}
        element={
          <PrivateRoute>
            <CanvasEditorContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={GALLERY_PAGE}
        element={
          <PrivateRoute>
            <CanvasGalleryContainer />
          </PrivateRoute>
        }
      />*/}
      {/* <Route path="/" element={< />} />  */}
    </Routes>
  );
}
