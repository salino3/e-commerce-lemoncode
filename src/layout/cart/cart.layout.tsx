import React from 'react';
import { Footer, Header } from '@/components';
import { EntregaComponent, PrimaryComponentCart } from '@/component-fourth-page';
import * as classes from './cart.styles';


export const CartLayout: React.FC = () => {

  return (
      <div className={classes.container}>
        <Header />
        <div className={classes.content}>
        <PrimaryComponentCart />
        <EntregaComponent />
        </div>
        <Footer />
      </div>
      );
}
