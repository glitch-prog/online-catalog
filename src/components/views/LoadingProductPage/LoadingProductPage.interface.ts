import { ChangeEventHandler } from 'react';

export interface ILoadingProductPageView {
  handleOnClickLoadProduct: () => void;
  handleOnChange: any;
  setName: ChangeEventHandler;
  setDescription: ChangeEventHandler;
  image: string;
}
