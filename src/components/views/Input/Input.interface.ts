import React from 'react';

export interface IInputView {
  type: string;
  handleOnChange: (event: React.ChangeEvent) => void;
  className: string;
}
