import React from 'react';
import { ILoadingProductPageView } from './LoadingProductPage.interface';

export const LoadingProductPageView = ({ handleOnChange, image }: ILoadingProductPageView) => {
  return (
    <>
      <input type="text" placeholder="Name" className="form__input" />
      <select name="Type" id="">
        <option value="">1</option>
        <option value="">2</option>
      </select>
      <input type="number" placeholder="Price" className="form__input" />
      <input onChange={handleOnChange} type="file" accept=".png,.jpeg" />
      <button>Разместить товар</button>
      <img src={image} alt="image" />
    </>
  );
};
