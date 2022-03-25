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
  cards: ICard[];
}

const defaultDataState: IDefaultGalleryState = {
  cards: [{ description: 'test', id: 'testId', img: 'testImg', seller: 'testSeller', name: 'testName' }],
};

export const dataReducer = (state = defaultDataState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.payload] };

    case 'GET_CARDS':
      return { ...state, cards: action.payload };

    default:
      return state;
  }
};
