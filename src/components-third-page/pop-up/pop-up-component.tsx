import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './popup.styles';
import { Button } from '@/commons';

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
        <div className={classes.boxText}>
          <div className={classes.boxClose}>
            <button onClick={onClick}>X</button>
            <p>2 comentarios</p>
            <div>
              <img src="/assets/shape-hearth.png" alt="heart" /> &nbsp;
              <img src="/assets/shareIcon.png" alt="share" />
            </div>
          </div>
          <div className={classes.boxStars}>
            <img src="/assets/star.png" alt="star" />
            <img src="/assets/star.png" alt="star" />
            <img src="/assets/star.png" alt="star" />
            <img src="/assets/star.png" alt="star" />
            <img src="/assets/star.png" alt="star" />
          </div>
          <div className={classes.title}>Vestido negro de lunares</div>
          <div className={classes.price}>79.99 €</div>
          <div className={classes.description}>
            Precioso vestido femenino de silueta en tejido de popelina. Las mangas cortas
            alargadas se fruncen en la banda elástica. El cinturón en la cintura acentúa la feminidad de la figura. El
            bajo del vestido es un volante ancho con un fruncido ondulado.
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
            <Button className={classes.lightButton} route="/cart">
              <img src={`/assets/icon-minus.png`} alt="icon" />
              1
              <img src={`/assets/icon-plus.png`} alt="icon" />
            </Button>
            <Button className={classes.darkButton} route="/cart">
              <img src="/assets/cartIcon.png"  alt="image" />
              &nbsp; En cesta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
