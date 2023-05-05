import React from 'react';
import { Boletin, Button, Footer, Header } from '@/commons';
import { RopaMujerComponent } from '@/pods';
import * as classes from './ropa-mujer.styles';

export const RopaMujerLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <RopaMujerComponent />
      <Button route={'/product'} className={classes.buttonSecondPageLayout}>
        Los 12 productos siguientes
      </Button>
      <hr />
      <Boletin />
      <Footer />
    </div>
  );
};
