import React from 'react';
import { useAppSelector } from '../../../hooks/reducingHooks';

export const CartPageView = ({ arr, removeItem }: any) => {
  return (
    <div>
      {arr.map((el: any) => (
        <div className="product__card" key={el.id}>
          <img src={el.img} alt="img" />
          <div className="product__info">
            <p>{el.name}</p>
            <p>{el.description}</p>
            <h4>{el.seller}</h4>
          </div>
          <button onClick={() => removeItem(el.id)}>remove from cart</button>
        </div>
      ))}
    </div>
  );
};
