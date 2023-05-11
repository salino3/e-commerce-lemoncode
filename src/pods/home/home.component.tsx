import React from 'react';
import { Boletin, Button } from '@/commons';
import { switchRoutes } from '@/router/routes';
import { ActualBox, Description, ExitoVentas, FirstBigImage, ImageDown, NuevasColecciones, NuevosProductos } from './components';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {


  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const sectionId = window.location.hash.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleScroll();
    };
  }, []);



  return (
<>
    <div className={classes.root}>
      <div className={classes.boxDescription}>
        <img className={classes.imgPrimary} src="/assets/gallery/primaryImage2.png" alt="home-image" />
        <Description />
      </div>
      <ActualBox />
      <ExitoVentas />
      <Button route={switchRoutes.woman} className={classes.buttonHomeComponent}>
        Todos los éxitos
      </Button>
      <NuevasColecciones />
      <Button route={switchRoutes.woman} className={classes.buttonHomeComponent}>
        Todas las colecciones
      </Button>
      <NuevosProductos />
      <Button route={switchRoutes.woman} className={classes.buttonHomeComponent}>
        Ver todos
      </Button>
      <FirstBigImage />
      <ImageDown />
    </div>
      <hr className={classes.hr} />
      <Boletin />
      </>
  );
}
