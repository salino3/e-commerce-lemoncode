import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {cx} from '@emotion/css'
import { CardComponent } from '@/commons';
import * as classes from './exito-ventas.styles';
import { switchRoutes } from '@/router/routes';



export const ExitoVentas: React.FC = () => {

  const navigate = useNavigate();

  function handleClick() {
  return navigate('/mujer');
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Éxitos de ventas</h2>
      <div className={classes.containerLinks}>
        <Link to={switchRoutes.woman}>Mujeres</Link>
        <Link to={switchRoutes.woman}>Hombres</Link>
      </div>
      <div id="exito-ventas" className={classes.content}>
        <CardComponent
          onClick={() => handleClick()}
          className={classes.item}
          imageUrl="/assets/gallery/exito-venta1.png"
          name="Camiseta"
          price="34.95 €"
        />

        <CardComponent
          className={classes.item}
          onClick={() => handleClick()}
          imageUrl="/assets/gallery/exito-venta2.png"
          name="Vestido"
          price="34.95 €"
        />

        <CardComponent
          onClick={() => handleClick()}
          imageUrl="/assets/gallery/exito-venta3.png"
          className={classes.item}
          name="Vaqueros"
          price="80.00 €"
        />

        <CardComponent
          onClick={() => handleClick()}
          imageUrl={'/assets/gallery/exito-venta4.png'}
          className={classes.item}
          name="Vestido"
          price="179.00 €"
          offer="75.00 €"
        />
      </div>
    </div>
  );
}
