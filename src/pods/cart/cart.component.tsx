import React from 'react';
import { Button, ButtonPurchase } from '@/commons';
import { EntregaComponent, PrimaryComponentCart } from './components';
import * as classes from './cart.styles';

export const CartComponent: React.FC = () => {
  return (
    <div className={classes.content}>
      <PrimaryComponentCart />
      <EntregaComponent />
      <ButtonPurchase className={classes.btnPurchase}>
        <Button route="/checkout" className={classes.btn}>
          Ir al carrito
        </Button>
      </ButtonPurchase>
    </div>
  );
}
