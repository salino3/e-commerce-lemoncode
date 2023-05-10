import React from 'react';
import { cx } from '@emotion/css';
import { switchRoutes } from '@/router/routes';
import { Button } from '@/commons';
import * as classes from './popup.styles';

interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PopUpComponent: React.FC<Props> = (props) => {
    const {className, onClick} = props;

  return (
    <div className={cx(classes.modal, className)}>
      <div className={classes.content}>
        <img id="img" src="/assets/image-popup1.png" alt="image" />
        <div>
          <div className={classes.boxClose}>
            <button onClick={onClick}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z"
                  fill="#212429"
                />
              </svg>
            </button>
            <p>2 comentarios</p>
            <div className={classes.Icons}>
              <img src="/assets/gallery/shape-hearth.png" alt="heart" />
              <img src="/assets/gallery/shareIcon.png" alt="share" />
            </div>
          </div>
          <div className={classes.boxStars}>
            <img src="/assets/gallery/star.png" alt="star" />
            <img src="/assets/gallery/star.png" alt="star" />
            <img src="/assets/gallery/star.png" alt="star" />
            <img src="/assets/gallery/star.png" alt="star" />
            <img src="/assets/gallery/star.png" alt="star" />
          </div>
          <div className={classes.title}>Vestido negro de lunares</div>
          <div className={classes.price}>79.99 €</div>
          <div className={classes.description}>
            Precioso vestido femenino de silueta en tejido de popelina. Las mangas cortas alargadas se fruncen en la
            banda elástica. El cinturón en la cintura acentúa la feminidad de la figura. El bajo del vestido es un
            volante ancho con un fruncido ondulado.
          </div>
          <div className={classes.boxImages}>
            <p> Lunares blancos y negros</p>
            <div>
              <img src="/assets/image-popup2.png" alt="image" />
              <img src="/assets/image-popup3.png" alt="image" />
            </div>
          </div>
          <div className={classes.size}>
            Talla:
            <div>
              <div>XS</div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
            </div>
          </div>
          <div className={classes.boxButtons}>
            <Button className={classes.lightButton} >
              <img src={`/assets/gallery/icon-minus.png`} alt="icon" />
              1
              <img src={`/assets/gallery/icon-plus.png`} alt="icon" />
            </Button>
            <Button className={classes.darkButton} route={switchRoutes.cart}>
              <img src="/assets/gallery/cartIcon.png" alt="image" />
              &nbsp; En cesta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
