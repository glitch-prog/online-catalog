import React from 'react';
import './Modal.css';

export const ModalBuyView = ({ el }: any) => {
  if (el.name)
    return (
      <div className="modal">
        <div className="buy__modal">
          <h3>{el.name}</h3>
        </div>
      </div>
    );

  return null;
};
