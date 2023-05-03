import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { BoxShapes } from '../box-shapes';
import { FooterDesktop } from '@/commons';
import * as classes from './footer.styles';

export const Footer: React.FC = () => {


  const isMobile: boolean = useMediaQuery({maxWidth: '725px'});

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        {isMobile ? (
          <>
            <div className={classes.iconsContainer}>
              <div>
                <Link to={'#'}>
                  <div className={classes.divImgEntrega}>
                    <img src="/assets/fi_truck.png" alt="icon" />
                  </div>
                </Link>
                <p>Entega</p>
              </div>
              <div>
                <Link to={'#'}>
                  <div className={classes.divImgReturn}>
                    <img src="/assets/Group178.png" alt="icon" />
                  </div>
                </Link>
                <p>Devoluciones y cambios</p>
              </div>
              <div>
                <div className={classes.divImgReturn}>
                  <img src="/assets/Group33.png" alt="icon" />
                </div>
                <p>+375 (29) 749-18-23</p>
              </div>
              <div>
                <div className={classes.divImgReturn}>
                  <img src="/assets/Group34.png" alt="icon" />
                </div>
                <p>shop@omix.com</p>
              </div>
            </div>
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
                Omix Store Sociedad de Responsabilidad Limitada, dirección legal: 100, avenida Pobediteley, Minsk,
                220020, oficina 203. 203
                <br />
                En el registro mercantil desde el 23 de junio de 2010
              </div>
              <div className={classes.contentBankIcons}>
                <img src="/assets/belcart-footer.png" alt="icon" />
                <img src="/assets/visa-footer.png" alt="icon" />
                <img src="/assets/master-card-footer.png" alt="icon" />
                <img src="/assets/icon-footer2.png" alt="icon" />
              </div>
              <div>
                2020 - 2022 Omics Store Ltd. <br />
                Todos los derechos reservados.
              </div>
            </div>
          </>
        ) : (
          <FooterDesktop />
        )}
      </div>
    </footer>
  );
}
