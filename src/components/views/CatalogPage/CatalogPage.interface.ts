import React from 'react';

export interface ICatalogPageView {
  isOpen: boolean;
  isClose: React.MouseEventHandler;
  handleOnClickSetOpen: () => void;
}
