import React from 'react';
import { Footer, Header } from '@/commons';
import { CartComponent } from '@/pods';
import * as classes from './cart.styles';


export const CartLayout: React.FC = () => {

  return (
    <div className={classes.container}>
      <Header />
       <CartComponent />
      <Footer />
    </div>
  );
}
