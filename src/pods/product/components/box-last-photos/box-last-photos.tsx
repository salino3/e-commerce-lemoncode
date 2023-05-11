import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { cx } from '@emotion/css';
import { CardComponent } from '@/commons';
import { PopUpComponent } from '../pop-up';
import * as classes from './box-photos.styles';


export const BoxLastsPhotos: React.FC = () => {

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
      <div className={classes.title}>Productos similares</div>
      <div className={classes.content}>
        <PopUpComponent onClick={handleHidePopup} className={cx({ [classes.popup]: !showPopup })} />
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

        <CardComponent
          onClick={onClick}
          showIcon={false}
          className={classes.card}
          imageUrl="/assets/gallery/images-grid-product5.png"
          name="Camiseta"
          price="59.99 €"
          sizes="XS S M L"
          colors="1 Color"
        />

        <CardComponent
          onClick={onClick}
          showIcon={false}
          className={classes.card}
          imageUrl="/assets/gallery/images-grid-product1.png"
          name="Vaqueros"
          price="59.99 €"
          colors="1 Color"
          sizes="XS S M L"
        />

        <CardComponent
          onClick={onClick}
          showIcon={false}
          className={classes.card}
          imageUrl="/assets/gallery/images-grid-product6.png"
          name="Camiseta"
          price="59.99 €"
          colors="1 Color"
          sizes="XS S M L"
        />
      </div>
    </div>
  );
}
