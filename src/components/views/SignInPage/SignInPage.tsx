import React from 'react';
import { ButtonContainer } from '../../containers/Button/Button';
import { InputContainer } from '../../containers/Input/Input';
import { ISignInPageView } from './SignInPage.interface';

export const SignInPageView = ({handleOnClick,handleOnChangeEmail,handleOnChangePassword}:ISignInPageView) => {
  return (
    <>
      <InputContainer
        type='text'
        handleOnChange={handleOnChangeEmail}
        className='sign__in__input'
      />
      <InputContainer
        type='password'
        handleOnChange={handleOnChangePassword}
        className='sign__in__input'
      />
      <ButtonContainer
        text='Click me'
        handleOnClick={handleOnClick}
        className='sign__in__btn'
      />
    </>
  );
};
