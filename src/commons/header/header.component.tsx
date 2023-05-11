import React from 'react';
import { Link } from 'react-router-dom';
import { switchRoutes } from '@/router/routes';
import { Navbar } from './navbar.component';
import * as classes from './header.styles';

export const Header: React.FC = () => {


  return (
    <header className={classes.header}>
      <div className={classes.menuIcon}>
        <img src="/assets/shape-lines.png" alt="menu" />
      </div>
      <div>
        <Link to={switchRoutes.root}>
          <img className="img_1" src="/assets/icons/logo.svg" alt="logo" />
        </Link>
      </div>
      <Navbar />
      <div className={classes.boxIcons}>
        <img src="/assets/gallery/shape-2.png" alt="magnifying glass" />
        <img src="/assets/gallery/shape-hearth.png" alt="heart" />
        <Link to={switchRoutes.cart}>
          <img src="/assets/gallery/shape.png" alt="cart" />
        </Link>
      </div>
    </header>
  );
};
