import React from 'react';
import {
  ActualBox,
  ExitoVentas,
  Header,
  Description,
  NuevasColecciones,
  NuevosProductos,
  FirstBigImage,
  ImageDown,
  Footer,
} from "../../components";
import * as classes from './ropa-mujer.styles';
import { Aside } from '../../components-second-page';


export const RopaMujerLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.boxDescription}>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}
