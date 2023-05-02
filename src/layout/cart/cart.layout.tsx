import React from 'react';
import { Footer, Header } from '@/components';
import { Boletin } from '@/commons';
import { PrimaryComponentCart } from '@/component-fourth-page';
import * as classes from './cart.styles';


export const CartLayout: React.FC = () => {


  return (
      <div className={classes.container}>
        <Header />
        <PrimaryComponentCart />
        <Boletin />
        <Footer />

         
      </div>
      );
}
