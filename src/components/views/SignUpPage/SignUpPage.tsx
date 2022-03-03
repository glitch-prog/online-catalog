import React from 'react';
import { ButtonContainer } from '../../containers/Button/Button';
import { InputContainer } from '../../containers/Input/Input';
import { ISignInPageView } from '../SignInPage/SignInPage.interface';

export const SignUpPageView = ({handleOnClick,handleOnChangeEmail,handleOnChangePassword}:ISignInPageView) => {
  return <div><>
      <InputContainer
        type='text'
        handleOnChange={handleOnChangeEmail}
        className='sign__input'
      />
      <InputContainer
        type='password'
        handleOnChange={handleOnChangePassword}
        className='sign__input'
      />
      <ButtonContainer
        text='Click me'
        handleOnClick={handleOnClick}
        className='sign__btn'
      />
    </></div>;
};
