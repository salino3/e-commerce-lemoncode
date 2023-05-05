import React from 'react';
import { Button, Footer, Header } from '@/commons';
import { ButtonPurchase, EntregaComponent, PrimaryComponentCart } from '@/component-fourth-page';
import * as classes from './cart.styles';


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
