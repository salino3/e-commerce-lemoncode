import React from 'react';
import { Button, ButtonPurchase } from '@/commons';
import { PrimaryComponentCart } from './components/primary-component-cart';
import { switchRoutes } from '@/router/routes';
import { EntregaComponent } from './components/entrega';
import * as classes from './cart.styles';

export const CartComponent: React.FC = () => {
  return (
    <div className={classes.content}>
      <PrimaryComponentCart />
      <EntregaComponent />
      <ButtonPurchase className={classes.btnPurchase}>
        <Button route={switchRoutes.checkout} className={classes.btn}>
          Ir al carrito
        </Button>
      </ButtonPurchase>
    </div>
  );
}
