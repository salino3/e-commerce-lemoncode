import React from 'react';
import { Link } from 'react-router-dom';
import { BoxShapes } from '../box-shapes';
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
  
        <div className={classes.footerContent}>
          <hr />
          <BoxShapes className={classes.boxShapes} />
          <div className={classes.boxSocialNetworks}>
            <h3>Estamos en las redes sociales</h3>
            <div>
              <img src="/assets/icon-footer1.png" alt="icon" />
              <img src="/assets/icon-footer8.png" alt="icon" />
              <img src="/assets/icon-footer9.png" alt="icon" />
              <img src="/assets/icon-footer10.png" alt="icon" />
              <img src="/assets/icon-footer11.png" alt="icon" />
              <img src="/assets/icon-footer4.png" alt="icon" />
            </div>
          </div>
          <div className={classes.BoxBankIcon}>
            <div>
              <img src="/assets/texto-footer1.png" alt="texto" /> <br />
              <img src="/assets/texto-footer2.png" alt="texto" />
            </div>
            <div className={classes.contentBankIcons}>
              <img src="/assets/belcart-footer.png" alt="icon" />
              <img src="/assets/visa-footer.png" alt="icon" />
              <img src="/assets/master-card-footer.png" alt="icon" />
              <img src="/assets/icon-footer2.png" alt="icon" />
            </div>
            <div>
              <img src="/assets/texto-footer3.png" alt="texto" /> <br />
              <img src="/assets/texto-footer4.png" alt="texto" />
            </div>
          </div>
        </div>
   
    </footer>
  );
}
