import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Footer, Header } from '../../components';
import { MainComponent, SecundaryComponent } from '../../components-third-page';
import { Boletin } from '../../commons';
import * as classes from './product-layout.styles';


export const ProductLayout: React.FC = () => {

    // const isMobile: boolean = useMediaQuery({ maxWidth: "725px" });

  
  return (
    <div className={classes.container}>
      <Header />
      <MainComponent />
      <SecundaryComponent />
      <hr />
      <Boletin />
      <Footer />
    </div>
  );
}
