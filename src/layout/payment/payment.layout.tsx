import React from 'react';
import { Footer, Header } from '@/commons';
import { PaymentComponent } from '@/pods/payment';
import * as classes from './payment-layout.styles';

export const PaymentLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <PaymentComponent />
      <Footer />
    </div>
  );
}
