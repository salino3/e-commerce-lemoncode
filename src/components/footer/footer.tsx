import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './footer.styles';

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.iconsContainer}>
        <div >
          <Link to={"#"}>
            <img src="/assets/Delivery.png" alt="delivery" />{" "}
          </Link>
          <p>Entega</p>
        </div>
        <div >
          <Link to={"#"}>
            {" "}
            <img src="/assets/Phone.png" alt="phone" />
          </Link>
          <p>+375 (29) 749-18-23</p>
        </div>
        <div >
          <Link to={"#"}>
            <img src="/assets/Return.png" alt="return" />
          </Link>
          <p>Devoluciones y cambios</p>
        </div>
        <div>
          <Link to={"#"}>
            <img src="/assets/Mail.png" alt="mail" />
          </Link>
          <p>shop@omix.com</p>
        </div>
      </div>
    </footer>
  );
}
