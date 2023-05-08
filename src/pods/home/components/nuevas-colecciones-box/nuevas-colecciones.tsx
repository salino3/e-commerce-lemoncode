import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { CardComponent } from '@/commons';
import * as classes from './nueva-colecciones.styles';

export const NuevasColecciones: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ minWidth: '725px' });

  return (
    <div id='nuevas-colecciones' className={classes.container}>
      <h2 className={classes.h2}>Nuevas colecciones</h2>
      {isMobile ? (
        <div className={classes.content}>
          <Link to={'/mujer'}>
            <CardComponent className={classes.item} routeImg="/assets/nuevas-colecciones1.png" />
          </Link>
          <Link to={'/mujer'}>
            <CardComponent className={classes.item} routeImg="/assets/nuevas-colecciones2.png" />
          </Link>
          <Link to={'/mujer'}>
            <CardComponent className={classes.item} routeImg="/assets/nuevas-colecciones3.png" />
          </Link>
        </div>
      ) : (
        <div className={classes.content}>
          <Link to={'/mujer'}>
          <CardComponent className={classes.item} routeImg="/assets/mobile-coleccion1.png" />
          </Link>
          <Link to={'/mujer'}>
          <CardComponent className={classes.item} routeImg="/assets/mobile-coleccion2.png" />
          </Link>
          <Link to={'/mujer'}>
          <CardComponent className={classes.item} routeImg="/assets/mobile-coleccion3.png" />
          </Link>
        </div>
      )}
    </div>
  );
};
