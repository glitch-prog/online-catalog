import React, { ChangeEvent, useState } from 'react';
import { InputFiles } from 'typescript';

export const LoadingProductPageContainer = () => {
  const [image, setImage] = useState('');
  const handleOnChange = (event: any) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
    };
    // reader.readAsDataURL(file);

    
  };

  return (
    <div>
      <input type="text" placeholder="Name" />
      <select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
      </select>
      <input type="number" placeholder="Price" />
      <input onChange={handleOnChange} type="file" accept=".png,.jpeg" />
      <button>Разместить товар</button>
      <img src={image} alt="" />
    </div>
  );
};
