import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { IModal } from './Modal.interface';
import './Modal.css';

const modalRootElement = document.querySelector('#modal__sign');

export const ModalSign = ({ children, isOpen, isClose }: IModal) => {
  const element = useMemo(() => {
    const el = document.createElement('div');
    return el;
  }, []);

  useEffect(() => {
    if (modalRootElement != null) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  if (isOpen) {
    return createPortal(
      <div className="modal" onClick={isClose}>
        {children}
      </div>,
      element,
    );
  } else {
    return null;
  }
};
