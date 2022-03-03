import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../config/firebase-config';
import { useAppDispatch } from '../../../hooks/reducingHooks';
import { SignUpPageView } from '../../views/SignUpPage/SignUpPage';

export const SignUpPageContainer = () => {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type == 'text') {
      setSignUpEmail(event.target.value);
    } else {
      setSignUpPassword(event.target.value);
    }
  };

  const handleOnClickSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      // dispatch({ type: 'SET_USER', payload: user });
      // navigate(CANVAS_PAGE);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <SignUpPageView
        handleOnChangeEmail={handleOnChange}
        handleOnChangePassword={handleOnChange}
        handleOnClick={handleOnClickSignUp}
      />
    </div>
  );
};
