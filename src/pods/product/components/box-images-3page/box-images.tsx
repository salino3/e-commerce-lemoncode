import React from 'react';
import { cx } from "@emotion/css";
import { CardComponent } from '@/commons';
import { PopUpComponent } from '../pop-up';
import { useMediaQuery } from 'react-responsive';
import * as classes from './box-images3pages.style';

export const BoxImages: React.FC = () => {

  const isMobile: boolean = useMediaQuery({ maxWidth: '1066px' });
  const [showPopup, setShowPopup] = React.useState(false);

  const onClick = () => {
    if (!isMobile) {
      setShowPopup(true);
    };
  };

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Comprar con este producto</div>
      <div className={classes.content}>
        <PopUpComponent onClick={handleHidePopup} className={cx({ [classes.popup]: !showPopup })} />
        <CardComponent
          onClick={onClick}
          className={classes.card}
          showIcon={false}
          imageUrl="/assets/gallery/images-grid-product1.png"
          name="Vaqueros"
          price="59.99 €"
          colors="1 Color"
          sizes="XS S M L"
        />

        <CardComponent
          onClick={onClick}
          className={classes.card}
          showIcon={false}
          imageUrl="/assets/gallery/images-grid-product2.png"
          name="Vaqueros"
          price="22.99 €"
          colors="17 Colores"
          sizes="XS S M L"
        />

        <CardComponent
          onClick={onClick}
          showIcon={false}
          className={classes.card}
          imageUrl="/assets/gallery/images-grid-product3.png"
          name="Vaqueros"
          price="54.99 €"
          colors="2 Colores"
          sizes="XS S M L"
        />

        <CardComponent
          onClick={onClick}
          showIcon={false}
          className={classes.card}
          imageUrl="/assets/gallery/images-grid-product4.png"
          name="Pantalones cortos"
          price="22.99 €"
          sizes="XS M L"
          colors="17 Colores"
        />
      </div>
    </div>
  );
}
