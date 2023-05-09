import React from 'react';
import { Navbar } from './navbar.component';
import { Link } from 'react-router-dom';
import * as classes from './header.styles';

export const Header: React.FC = () => {


  return (
    <header  className={classes.header}>
      <div className={classes.menuIcon}>
        <img src="/assets/shape-lines.png" alt="menu" />
      </div>
      <div>
        <Link to={'/'}>
         <img className="img_1" src="/assets/logo.svg" alt="logo" />
        </Link>
      </div>
      <Navbar />
      <div className={classes.boxIcons}>
        <img src="/assets/shape-2.png" alt="magnifying glass" />
        <img src="/assets/shape-hearth.png" alt="heart" />
        <Link to={'/cart'}>
        <img src="/assets/shape.png" alt="cart" />
        </Link>
      </div>
    </header>
  );
};
