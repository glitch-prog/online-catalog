import React from 'react';
import { InputView } from '../../views/Input/Input';

export const InputContainer = () => {
  return (
    <>
      <InputView
        type='text'
        handleOnChange={() => console.log('changed')}
        className='sign__in__input'
      />
    </>
  );
};
