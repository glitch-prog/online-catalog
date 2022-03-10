import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { IModal } from './Modal.interface';
import './Modal.css';
import { arrayUnion } from 'firebase/firestore';

const modalRootElement = document.querySelector('#modal__sign');

export const ModalSign = ({ children, isOpen, isClose }: IModal) => {
  const element = useMemo(() => {
    const el = document.createElement('div');
    return el;
  }, []);

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
          <div className="sign">{children}</div>
        </div>
      </>,
      element,
    );
  }
  return null;
};
