import React from 'react';
import { Button } from '@/commons';
import { ListComponent } from '@/pods/ropa-mujer/components';
import * as classes from './main-isdesktop.styles';


 interface PropsImg {
  img1: boolean;
  img2: boolean;
  img3: boolean;
  img4: boolean;
  img5: boolean;
  [index: string]: boolean;
};


export const MainComponentIsdesktop: React.FC = () => {
  const [toggleIcon, setToggleIcon] = React.useState<PropsImg>({
    img1: true,
    img2: false,
    img3: false,
    img4: false,
    img5: false,
  });

  function handleClick(index: string) {
    setToggleIcon((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className={classes.boxIsDesktop}>
      <aside className={classes.aside}>
        <ListComponent h2={'Mujeres'} toggleIcon={toggleIcon.img1} onClick={() => handleClick('img1')} />
        <ListComponent h2={'Hombres'} toggleIcon={toggleIcon.img2} onClick={() => handleClick('img2')} />
        <ListComponent h2={'Accesorios'} toggleIcon={toggleIcon.img3} onClick={() => handleClick('img3')} />
        <ListComponent h2={'Colecciones'} toggleIcon={toggleIcon.img4} onClick={() => handleClick('img4')} />
        <ListComponent h2={'Acciones'} toggleIcon={toggleIcon.img5} onClick={() => handleClick('img5')} />
      </aside>
      <div className={classes.boxImages}>
        <div className={classes.boxPrimaryImages}>
          <div className={classes.txtRoute}>Inicio/Mujer/Ropa de mujer/Vaqueros</div>
          <img src="/assets/gallery/primaryImage.png" alt="image" /> <br />
          <div>
            <img src="/assets/gallery/small-image-second-page1.png" alt="image" />
            <img src="/assets/gallery/small-image-second-page2.png" alt="image" />
            <img src="/assets/gallery/small-image-second-page3.png" alt="image" />
          </div>
        </div>
        <div className={classes.boxSecondaryImages}>
          <div>
            <img src="/assets/gallery/star.png" alt="star" />
            <img src="/assets/gallery/star.png" alt="star" />
            <img src="/assets/gallery/star.png" alt="star" />
            <img src="/assets/gallery/star.png" alt="star" />
            <img src="/assets/gallery/star.png" alt="star" />
          </div>
          <div className={classes.title}>
            <h2> Vaqueros largos rectos en blanco</h2>
            <div>
              <img src="/assets/gallery/shape-hearth.png" alt="hearth" /> &nbsp;
              <img src="/assets/gallery/shareIcon.png" alt="star" />
            </div>
          </div>
          <div className={classes.price}>79.99 €</div>
          <div className={classes.colores}>
            Color:
            <div></div>
          </div>
          <br />
          <div className={classes.size}>
            Talla:
            <div>
              <div>XS</div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
            </div>
          </div>
          <div className={classes.deliveryText}>
            <img src="/assets/gallery/iconoir_delivery-truck.png" alt="icon" />
            <div>Por mensajero a domicilio - a partir de 50 € gratis. Montaje antes de la compra en 15 minutos</div>
          </div>
          <div className={classes.deliveryText}>
            <img src="/assets/gallery/iconoir_delivery.png" alt="icon" />
            <div>Belarus Post - a partir de 50 € gratis. Sin la posibilidad de encajar</div>
          </div>
          <div className={classes.boxButtons}>
            <Button className={classes.lightButton} route="/cart">
              <img src={`/assets/gallery/icon-minus.png`} alt="icon" />
              1
              <img src={`/assets/gallery/icon-plus.png`} alt="icon" />
            </Button>
            <Button className={classes.darkButton} route="/cart">
              <img src="/assets/gallery/cartIcon.png" alt="image" />
              &nbsp; En cesta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
