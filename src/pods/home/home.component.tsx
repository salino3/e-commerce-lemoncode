import React from 'react';
import { Button } from '@/commons';
import { ActualBox, Description, ExitoVentas, FirstBigImage, ImageDown, NuevasColecciones, NuevosProductos } from './components';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {

  return (
    <div className={classes.root}>
      <div className={classes.boxDescription}>
        <img className={classes.imgPrimary} src="/assets/primaryImage2.png" alt="home-image" />
        <Description />
      </div>
      <ActualBox />
      <ExitoVentas />
      <Button route={'/mujer'} className={classes.buttonHomeLayout}>
        Todos los éxitos
      </Button>
      <NuevasColecciones />
      <Button route={'/mujer'} className={classes.buttonHomeLayout}>
        Todas las colecciones
      </Button>
      <NuevosProductos />
      <FirstBigImage />
      <ImageDown />

    </div>
  );
}
