import React from 'react';

export interface ISignInPageView {
  handleOnChangeEmail: (event: React.ChangeEvent) => void;
  handleOnChangePassword: (event: React.ChangeEvent) => void;
  handleOnClick: (event: React.MouseEvent) => void;
}
