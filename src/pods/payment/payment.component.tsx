import React from 'react';
import { Button, InputCart } from '@/commons';
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
          <img className={classes.card1} src="/assets/card1.png" alt="card" />
          <img className={classes.card2} src="/assets/card2.png" alt="card" />
        </div>
      </div>
      <div className={classes.boxForm}>
        <h2 className={classes.subTitle}>Tarjeta de crédito</h2>
        <form className={classes.form}>
          <div className={classes.boxInputs}>
            <div className={classes.boxInput1}>
              <InputCart pl="Número de tarjeta" className={classes.input1} />
              <img src="/assets/fi_lock.png" alt="lock" />
            </div>
            <div className={classes.boxInput2}>
              <InputCart pl="Nombre del titular" className={classes.input2} />
            </div>
            <div className={classes.boxInput3}>
              <InputCart pl={`12 `} className={classes.input3} />
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 6L11 1"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={classes.boxInput4}>
              <InputCart pl="24" className={classes.input4} />
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 6L11 1"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={classes.boxInput5}>
              <InputCart pl="CVV" className={classes.input5} />
              <img src="/assets/question-mark-icon.png" alt="quastion-mark" />
            </div>
          </div>
          <div className={classes.text}>
            Importe a pagar <span>169,98 €</span>
          </div>
          <Button className={classes.button}>Pagar</Button>
        </form>
      </div>
    </div>
  );
};
