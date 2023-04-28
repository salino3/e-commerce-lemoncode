import React from 'react';
import {
  Header,
  Footer,
} from "../../components";
import { GridImages, PrimaryComponent } from '../../components-second-page';
import { Button } from '../../commons';
import * as classes from './ropa-mujer.styles';


export const RopaMujerLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />

      <PrimaryComponent />
      <GridImages />
      <Button
        route={"/woman"}
        className={classes.buttonSecondPageLayout}
        text={"los 12 productos siguientes"}
      />
      <Footer />
    </div>
  );
}
