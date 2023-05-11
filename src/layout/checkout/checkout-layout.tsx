import React from 'react';
import { Footer, Header } from '@/commons';
import { CheckoutComponent } from '@/pods';
import * as classes from './checkout.styles';

export const CheckoutPage: React.FC = () => {

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    handleScroll();
  }, []);


  return (
    <div className={classes.root}>
      <Header />
     <CheckoutComponent />
      <Footer />
    </div>
  );
};
