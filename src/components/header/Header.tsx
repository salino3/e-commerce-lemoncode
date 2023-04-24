import React from "react";
import { Navbar } from "./Navbar";
import '../stylesComponents.scss';

export const Header: React.FC = () => {
  return (
    <header>
      <div>
        <img src="../../../public/assets/shape-lines.png" alt="menu" />
      </div>
      <div className="container_icon">
        <img className="img_1" src="/assets/O.png" alt="O" />
        <img className="img_2" src="/assets/mix.png" alt="mix" />
        <img className="img_3" src="/assets/Line-1-Stroke.png" alt="line" />
      </div>
      <Navbar />
      <div>
        <img src="/assets/shape-2.png" alt="magnifying glass" />
        <img src="/assets/shape-heart.png" alt="heart" />
        <img src="/assets/shape.png" alt="cart" />
      </div>
    </header>
  );
};
