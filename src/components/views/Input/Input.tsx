import React from 'react';
import { IInputView } from './Input.interface';

export const InputView = ({ type = 'text', handleOnChange, className }: IInputView) => {
  return (
    <>
      <input type={type} onChange={handleOnChange} className={className} />
    </>
  );
};
