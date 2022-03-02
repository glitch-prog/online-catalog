import React from 'react';

export interface IButtonContainer {
  text: string;
  handleOnClick: (event: React.MouseEvent) => void;
  className: string;
}
