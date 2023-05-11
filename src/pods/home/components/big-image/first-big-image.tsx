import React from 'react';
import { Button } from '@/commons';
import { switchRoutes } from '@/router/routes';
import * as classes from './big-image.styles';

export const FirstBigImage: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.message}>
          <p>ENVÍO GRATUITO EN TODOS LOS PEDIDOS</p>
          <div>COLECCIÓN DE DEPORTES</div>
        </div>
        <Button route={switchRoutes.woman} className={classes.button}>
          Me interesa
        </Button>
      </div>
    </div>
  );
}
