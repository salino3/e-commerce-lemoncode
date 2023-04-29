import React from "react";
import { Link } from "react-router-dom";
import { CardList } from "../card-list";
import * as classes from "./grid-images.styles";

export const GridImages: React.FC = () => {

  return (
    <div className={classes.container}>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-12.png"
          classDescription={classes.boxDescription}
        >
          <span>Vaqueros</span> <span>XS M L</span>
          <span>74.99 €</span> <span>1 Color</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-1.png"
          classDescription={classes.boxDescription}
        >
          <span>Vestido</span> <span>XS M L</span>
          <span>34.99 €</span> <span>17 Colores</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-2.png"
          classDescription={classes.boxDescription}
        >
          <span>Camisa</span> <span>XS M L</span>
          <span>44.99 €</span> <span>2 Colores</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-3.png"
          classDescription={classes.boxDescription}
        >
          <span>Vestido</span> <span>XS M L</span>
          <span>59.99 €</span> <span>1 Color</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-4.png"
          classDescription={classes.boxDescription}
        >
          <span>Camiseta</span> <span>XS M L</span>
          <span>22.99 €</span> <span>17 Colores</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-5.png"
          classDescription={classes.boxDescription}
        >
          <span>Pantalones corto</span> <span>XS M L</span>
          <span>54.99 €</span> <span>2 Colores</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-6.png"
          classDescription={classes.boxDescription}
        >
          <span>Vaqueros</span> <span>XS M L</span>
          <span>79.99 €</span> <span>1 Color</span>
        </CardList>
      </Link>{" "}
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-7.png"
          classDescription={classes.boxDescription}
        >
          <span>Pantalones cortos</span> <span>XS M L</span>
          <span>54.99 €</span> <span>17 Colores</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-8.png"
          classDescription={classes.boxDescription}
        >
          <span>Vaqueros</span> <span>XS M L</span>
          <span>79.99 €</span> <span>2 Colores</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-9.png"
          classDescription={classes.boxDescription}
        >
          <span>Vestido</span> <span>XS M L</span>
          <span>34.99 €</span> <span>1 Color</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-10.png"
          classDescription={classes.boxDescription}
        >
          <span>Pantalones cortos</span> <span>XS M L</span>
          <span>34.99 €</span> <span>17 Colores</span>
        </CardList>
      </Link>
      <Link to={"/product"}>
        <CardList
          classCard={classes.card}
          routeImg="/assets/grid-image-2.png"
          classDescription={classes.boxDescription}
        >
          <span>Camiseta</span> <span>XS M L</span>
          <span>79.99 €</span> <span>2 Colores</span>
        </CardList>
      </Link>
    </div>
  );
};
