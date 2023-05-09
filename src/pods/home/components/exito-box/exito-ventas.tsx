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
          name="Camiseta"
          price="34.95 €"
        />

        <CardComponent
          className={classes.item}
          onClick={() => handleClick()}
          imageUrl="/assets/exito-venta2.png"
          fixPosition={classes.fixIcon}
          name="Vestido"
          price="34.95 €"
        />

        <CardComponent
          onClick={() => handleClick()}
          fixPosition={classes.fixIcon}
          imageUrl="/assets/exito-venta3.png"
          className={classes.item}
          name="Vaqueros"
          price="80.00 €"
        />

        <CardComponent
          onClick={() => handleClick()}
          fixPosition={classes.fixIcon}
          imageUrl={'/assets/exito-venta4.png'}
          className={classes.item}
          classPrice={classes.price}
          name="Vestido"
          price="179.00 €"
          offer='75.00 €'
        />
      </div>
    </div>
  );
}
