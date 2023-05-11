import React from 'react';
import * as classes from './actual.styles';

export const ActualBox: React.FC = () => {

  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Actual</h2>
      <div className={classes.content}>
        <div className={classes.item}>
          <img src="/assets/gallery/actual-image1.png" alt="image" />
          Primavera/verano 2022
        </div>
        <div className={classes.item}>
          <img src="/assets/gallery/actual-image2.png" alt="image" />
          Elegir un estilista
        </div>
        <div className={classes.item}>
          <img src="/assets/gallery/actual-image3.png" alt="image" />
          Camisetas
        </div>
        <div className={classes.item}>
          <img src="/assets/gallery/actual-image4.png" alt="image" />
          Camisas
        </div>
        <div className={classes.item}>
          <img src="/assets/gallery/actual-image5.png" alt="image" />
          Vestidos
        </div>
        <div className={classes.item}>
          <img src="/assets/gallery/Group8-sale.png" alt="sale" />
          Sale
        </div>
      </div>
    </div>
  );
}
