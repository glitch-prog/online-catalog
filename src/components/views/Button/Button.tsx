import React from 'react';
import { IButtonView } from './Button.interface';

export const ButtonView = ({ text = 'click', handleOnClick, className }: IButtonView) => {
  return (
    <>
      <button className={className} onClick={handleOnClick}>
        {text}
      </button>
    </>
  );
};
