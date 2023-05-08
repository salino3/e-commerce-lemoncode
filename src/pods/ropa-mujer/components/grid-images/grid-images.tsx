import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/commons';
import { CardList } from '../card-list';
import * as classes from './grid-images.styles';

export const GridImages: React.FC = () => {
  return (
    <div className={classes.root}>
      <div id="div"></div>
      <div>
        <div>
          <div className={classes.iconProducts}>
            Todos los productos
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 3.5H10.5V10.5H3.5V3.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.5 13.5H10.5V20.5H3.5V13.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.5 3.5H20.5V10.5H13.5V3.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.500001 17.5L0.5 10.5L17.5 10.5V17.5H0.500001Z"
                  stroke="#B3B3B3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 7.5L0.5 0.500001L17.5 0.5V7.5L0.5 7.5Z"
                  stroke="#B3B3B3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div  className={classes.container}>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid1.png"
              classDescription={classes.boxDescription}
            >
              <span>Vaqueros</span> <span>XS M L</span>
              <span>74.99 €</span> <span>1 Color</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid2.png"
              classDescription={classes.boxDescription}
            >
              <span>Vestido</span> <span>XS M L</span>
              <span>34.99 €</span> <span>17 Colores</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid3.png"
              classDescription={classes.boxDescription}
            >
              <span>Camisa</span> <span>XS M L</span>
              <span>44.99 €</span> <span>2 Colores</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid4.png"
              classDescription={classes.boxDescription}
            >
              <span>Vestido</span> <span>XS M L</span>
              <span>59.99 €</span> <span>1 Color</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid5.png"
              classDescription={classes.boxDescription}
            >
              <span>Camiseta</span> <span>XS M L</span>
              <span>22.99 €</span> <span>17 Colores</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid6.png"
              classDescription={classes.boxDescription}
            >
              <span>Shorts</span> <span>XS M L</span>
              <span>54.99 €</span> <span>2 Colores</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid7.png"
              classDescription={classes.boxDescription}
            >
              <span>Vaqueros</span> <span>XS M L</span>
              <span>79.99 €</span> <span>1 Color</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid8.png"
              classDescription={classes.boxDescription}
            >
              <span>Pantalones</span> <span>XS M L</span>
              <span>54.99 €</span> <span>17 Colores</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid9.png"
              classDescription={classes.boxDescription}
            >
              <span>Vaqueros</span> <span>XS M L</span>
              <span>79.99 €</span> <span>2 Colores</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid10.png"
              classDescription={classes.boxDescription}
            >
              <span>Vestido</span> <span>XS M L</span>
              <span>34.99 €</span> <span>1 Color</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid11.png"
              classDescription={classes.boxDescription}
            >
              <span>Pantalones</span> <span>XS M L</span>
              <span>34.99 €</span> <span>17 Colores</span>
            </CardList>
          </Link>
          <Link to={'/product'}>
            <CardList
              classCard={classes.card}
              routeImg="/assets/image-grid12.png"
              classDescription={classes.boxDescription}
            >
              <span>Camiseta</span> <span>XS M L</span>
              <span>79.99 €</span> <span>2 Colores</span>
            </CardList>{' '}
          </Link>
        </div>
        <Button className={classes.button}>
          Los 12 productos siguientes
        </Button>
      </div>
    </div>
  );
};
