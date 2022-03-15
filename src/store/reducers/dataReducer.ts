import { AnyAction } from '@reduxjs/toolkit';

export interface ICard {
  description: string;
  id: string;
  img: string;
  seller: string;
}

interface IDefaultGalleryState {
  cards: ICard[];
}

const defaultDataState: IDefaultGalleryState = {
  cards: [{ description: 'test', id: 'testId', img: 'testImg', seller: 'testSeller' }],
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
