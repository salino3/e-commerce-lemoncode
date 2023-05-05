import React from 'react';
import { Footer, Header } from '@/components';
import { ChackoutComponent } from '@/pods';
import * as classes from './checkout.styles';

export const CheckoutPage: React.FC = () => {

  return (
    <div className={classes.root}>
      <Header />
     <ChackoutComponent />
      <Footer />
    </div>
  );
}
