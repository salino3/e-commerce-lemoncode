import React from 'react';
import { Footer, Header } from '@/commons';
import { PaymentComponent } from '@/pods/payment';
import * as classes from './payment-layout.styles';

export const PaymentLayout: React.FC = () => {

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    handleScroll();
  }, []);


  return (
    <div className={classes.root}>
      <Header />
      <PaymentComponent />
      <Footer />
    </div>
  );
}
