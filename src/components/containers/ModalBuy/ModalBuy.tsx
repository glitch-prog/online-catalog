import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalBuyView } from '../../views/ModalBuy/ModalBuy';

const modalRootElement = document.querySelector('#modal__buy');

export const ModalBuyContainer = ({ isBuy, el }: any) => {
  const element = useMemo(() => {
    const el = document.createElement('div');
    return el;
  }, []);

  useEffect(() => {
    if (modalRootElement != null && isBuy) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  if (isBuy) return createPortal(<ModalBuyView el={el} />, element);

  return null;
};
