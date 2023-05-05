import React from 'react';
import { Button, InputCart } from '@/commons';
import { PayComponent } from './components';
import * as classes from './checkout.styles';


export const ChackoutComponent: React.FC = () => {
  return (
    <div className={classes.grid}>
      <div className={classes.container}>
        <h1>
          <img src="/assets/shape-arrow-left.png" alt="arrow-left" />
          Pedidos
        </h1>
        <h2>Datos de contacto</h2>
        <div className={classes.boxInputs}>
          <InputCart pl="Nombre" />
          <InputCart pl="Apellido" />
          <InputCart pl="E-mail" />
          <InputCart pl="Teléfono" />
        </div>
        <h2>Dirección de entrega</h2>
        <p>España, Madrid, Andrés Mellado, 77</p>
        <div className={classes.text}>Cambiar dirección</div>
        <div className={classes.buttons}>
          <h2>Forma de pago</h2>
          <div>
            <Button>Pago en línea</Button>
            <Button>Al recibir</Button>
          </div>
        </div>
      </div>
      <div>

      <PayComponent />
      </div>
    </div>
  );
}
