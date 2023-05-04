import React from 'react';
import { Button, InputCart } from '@/commons';
import * as classes from './entrega.styles';

export const EntregaComponent: React.FC = () => {


  return (
    <div className={classes.container}>
      <div>Entrega</div>
      <div className={classes.boxBtn}>
        <Button className={classes.btn}>
          <img src="/assets/delivery-icon.png" alt="delivery-icon" />
          &nbsp; Envío
        </Button>
        <Button className={classes.btn}>
          <img src="/assets/mail-icon.png" alt="mail-icon" />
          &nbsp; Correo
        </Button>
      </div>
      <div className={classes.description}>
        <div>Probar antes de comprar.Plazo de entrega 2-7 días.</div>
        <div>¿Dónde quiere que le entreguemos su pedido?</div>
        <div>Introduzca su dirección en el mapa o introduzca datos.</div>
      </div>
      <div className={classes.mapIcon}>
        <img src="/assets/fi_map-pin.png" alt="icon" /> Localice
      </div>
      <div className={classes.boxInput}>
        <InputCart pl="Ciudad o población" />
        <InputCart pl="Calle" />
        <InputCart pl="Número" />
        <InputCart pl="Piso" />
      </div>
    </div>
  );
}
