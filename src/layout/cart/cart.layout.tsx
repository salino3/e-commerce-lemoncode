import React from 'react';
import { Footer, Header } from '@/commons';
import { CartComponent } from '@/pods';
import * as classes from './cart.styles';


export const CartLayout: React.FC = () => {

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    handleScroll();
  }, []);


  return (
    <div className={classes.container}>
      <Header />
       <CartComponent />
      <Footer />
    </div>
  );
}
