import React from 'react';
import { ButtonView } from '../../views/Button/Button';
import { IButtonContainer } from './Button.interface';

export const ButtonContainer = ({ text, handleOnClick, className }: IButtonContainer) => {
  return (
    <>
      <ButtonView text={text} handleOnClick={handleOnClick} className={className} />
    </>
  );
};
