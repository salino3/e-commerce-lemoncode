import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { CardComponent } from '@/commons';
import { HomeCard } from '../card-home';
import * as classes from './nueva-colecciones.styles';

export const NuevasColecciones: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ minWidth: '725px' });

  const navigate = useNavigate();

  function handleClick() {
    return navigate('/mujer');
  }

  return (
    <div id="nuevas-colecciones" className={classes.container}>
      <h2 className={classes.h2}>Nuevas colecciones</h2>
      {isMobile ? (
        <div className={classes.content}>
          <HomeCard imgUrl="/assets/new-collection-desktop1.png" text="Primavera/Verano 2022" route="/mujer" />{' '}
          <HomeCard imgUrl="/assets/new-collection-desktop2.png" text="Vaqueros" route="/mujer" />{' '}
          <HomeCard imgUrl="/assets/new-collection-desktop3.png" text="Bañadores" route="/mujer" />
          {/* <CardComponent
            onClick={handleClick}
            showIcon={false}
            className={classes.item}
            imageUrl="/assets/nuevas-colecciones1.png"
          />
          <CardComponent
            onClick={handleClick}
            showIcon={false}
            className={classes.item}
            imageUrl="/assets/nuevas-colecciones2.png"
          />
          <CardComponent
            onClick={handleClick}
            showIcon={false}
            className={classes.item}
            imageUrl="/assets/nuevas-colecciones3.png"
          /> */}
        </div>
      ) : (
        <div className={classes.content}>
          <HomeCard imgUrl="/assets/new-collection1.png" text="Primavera/Verano 2022" route="/mujer" />{' '}
          <HomeCard imgUrl="/assets/new-collection2.png" text="Vaqueros" route="/mujer" />{' '}
          <HomeCard imgUrl="/assets/new-collection3.png" text="Bañadores" route="/mujer" />
          {/* <CardComponent
            onClick={handleClick}
            showIcon={false}
            className={classes.item}
            imageUrl="/assets/mobile-coleccion1.png"
          />
          <CardComponent
            onClick={handleClick}
            showIcon={false}
            className={classes.item}
            imageUrl="/assets/mobile-coleccion2.png"
          />
          <CardComponent
            onClick={handleClick}
            showIcon={false}
            className={classes.item}
            imageUrl="/assets/mobile-coleccion3.png"
          /> */}
        </div>
      )}
    </div>
  );
};
