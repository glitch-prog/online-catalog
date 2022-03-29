import { DocumentData } from 'firebase/firestore';
import React, { MouseEventHandler } from 'react';
import { ICard } from '../../../store/reducers/dataReducer';

export interface ICatalogPageView {
  isOpen: boolean;
  isClose: React.MouseEventHandler;
  handleOnClickSetOpen: () => void;
  data: ICard;
  handleOnClickNavigateToAddPage: () => void;
  handleOnClickNavigateToCart: () => void;
  // handleOnClickAddToCart: (el: any) => any;
}
