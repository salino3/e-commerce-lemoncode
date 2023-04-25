import React from "react";
import { Navbar } from "./Navbar";
import '../stylesComponents.scss';

export const Header: React.FC = () => {
  return (
    <header>
      <div>
        <img src="/assets/shape-lines.png" alt="menu" />
      </div>
      <div className="container_icon">
        <img className="img_1" src="/assets/logo.svg" alt="logo" />
       
      </div>
      <Navbar />
      <div className="boxImages">
        <img src="/assets/shape-2.png" alt="magnifying glass" />
        <img src="/assets/shape-heart.png" alt="heart" />
        <img src="/assets/shape.png" alt="cart" />
      </div>
    </header>
  );
};
