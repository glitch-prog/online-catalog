import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../config/firebase-config';
import { useAppDispatch } from '../../../hooks/reducingHooks';
import { SignInPageView } from '../../views/SignInPage/SignInPage';

export const SignInPageContainer = () => {
  // const dispatch = useAppDispatch();
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type == 'text') {
      setSignInEmail(event.target.value);
    } else {
      setSignInPassword(event.target.value);
    }
  };

  const handleOnClickSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      // dispatch({ type: 'SET_USER', payload: user });
      // dispatch({ type: 'SET_AUTH', payload: true });
      // navigate(CANVAS_PAGE);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <SignInPageView
        handleOnChangeEmail={handleOnChange}
        handleOnChangePassword={handleOnChange}
        handleOnClick={handleOnClickSignIn}
      />
    </div>
  );
};
