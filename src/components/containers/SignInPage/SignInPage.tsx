import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../../config/firebase-config';
import { CATALOG_PAGE } from '../../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../../hooks/reducingHooks';
import { SignInPageView } from '../../views/SignInPage/SignInPage';
import { returnError } from '../../../functions/Toasts/ToastError';
import 'react-toastify/dist/ReactToastify.css';

export const SignInPageContainer = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

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
      const user = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      // dispatch({ type: 'SET_USER', payload: user });
      dispatch({ type: 'SET_AUTH', payload: true });
      console.log(isAuth);
    } catch (e) {
      returnError('Wrong email or password!');
    }
  };

  return (
    <div>
      <SignInPageView handleOnChangeEmail={handleOnChange} handleOnChangePassword={handleOnChange} handleOnClick={handleOnClickSignIn} />
      <ToastContainer />
    </div>
  );
};
