import React from 'react';
import {
  Header,
  Footer,
} from "../../components";
import * as classes from './ropa-mujer.styles';
import { PrimaryComponent } from '../../components-second-page';


export const RopaMujerLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.boxDescription}>
        <PrimaryComponent />
      </div>
      <Footer />
    </div>
  );
}
