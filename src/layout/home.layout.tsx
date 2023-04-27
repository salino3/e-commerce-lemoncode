import React from "react";
import {
  ActualBox,
  ExitoVentas,
  Header,
  NuevasColecciones,
  Description,
} from "../components";
import * as classes from "./home.styles";

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
      <NuevasColecciones />
    </div>
  );
};
