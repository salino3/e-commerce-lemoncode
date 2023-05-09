import React from 'react';
import { cx } from '@emotion/css';
import { Link, useNavigate } from 'react-router-dom';
import { CardComponent } from '@/commons';
import * as classes from './nuevos-productos.styles';

export const NuevosProductos: React.FC = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/product');
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Nuevo productos</h2>
      <div className={classes.containerLinks}>
        <Link to={'/mujer'}>Mujeres</Link>
        <Link to={'/mujer'}>Hombres</Link>
      </div>
      <div id="nuevos-productos" className={classes.content}>
        <CardComponent
          onClick={() => handleNavigate()}
          className={classes.item}
          imageUrl="/assets/nuevos-productos1.png"
          name="Polo"
          price="44.95 €"
        />

        <CardComponent
          className={classes.item}
          onClick={() => handleNavigate()}
          imageUrl="/assets/nuevos-productos2.png"
          name="Camiseta"
          price="25.00 €"
        />

        <CardComponent
          className={classes.item}
          onClick={() => handleNavigate()}
          imageUrl="/assets/nuevos-productos3.png"
          name="Pantalones deportivos"
          price="49.95 €"
        />

        <CardComponent
          className={classes.item}
          onClick={() => handleNavigate()}
          imageUrl="/assets/nuevos-productos4.png"
          name="Camiseta"
          price="27.99 €"
        />

        <CardComponent
          className={classes.item}
          onClick={() => handleNavigate()}
          imageUrl="/assets/nuevos-productos6.png"
          name="Camisa"
          price="25.00 €"
        />

        <CardComponent
          className={cx(classes.item, classes.item2)}
          onClick={() => handleNavigate()}
          imageUrl="/assets/nuevos-productos7.png"
          name="Sudadera"
          price="44.99 €"
        />

        <CardComponent
          className={classes.item}
          onClick={() => handleNavigate()}
          imageUrl="/assets/nuevos-productos5.png"
          name="Juego de camisetas (5 piezas)"
          price="75.95 €"
        />

        <CardComponent
          className={cx(classes.item, classes.item2)}
          onClick={() => handleNavigate()}
          imageUrl="/assets/nuevos-productos8.png"
          name="Camiseta"
          price="22.99 €"
        />
      </div>
    </div>
  );
};
