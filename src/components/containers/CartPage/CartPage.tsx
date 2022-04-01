import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reducingHooks';
import { CartPageView } from '../../views/CartPage/CartPage';

export const CartPageContainer = () => {
  const dispatch = useAppDispatch();
  const cartArr = useAppSelector(state => state.cart.cartCards);
  const removeItem = (id: any) => dispatch({ type: 'REMOVE_FROM_CART', payload: cartArr.filter((el: any) => el.id != id) });
  return <CartPageView arr={cartArr} removeItem={removeItem} />;
};
