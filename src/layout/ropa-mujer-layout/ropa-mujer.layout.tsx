import React from 'react';
import { Boletin, Footer, Header } from '@/commons';
import { RopaMujerComponent } from '@/pods';
import * as classes from './ropa-mujer.styles';

export const RopaMujerLayout: React.FC = () => {

const handleScroll = () => {
  window.scrollTo(0, 0);
};

 React.useEffect(() => {
  handleScroll();
  }, []);


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
