import React from 'react';
import {
  Header,
  Footer,
} from "../../components";
import { GridImages, PrimaryComponent } from '../../components-second-page';
import * as classes from './ropa-mujer.styles';


export const RopaMujerLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />

      {/* <div className={classes.boxDescription}>  */}
        <PrimaryComponent />
       {/* </div> */}
       <GridImages />
      <Footer />
    </div>
  );
}
