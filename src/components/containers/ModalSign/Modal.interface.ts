import React, { ReactNode } from 'react';

export interface IModal {
  children: ReactNode;
  isOpen: boolean;
  isClose: React.MouseEventHandler;
}
