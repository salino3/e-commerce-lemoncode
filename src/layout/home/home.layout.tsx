import React from "react";

import { Boletin, Footer, Header } from "@/commons";
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
