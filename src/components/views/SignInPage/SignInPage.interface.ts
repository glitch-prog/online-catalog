import React from 'react';

export interface ISignInPageView {
  handleOnChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: (event: React.MouseEvent) => void;
}
