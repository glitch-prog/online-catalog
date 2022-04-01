import { AnyAction } from '@reduxjs/toolkit';
import { StringLiteralLike } from 'typescript';

export interface ICard {
  description: string;
  name: string;
  id: string;
  img: string;
  seller: string;
}

interface IDefaultGalleryState {
  cartCards: ICard[];
}

const defaultDataState: IDefaultGalleryState = {
  cartCards: [],
};

export const cartReducer = (state = defaultDataState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cartCards: [...state.cartCards, action.payload] };

    case 'REMOVE_FROM_CART':
      return { ...state, cartCards: action.payload };

    default:
      return state;
  }
};
