import React, { Children } from 'react';
import { cx } from '@emotion/css';
import { Button } from '@/commons';
import * as classes from './button-purchase.styles';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const ButtonPurchase: React.FC<Props> = (props) => {
  const {children, className} = props;

  return (
    <div className={cx(classes.container, className)}>
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
     {children}
    </div>
  );
}
