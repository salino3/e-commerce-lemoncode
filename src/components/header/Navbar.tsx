import React from "react";
import { Link } from "react-router-dom";
import * as classes from "./header.styles";

export const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <Link to={"#"}>PARA MUJERES</Link>
        </li>
        <li>
          <Link to={"#"}>HOMBRE</Link>
        </li>
        <li>
          <Link to={"#"}>NUEVO</Link>
        </li>
        <li>
          <Link to={"#"}>COLECCIONES ESPACIALES</Link>
        </li>
      </ul>
    </nav>
  );
};
