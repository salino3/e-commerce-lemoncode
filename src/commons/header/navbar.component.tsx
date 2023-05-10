import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/router/routes";
import * as classes from "./header.styles";

export const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <Link to={switchRoutes.woman}>PARA MUJERES</Link>
        </li>
        <li>
          <Link to={switchRoutes.woman}>HOMBRE</Link>
        </li>
        <li>
          <Link to={switchRoutes.woman}>NUEVO</Link>
        </li>
        <li>
          <Link to={switchRoutes.woman}>COLECCIONES ESPECIALES</Link>
        </li>
      </ul>
    </nav>
  );
};
