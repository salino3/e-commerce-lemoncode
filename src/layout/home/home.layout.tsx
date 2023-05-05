import React from "react";
import {
  ActualBox,
  ExitoVentas,
  Header,
  Description,
  NuevasColecciones,
  NuevosProductos,
  FirstBigImage,
  ImageDown,
  Footer,
} from "@/components";
import { Boletin } from "@/commons";
import { HomeComponent } from "@/pods";
import * as classes from "./home.styles";

export const HomeLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <HomeComponent />
      <hr />
      <Boletin />
      <Footer />
    </div>
  );
};
