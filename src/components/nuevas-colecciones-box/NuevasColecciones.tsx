import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../commons';
import * as classes from './stylesNuevaColecciones';

export const NuevasColecciones: React.FC = () => {

  const isMobile: boolean = useMediaQuery({ minWidth: "725px" });

  return (
    <div className={classes.container}>
      <Button
        route={"/"}
        text={"Todas las colecciones"}
        className={classes.buttonNuevasColecciones}
      />

      <h2 className={classes.h2}>Nuevas colecciones</h2>
      {isMobile ? (
        <div className={classes.content}>
          <div className={classes.item}>
            <img src="/assets/nuevas-coleccion-1.png" alt="image" />
          </div>
          <div className={classes.item}>
            <img src="/assets/nuevas-colecciones-2.png" alt="image" />
          </div>
          <div className={classes.item}>
            <img src="/assets/nuevas-colecciones-3.png" alt="image" />
          </div>
        </div>
      ) : (
        <div className={classes.content}>
          <div className={classes.item}>
            <img src="/assets/nuevas-colecciones-4-mobile.png" alt="image" />
          </div>
          <div className={classes.item}>
            <img src="/assets/nuevas-colecciones-5-mobile.png" alt="image" />
          </div>
          <div className={classes.item}>
            <img src="/assets/nuevas-colecciones-6-mobile.png" alt="image" />
          </div>
        </div>
      )}
    </div>
  );
}
