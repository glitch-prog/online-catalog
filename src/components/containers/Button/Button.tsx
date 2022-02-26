import React from 'react';
import { ButtonView } from '../../views/Button/Button';

export const ButtonContainer = () => {
  return (
    <>
      <ButtonView
        text='Click me'
        handleOnClick={() => console.log('clicked')}
        className='sign__up__btn'
      />
    </>
  );
};
