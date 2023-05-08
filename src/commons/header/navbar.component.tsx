import React from "react";
import { Link } from "react-router-dom";
import * as classes from "./header.styles";

export const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <Link to={"/mujer"}>PARA MUJERES</Link>
        </li>
        <li>
          <Link to={"/mujer"}>HOMBRE</Link>
        </li>
        <li>
          <Link to={"/mujer"}>NUEVO</Link>
        </li>
        <li>
          <Link to={"/mujer"}>COLECCIONES ESPECIALES</Link>
        </li>
      </ul>
    </nav>
  );
};
