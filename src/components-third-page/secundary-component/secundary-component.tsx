import React from "react";
import { useMediaQuery } from "react-responsive";
import { ReviewComponent } from "../reviews";
import { BoxImages, BoxLastsPhotos } from "..";
import * as classes from "./secundary-comonent.styles";

export const SecundaryComponent: React.FC = () => {

  const isMobile: boolean = useMediaQuery({ maxWidth: "1024px" });

  return (
    <div className={classes.container}>
      {isMobile ? (
        <>
          <div className={classes.textDescripcion}>
            Descripión
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
          <div className={classes.deliveryText}>
            <img src="/assets/iconoir_delivery-truck.png" alt="icon" />
            <div>
              Por mensajero a domicilio - a partir de 50 € gratis.
              <br />
              Montaje antes de la compra en 15 minutos
            </div>
          </div>
          <div className={classes.deliveryText}>
            <img src="/assets/iconoir_delivery.png" alt="icon" />
            <div>Belarus Post - a partir de 50 € gratis. Sin la posibilidad de encajar</div>
          </div>
          <hr />
          <ReviewComponent />
          <BoxImages />
          <BoxLastsPhotos />
        </>
      ) : (
        <>
          <div>
            <div className={classes.descripcions}>
              <div>Descripción</div>
              <p>
                Vaqueros blancos en denim de algodón de alta calidad (corte recto). El modelo largo es perfecto para las
                chicas más altas. Corte de talle alto. Pantalón acabado con elegantes rotos. Excelente modelo de
                vaqueros, que ayudará a crear imágenes de actualidad en estilo casual. Recomendado.
                <br />
                La altura de la modelo de la foto es de 179 cm.
                <br />
                La mayoría de las veces, la modelo elige ropa de la talla S.
              </p>
            </div>
            <div className={classes.descripcions}>
              <div>Composición</div>
              <p>100% algodón</p>
            </div>
            <div className={classes.descripcions}>
              <div>Características</div>
              <p>País de producción: China</p>
            </div>
            </div>
          <hr />
          <ReviewComponent />
          <BoxImages />
          <BoxLastsPhotos />
        </>
      )}
    </div>
  );
};
