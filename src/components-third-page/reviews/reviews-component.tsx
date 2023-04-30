import React from 'react';
import * as classes from './reviews.styles';
import { Button } from '../../commons';

export const ReviewComponent: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Reseñas</div>
      <br />
      <div className={classes.reviewsImage}>
        <div>
          <Button className={classes.button}>Deja tu opinión</Button>
        </div>
        <div>
          <img src="/assets/Group-164.png" alt="reviews" />
        </div>
      </div>
      <div >
        <div className={classes.textReview}>
          Ludmilla <div>Hoy, 13.54</div>
        </div>
        <div className={classes.starsView}>
          <div>
            <img src="/assets/star.png" alt="reviews" />
            <img src="/assets/star.png" alt="reviews" />
            <img src="/assets/star.png" alt="reviews" />
            <img src="/assets/star.png" alt="reviews" />
            <img src="/assets/star.png" alt="reviews" />
          </div>
          <div>Color: blanco</div>
          <div>Talla: M</div>
        </div>
        <img src="/assets/image-review1.png" alt="reviewer" />
        <div className={classes.footerReview}>
          <div>Quejarse de la revision</div>
          <div>Respuesta</div>
        </div>
      </div>
      <div >
        <div className={classes.textReview}>
          Elena <div>4 Junio, 16.54</div>
        </div>
        <div className={classes.starsView}>
          <div>
            <img src="/assets/star.png" alt="reviews" />
            <img src="/assets/star.png" alt="reviews" />
            <img src="/assets/star.png" alt="reviews" />
            <img src="/assets/star.png" alt="reviews" />
            <img src="/assets/star-white.png" alt="reviews" />
          </div>
          <div>Color: blanco</div>
          <div>Talla: M</div>
        </div>
        <img src="/assets/image-review2.png" alt="reviewer" />
        <div className={classes.footerReview}>
          <div>Quejarse de la revision</div>
          <div>Respuesta</div>
        </div>
      </div>
    </div>
  );
}
