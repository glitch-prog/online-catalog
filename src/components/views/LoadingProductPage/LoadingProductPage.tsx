import { Button, Input } from '@mui/material';
import React from 'react';
import { ILoadingProductPageView } from './LoadingProductPage.interface';
// import LoadingButton from '@mui/lab/LoadingButton';

export const LoadingProductPageView = ({ handleOnChange, handleOnClickLoadProduct, image, setName, setDescription }: ILoadingProductPageView) => {
  return (
    <>
      <div className="product__name">
        <h3>Product name</h3>
        <input type="text" placeholder="Name" className="form__input" onChange={setName} />
      </div>
      <div className="product__category">
        <h3>Product category</h3>
        <select name="Type" id="">
          <option value="">1</option>
          <option value="">2</option>
        </select>
      </div>
      <div className="product__price">
        <h3>Product price</h3>
        <input type="number" placeholder="Price" className="form__input" />
      </div>
      <div className="product__photo">
        <h3>Choose a product's photo</h3>
        <input onChange={handleOnChange} type="file" accept=".png,.jpeg,.jpg,.jfif" />
      </div>

      <div className="product__description">
        <h3>Description</h3>
        <textarea name="description__textarea" id="" cols={30} rows={10} onChange={setDescription}></textarea>
      </div>
      <button onClick={handleOnClickLoadProduct}>Разместить товар</button>
      <img src={image} alt="image" />
    </>
  );
};
