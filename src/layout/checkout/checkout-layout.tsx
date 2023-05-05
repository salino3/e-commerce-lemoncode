import React from 'react';
import { Footer, Header } from '@/components';
import { Button, InputCart } from '@/commons';
import { ButtonPurchase } from '@/component-fourth-page';
import * as classes from './checkout.styles';

export const CheckoutPage: React.FC = () => {

  return (
    <div className={classes.root}>
      <Header />
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

        <ButtonPurchase className={classes.btnPurchase}>
          <>
            <hr />
            <div className={classes.item}>
            <div>Importe total:</div> <span>169,98 €</span>
          </div>

            <Button route="/checkout" className={classes.btn}>
              Pagar
            </Button>
          </>
        </ButtonPurchase>
      </div>
      <Footer />
    </div>
  );
}
