import React, { ChangeEvent, useState } from 'react';
import { InputFiles } from 'typescript';
import { LoadingProductPageView } from '../../views/LoadingProductPage/LoadingProductPage';

export const LoadingProductPageContainer = () => {
  const [image, setImage] = useState<any>();
  const handleOnChange = (event: any) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <LoadingProductPageView handleOnChange={handleOnChange} image={image} />
    </div>
  );
};
