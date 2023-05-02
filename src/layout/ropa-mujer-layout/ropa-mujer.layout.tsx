import React from 'react';
import { Header, Footer} from '@/components';
import { GridImages, PrimaryComponent } from '@/components-second-page';
import { PopUpComponent } from '@/components-third-page';
import { Boletin, Button } from '@/commons';
import * as classes from './ropa-mujer.styles';


export const RopaMujerLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <PrimaryComponent />
      <GridImages />
      <PopUpComponent className={classes.popup} />

      <Button route={"/product"} className={classes.buttonSecondPageLayout}>
        Los 12 productos siguientes
      </Button>
      <hr />
      <Boletin />
      <Footer />
    </div>
  );
}
