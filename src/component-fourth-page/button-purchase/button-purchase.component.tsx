import React from 'react';
import * as classes from './button-purchase.styles';
import { Button } from '@/commons';

export const ButtonPurchase: React.FC = () => {
  return (
    <div className={classes.container}>
      <div>
        Importe total del pedido: <span>169.98 €</span>
      </div>
      <div>
        Coste de los bienes: <span>159.98 €</span>
      </div>
      <div>
        Entrega: <span>10 €</span>
      </div>
      <div>
        Importe del descuento: <span>169.98 €</span>
      </div>
      <Button className={classes.btn}>Ir al carrito</Button>
    </div>
  );
}
