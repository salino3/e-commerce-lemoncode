import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Footer, Header } from '../../components';
import { MainComponent } from '../../components-third-page';
import { ListComponent } from '../../components-second-page';
import { Boletin, Button } from '../../commons';
import * as classes from './product-layout.styles';


export const ProductLayout: React.FC = () => {

    // const isMobile: boolean = useMediaQuery({ maxWidth: "725px" });

  
  return (
    <div className={classes.container}>
      <Header />
   
      <MainComponent />

      <h1>ProductLayout</h1>
      <Boletin />
      <Footer />
    </div>
  );
}
