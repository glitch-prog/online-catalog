import React from 'react';
import { useAppSelector } from '../../../hooks/reducingHooks';
import { CartPageView } from '../../views/CartPage/CartPage';

export const CartPageContainer = () => {
  const cart = useAppSelector(state => state.cart.cartCards);
  return <CartPageView arr={[{ name: 1 }, { name: 2 }]} />;
};
