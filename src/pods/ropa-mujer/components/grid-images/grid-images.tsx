import React from 'react';
import { cx } from '@emotion/css';
import { useMediaQuery } from 'react-responsive';
import { CardList } from '../card-list';
import { Button } from '@/commons';
import * as classes from './grid-images.styles';
import { PopUpComponent } from '@/pods/product/components';

export const GridImages: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: '1066px' });

  const [showPopup, setShowPopup] = React.useState(false);

  const handleClick = () => {
    if (!isMobile) {
      setShowPopup(true);
    }
  };

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  return (

      <div className={classes.root}>
        <div id="div"></div>
        <div>
          <div className={classes.container}>
            <PopUpComponent onClick={handleHidePopup} className={cx({ [classes.popup]: !showPopup })} />
            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid1.png"
              classDescription={classes.boxDescription}
            >
              <span>Vaqueros</span> <span>XS M L</span>
              <span>74.99 €</span> <span>1 Color</span>
            </CardList>
            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid2.png"
              classDescription={classes.boxDescription}
            >
              <span>Vestido</span> <span>XS M L</span>
              <span>34.99 €</span> <span>17 Colores</span>
            </CardList>
            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid3.png"
              classDescription={classes.boxDescription}
            >
              <span>Camisa</span> <span>XS M L</span>
              <span>44.99 €</span> <span>2 Colores</span>
            </CardList>
            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid4.png"
              classDescription={classes.boxDescription}
            >
              <span>Vestido</span> <span>XS M L</span>
              <span>59.99 €</span> <span>1 Color</span>
            </CardList>

            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid5.png"
              classDescription={classes.boxDescription}
            >
              <span>Camiseta</span> <span>XS M L</span>
              <span>22.99 €</span> <span>17 Colores</span>
            </CardList>

            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid6.png"
              classDescription={classes.boxDescription}
            >
              <span>Shorts</span> <span>XS M L</span>
              <span>54.99 €</span> <span>2 Colores</span>
            </CardList>

            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid7.png"
              classDescription={classes.boxDescription}
            >
              <span>Vaqueros</span> <span>XS M L</span>
              <span>79.99 €</span> <span>1 Color</span>
            </CardList>

            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid8.png"
              classDescription={classes.boxDescription}
            >
              <span>Pantalones</span> <span>XS M L</span>
              <span>54.99 €</span> <span>17 Colores</span>
            </CardList>

            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid9.png"
              classDescription={classes.boxDescription}
            >
              <span>Vaqueros</span> <span>XS M L</span>
              <span>79.99 €</span> <span>2 Colores</span>
            </CardList>

            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid10.png"
              classDescription={classes.boxDescription}
            >
              <span>Vestido</span> <span>XS M L</span>
              <span>34.99 €</span> <span>1 Color</span>
            </CardList>

            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid11.png"
              classDescription={classes.boxDescription}
            >
              <span>Pantalones</span> <span>XS M L</span>
              <span>34.99 €</span> <span>17 Colores</span>
            </CardList>

            <CardList
              onClick={handleClick}
              classCard={classes.card}
              routeImg="/assets/image-grid12.png"
              classDescription={classes.boxDescription}
            >
              <span>Camiseta</span> <span>XS M L</span>
              <span>79.99 €</span> <span>2 Colores</span>
            </CardList>
          </div>
            <Button route={'/product'} className={classes.buttonSecondPageLayout}>
              Los 12 productos siguientes
            </Button>
        </div>
      </div>

  );
};
