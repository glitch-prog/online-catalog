import { DocumentData } from 'firebase/firestore';
import React from 'react';
import { ICard } from '../../../store/reducers/dataReducer';

export interface ICatalogPageView {
  isOpen: boolean;
  isClose: React.MouseEventHandler;
  handleOnClickSetOpen: () => void;
  data: ICard;
  handleOnClickNavigateToAddPage: () => void;
}
