import React, { useState } from 'react';
import { CatalogPageView } from '../../views/CatalogPage/CatalogPage';

export const CatalogPageContainer = () => {
  const [open, setOpen] = useState(false);

  const handleOnClickSetClose = () => {
    setOpen(false);
  };

  const handleOnClickSetOpen = () => {
    setOpen(true);
  };

  return <CatalogPageView isClose={handleOnClickSetClose} isOpen={open} handleOnClickSetOpen={handleOnClickSetOpen} />;
};
