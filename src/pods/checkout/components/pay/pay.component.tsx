import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './pay.styles';

interface Props {
  className?: string;
}

export const PayComponent: React.FC<Props> = (props) => {
  const {className} = props;

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
        Importe del descuento: <span>0 €</span>
      </div>
      <hr />
      <div >
        Importe total: <span>169,98 €</span>
      </div>
    </div>
  );
}
