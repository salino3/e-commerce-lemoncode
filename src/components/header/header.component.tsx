import React from "react";
import { Navbar } from "./navbar";
import * as classes from "./header.styles";

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div>
        <img src="/assets/shape-lines.png" alt="menu" />
      </div>
      <div>
        <img className="img_1" src="/assets/logo.svg" alt="logo" />
      </div>
      <Navbar />
      <div className={classes.boxIcons}>
        <img src="/assets/shape-2.png" alt="magnifying glass" />
        <img src="/assets/shape-hearth.png" alt="heart" />
        <img src="/assets/shape.png" alt="cart" />
      </div>
    </header>
  );
};
