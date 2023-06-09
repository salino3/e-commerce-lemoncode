import React from 'react';
import { useMediaQuery } from "react-responsive";
import { switchRoutes } from '@/router/routes';
import { Button } from '@/commons';
import * as classes from './description.styles';

export const Description: React.FC = () => {

   const isMobile: boolean = useMediaQuery({minWidth: "725px"});

  return (
    <div className={classes.container}>
      {isMobile ? (
        <div className={classes.messageTitleDesktop}>
          Todos <br /> los estilos <br /> más actuales
        </div>
      ) : (
        <div className={classes.messageTitleMobile}>Hay ropa para todos</div>
      )}
      {!isMobile ? (
        <div className={classes.message}>Pague sólo por lo que le convenga y le guste.</div>
      ) : (
        <div className={classes.message}>
          Encuentra la ropa más actual en nuestra tienda y
          <br />
          obtén descuentos en tus compras.
        </div>
      )}
      <div className={classes.boxButtons}>
        <Button route={switchRoutes.woman}>Para mujeres</Button>
        <Button route={switchRoutes.woman}>Para hombres</Button>
      </div>
    </div>
  );
}
