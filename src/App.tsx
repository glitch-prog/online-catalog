import React from 'react';
import { ModalSign } from './components/containers/ModalSign/ModalSign';
import { SignInPageContainer } from './components/containers/SignInPage/SignInPage';
import { SignUpPageContainer } from './components/containers/SignUpPage/SignUpPage';
import { RootRouter } from './router/routes/RootRouter';

function App() {
  return (
    <>
      <RootRouter />
    </>
  );
}

export default App;
