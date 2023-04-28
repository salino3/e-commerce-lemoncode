import React from "react";
import {
  ActualBox,
  ExitoVentas,
  Header,
  Description,
  NuevasColecciones,
  NuevosProductos,
  FirstBigImage,
} from "../components";
import * as classes from "./home.styles";
import { Button } from "../commons";

export const HomeLayout: React.FC = () => {
  
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.boxDescription}>
        <img
          className={classes.imgPrimary}
          src="/assets/MainImage.png"
          alt="home-image"
        />
        <Description />
      </div>
      <ActualBox />
      <ExitoVentas />
      <Button
        route={"/"}
        text={"Todos los éxitos"}
        className={classes.buttonHomeLayout}
      />
      <NuevasColecciones />
      <Button
        route={"/"}
        text={"Todas las colecciones"}
        className={classes.buttonHomeLayout}
      />
      <NuevosProductos />
      <FirstBigImage />
    </div>
  );
};
