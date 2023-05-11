import React from 'react';
import { useNavigate } from 'react-router-dom';
import { switchRoutes } from '@/router/routes';
import { Button, CardComponent } from '@/commons';
import * as classes from './grid-images.styles';

export const GridImages: React.FC = () => {

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(switchRoutes.product);
  };

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
        <div className={classes.container}>
          <CardComponent
            imageUrl="/assets/gallery/image-grid1.png"
            onClick={handleNavigate}
            name="Vaqueros"
            price="79.99 €"
            sizes="XS M L"
            colors="1 Color"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid2.png"
            onClick={handleNavigate}
            name="Vestido"
            price="34.99 €"
            sizes="XS M L"
            colors="1 Color"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid3.png"
            onClick={handleNavigate}
            name="Camisa"
            price="44.99 €"
            sizes="XS M L"
            colors="2 Colores"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid4.png"
            onClick={handleNavigate}
            name="Vestido"
            price="59.99 €"
            sizes="XS M L"
            colors="1 Color"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid5.png"
            onClick={handleNavigate}
            name="Camiseta"
            price="22.99 €"
            sizes="XS M L"
            colors="17 Colores"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid6.png"
            onClick={handleNavigate}
            name="Pantalones cortos"
            price="54.99 €"
            sizes="XS M L"
            colors="2 Colores"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid7.png"
            onClick={handleNavigate}
            name="Vaqueros"
            price="79.99 €"
            sizes="XS M L"
            colors="1 Color"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid8.png"
            onClick={handleNavigate}
            name="Pantalones cortos"
            price="54.99 €"
            sizes="XS M L"
            colors="17 Colores"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid9.png"
            onClick={handleNavigate}
            name="Vaqueros"
            price="79.99 €"
            sizes="XS M L"
            colors="2 Colores"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid10.png"
            onClick={handleNavigate}
            name="Vestido"
            price="34.99 €"
            sizes="XS M L"
            colors="1 Color"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid11.png"
            onClick={handleNavigate}
            name="Pantalones cortos"
            price="34.99 €"
            sizes="XS M L"
            colors="17 Colores"
          />
          <CardComponent
            imageUrl="/assets/gallery/image-grid12.png"
            onClick={handleNavigate}
            name="Camiseta"
            price="79.99 €"
            sizes="XS M L"
            colors="2 Colores"
          />
        </div>
        <Button className={classes.button}>Los 12 productos siguientes</Button>
      </div>
    </div>
  );
};
