import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { HomeCard } from '../card-home';
import * as classes from './nueva-colecciones.styles';

export const NuevasColecciones: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ minWidth: '725px' });


  return (
    <div id="nuevas-colecciones" className={classes.container}>
      <h2 className={classes.h2}>Nuevas colecciones</h2>
      {isMobile ? (
        <div className={classes.content}>
          <HomeCard imgUrl="/assets/gallery/new-collection-desktop1.png" text="Primavera/Verano 2022" route="/mujer" />
          <HomeCard imgUrl="/assets/gallery/new-collection-desktop2.png" text="Vaqueros" route="/mujer" />
          <HomeCard imgUrl="/assets/gallery/new-collection-desktop3.png" text="Bañadores" route="/mujer" />
        </div>
      ) : (
        <div className={classes.content}>
          <HomeCard imgUrl="/assets/gallery/new-collection1.png" text="Primavera/Verano 2022" route="/mujer" />
          <HomeCard imgUrl="/assets/gallery/new-collection2.png" text="Vaqueros" route="/mujer" />
          <HomeCard imgUrl="/assets/gallery/new-collection3.png" text="Bañadores" route="/mujer" />
        </div>
      )}
    </div>
  );
};
