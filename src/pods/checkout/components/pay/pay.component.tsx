import React from 'react';
import { cx } from '@emotion/css';
import { Button } from '@/commons';
import * as classes from './pay.styles';

interface Props {
  className?: string;
}

export const PayComponent: React.FC<Props> = (props) => {
  const {className} = props;

  return (
    <div className={cx(classes.container, className)}>
      <div className={classes.div}>
        Importe total del pedido
      </div>
      <div className={classes.div}>
        Coste de los bienes: <span>159.98 €</span>
      </div>
      <div className={classes.div}>
        Entrega: <span>10 €</span>
      </div>
      <div className={classes.div}>
        Importe del descuento: <span>0 €</span>
      </div>
      <hr />
      <div className={classes.lastDiv}>
        Importe total: <span>169,98 €</span>
      </div>
      <Button className={classes.btn}>Pagar</Button>
    </div>
  );
}
