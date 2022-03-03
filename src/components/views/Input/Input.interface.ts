import React from 'react';

export interface IInputView {
  type: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}
