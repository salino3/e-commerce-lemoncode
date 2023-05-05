import React from 'react';
import { Boletin, Footer, Header } from '@/commons';
import { ProductComponent } from '@/pods/product';
import * as classes from './product-layout.styles';


export const ProductLayout: React.FC = () => {

  return (
    <div className={classes.container}>
      <Header />
      <ProductComponent />
      <hr />
      <Boletin />
      <Footer />
    </div>
  );
}
