import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { CardComponent } from '../../commons';
import * as classes from './nueva-colecciones.styles';

export const NuevasColecciones: React.FC = () => {

  const isMobile: boolean = useMediaQuery({ minWidth: "725px" });

  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Nuevas colecciones</h2>
      {isMobile ? (
        <div className={classes.content}>
          <CardComponent className={classes.item} routeImg="/assets/nuevas-colecciones-1.png" />
          <CardComponent className={classes.item} routeImg="/assets/nuevas-colecciones-2.png" />
          <CardComponent className={classes.item} routeImg="/assets/nuevas-colecciones-3.png" />
        </div>
      ) : (
        <div className={classes.content}>  
          <CardComponent className={classes.item} routeImg="/assets/nuevas-colecciones-4-mobile.png" />
          <CardComponent className={classes.item} routeImg="/assets/nuevas-colecciones-5-mobile.png" />
          <CardComponent className={classes.item} routeImg="/assets/nuevas-colecciones-6-mobile.png" />
        </div>
      )}
    </div>
  );
}
