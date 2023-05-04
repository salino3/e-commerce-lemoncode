import React from 'react';
import { Footer, Header } from '@/components';
import { ButtonPurchase, EntregaComponent, PrimaryComponentCart } from '@/component-fourth-page';
import * as classes from './cart.styles';
import { Button } from '@/commons';


export const CartLayout: React.FC = () => {

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <PrimaryComponentCart />
        <EntregaComponent />
        <ButtonPurchase className={classes.btnPurchase}>
          <Button route="/checkout" className={classes.btn}>
            Ir al carrito
          </Button>
        </ButtonPurchase>
      </div>
      <Footer />
    </div>
  );
}
