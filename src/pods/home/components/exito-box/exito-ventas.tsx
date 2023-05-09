import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {cx} from '@emotion/css'
import { CardComponent } from '@/commons';
import * as classes from './exito-ventas.styles';



export const ExitoVentas: React.FC = () => {

  const navigate = useNavigate();

  function handleClick() {
  return navigate('/mujer');
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Éxitos de ventas</h2>
      <div className={classes.containerLinks}>
        <Link to={'/mujer'}>Mujeres</Link>
        <Link to={'/mujer'}>Hombres</Link>
      </div>
      <div id="exito-ventas" className={classes.content}>
        <CardComponent
          onClick={() => handleClick()}
          className={classes.item}
          imageUrl="/assets/exito-venta1.png"
          fixPosition={classes.fixIcon}
        />

        <CardComponent
          className={classes.item}
          onClick={() => handleClick()}
          imageUrl="/assets/exito-venta2.png"
          fixPosition={classes.fixIcon}
        />

        <CardComponent
          onClick={() => handleClick()}
          fixPosition={classes.fixIcon}
          imageUrl="/assets/exito-venta3.png"
          className={classes.item}
        />

        <CardComponent
          onClick={() => handleClick()}
          fixPosition={classes.fixIcon}
          imageUrl={'/assets/exito-venta4.png'}
          className={classes.item}
        />
      </div>
    </div>
  );
}
