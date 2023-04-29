import React from 'react';
import { Footer, Header } from '../../components';
import { Boletin } from '../../commons';
import * as classes from './produc-layout.styles';

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
