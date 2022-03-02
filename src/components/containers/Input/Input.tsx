import React from 'react';
import { InputView } from '../../views/Input/Input';
import { IInputContainer } from './Input.interface';

export const InputContainer = ({
  type,
  handleOnChange,
  className,
}: IInputContainer) => {
  return (
    <>
      <InputView
        type={type}
        handleOnChange={handleOnChange}
        className={className}
      />
    </>
  );
};
