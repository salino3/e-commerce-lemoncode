import React from 'react';
import { CardComponent } from '../../commons';
import * as classes from './grid-images.styles';

export const GridImages: React.FC = () => {
  return (
    <div>
      {/* <CardComponent text='Vestido' children={'34.99 €'} className={classes.item} routeImg='../../../public/assets/grid-image-1.png' /> */}
      <div className={classes.card}>
        <img src={"/assets/grid-image-1.png"} alt="image" />
        <div className={classes.boxDescription}>
          <span>Vestido</span> <span>XS M L</span>
           <span>34.99 €</span> <span>17 Colores</span>
        </div>
      </div>
    </div>
  );
}
