import React from 'react';
import { Boletin, Button, Footer, Header } from '@/commons';
import { RopaMujerComponent } from '@/pods';
import * as classes from './ropa-mujer.styles';

export const RopaMujerLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <RopaMujerComponent />
      <hr />
      <Boletin />
      <Footer />
    </div>
  );
};
