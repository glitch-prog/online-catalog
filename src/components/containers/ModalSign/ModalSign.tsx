import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { IModal } from './Modal.interface';
import './Modal.css';
import { arrayUnion } from 'firebase/firestore';
import { SignInPageContainer } from '../SignInPage/SignInPage';
import { SignUpPageContainer } from '../SignUpPage/SignUpPage';

const modalRootElement = document.querySelector('#modal__sign');

export const ModalSign = ({ children, isOpen, isClose }: IModal) => {
  const element = useMemo(() => {
    const el = document.createElement('div');
    return el;
  }, []);

  const [option, setOption] = useState('sign in');

  useEffect(() => {
    if (modalRootElement != null && isOpen) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  if (isOpen) {
    return createPortal(
      <>
        <div className="modal" onClick={isClose}>
          <div className="sign">
            <div className='sign__options'>
              <p onClick={()=>setOption('sign in')}>Sign In</p>
              <p onClick={()=>setOption('sign up')}>Sign Up</p>
            </div>
            {option =='sign in'?<SignInPageContainer/>:<SignUpPageContainer/>}
          </div>
        </div>
      </>,
      element,
    );
  }
  return null;
};
