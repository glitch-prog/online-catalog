import React from 'react';
import { SignInPageView } from '../../views/SignInPage/SignInPage';

export const SignInPageContainer = () => {
  const handleOnClick = (event: React.MouseEvent) => {
    return event.target;
  };
  const handleOnChange = (event: React.ChangeEvent) => {
    return event.target;
  };

  return (
    <div>
      <SignInPageView
        handleOnChangeEmail={handleOnChange}
        handleOnChangePassword={handleOnChange}
        handleOnClick={handleOnClick}
      />
    </div>
  );
};
