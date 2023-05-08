import React from 'react';
import { MainComponent, SecundaryComponent } from './components';
import * as classes from './product.styles';


export const ProductComponent: React.FC = () => {
  return (
    <>
      <MainComponent />
      <SecundaryComponent />
    </>
  );
}