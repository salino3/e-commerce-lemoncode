import React from 'react';
import { Footer, Header } from '@/components';
import { MainComponent, SecundaryComponent } from '@/components-third-page';
import { Boletin, Button } from '@/commons';
import * as classes from './product-layout.styles';


export const ProductLayout: React.FC = () => {
  
  return (
    <div className={classes.container}>
      <Header />
      <MainComponent />
      <SecundaryComponent />
      <Button className={classes.buttonThirdPageLayout}>
        Los 12 productos siguientes
      </Button>
      <hr />
      <Boletin />
      <Footer />
    </div>
  );
}
