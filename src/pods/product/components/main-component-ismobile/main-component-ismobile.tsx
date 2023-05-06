import React from 'react';
import { Button } from '@/commons';
import * as classes from "./main-ismobile.style";


export const MainComponentIsmobile: React.FC = () => {

  return (
    <>
      <div className={classes.boxIsMobile}>
        <div className={classes.txtRoute}>Inicio/Mujer/Ropa de mujer/Vaqueros</div>
        <div className={classes.title}>
          <h2> Vaqueros largos rectos en blanco</h2>
          <div className={classes.boxImages}>
            <div>
              <img src="/assets/star.png" alt="star" />
              <img src="/assets/star.png" alt="star" />
              <img src="/assets/star.png" alt="star" />
              <img src="/assets/star.png" alt="star" />
              <img src="/assets/star.png" alt="star" />
            </div>
            <div>
              <img src="/assets/shape-hearth.png" alt="hearth" /> &nbsp;
              <img src="/assets/shareIcon.png" alt="share" />
            </div>
          </div>
        </div>
        <div className={classes.boxPrimaryImages}>
          <img className={classes.primaryImg} src="/assets/product-image1.png" alt="image" />
          <br />
          <div className={classes.smallImages}>
            <img src="/assets/product-image2.png" alt="image" />
            <img src="/assets/product-image3.png" alt="image" />
            <img src="/assets/product-image4.png" alt="image" />
          </div>
          <div className={classes.buttons}>
            <div className={classes.btn}>
              Color
              <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={classes.btn}>
              XS
              <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={classes.stylesBtn}>
            <Button className={classes.lightButton} route="/cart">
              <img src={`/assets/icon-minus.png`} alt="icon" />
              1
              <img src={`/assets/icon-plus.png`} alt="icon" />
            </Button>
            <div className={classes.price}>79.99 €</div>
          </div>
          <Button className={classes.darkButton} route="/cart">
            <img src="/assets/cartIcon.png" alt="image" />
            &nbsp; En cesta
          </Button>
        </div>
      </div>
    </>
  );
}
