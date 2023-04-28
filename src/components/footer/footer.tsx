import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './footer.styles';

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.iconsContainer}>
        <div>
          <Link to={"#"}>
            <img src="/assets/Delivery.png" alt="delivery" />{" "}
          </Link>
          <p>Entega</p>
        </div>
        <div>
          <Link to={"#"}>
            <img src="/assets/Phone.png" alt="phone" />
          </Link>
          <p>+375 (29) 749-18-23</p>
        </div>
        <div>
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
      <div className={classes.boxShapes}>
        <div>
          Compradores
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={classes.boxShapes}>
        <div>
          Quiénes somos
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      
    </footer>
  );
}
