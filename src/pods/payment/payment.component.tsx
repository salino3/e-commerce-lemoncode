import React from 'react';
import * as classes from './payment.styles';

export const PaymentComponent: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.boxText}>
        <div className={classes.txtRoute}>Inicio/Cesta de la compra/Pedidos/Pago</div>
        <h1 className={classes.title}>
          <div>
            <img src="/assets/shape-arrow-left.png" alt="arrow-left" />
          </div>
          Orden de pago
        </h1>
        <div className={classes.description}>Todas las transacciones son seguras y están encriptadas</div>
        <div className={classes.boxImgs}>
          <img className={classes.card1} src="../../../public/assets/card1.png" alt="card" />
          <img className={classes.card2} src="../../../public/assets/card2.png" alt="card" />
        </div>
      </div >
      <div className={classes.boxForm}>

        <h2 className={classes.subTitle}>
          Tarjeta de crédito
        </h2>
      </div>

    </div>
  );
};
