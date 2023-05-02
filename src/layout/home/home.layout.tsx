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
} from '@/components';
import { Boletin, Button } from '@/commons';
import * as classes from './home.styles';

export const HomeLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.boxDescription}>
        <img
          className={classes.imgPrimary}
          src="/assets/MainImage.png"
          alt="home-image"
        />
        <Description />
      </div>
      <ActualBox />
      <ExitoVentas />
      <Button route={"/woman"} className={classes.buttonHomeLayout}>
        Todos los éxitos
      </Button>
      <NuevasColecciones />
      <Button route={"/woman"} className={classes.buttonHomeLayout}>
        Todas las colecciones
      </Button>
      <NuevosProductos />
      <FirstBigImage />
      <ImageDown />
      <hr />
      <Boletin />
      <Footer />
    </div>
  );
};
