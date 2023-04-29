import React from 'react';
import * as classes from './produc-layout.styles';
import { Footer, Header } from '../../components';
import { Boletin } from '../../commons';

export const ProductLayout: React.FC = () => {
    
  return (
    <div className={classes.container}>
      <Header />
      <h1>ProductLayout</h1>
      <Boletin />
      <Footer />
    </div>
  );
}
