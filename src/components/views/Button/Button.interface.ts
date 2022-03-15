import React from 'react';

export interface IButtonView {
  text: string;
  handleOnClick: (event: React.MouseEvent) => void;
  className: string;
}
