import React from 'react';
import { IContainer } from './Container.interface';
import './Container.css';

export const Container = ({ children }: IContainer) => {
  return <div className="container">{children}</div>;
};
