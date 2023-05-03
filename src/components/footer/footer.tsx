import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { BoxShapes } from '../box-shapes';
import * as classes from './footer.styles';

export const Footer: React.FC = () => {


  const isMobile: boolean = useMediaQuery({maxWidth: '725px'});

  return (
    <footer className={classes.footer}>
      <div className={classes.iconsContainer}>
        <div>
          <Link to={'#'}>
            <img src="/assets/Delivery.png" alt="delivery" />{' '}
          </Link>
          <p>Entega</p>
        </div>
        <div>
          <Link to={'#'}>
            <img src="/assets/Phone.png" alt="phone" />
          </Link>
          <p>+375 (29) 749-18-23</p>
        </div>
        <div>
          <Link to={'#'}>
            <img src="/assets/Return.png" alt="return" />
          </Link>
          <p>Devoluciones y cambios</p>
        </div>
        <div>
          <Link to={'#'}>
            <img src="/assets/Mail.png" alt="mail" />
          </Link>
          <p>shop@omix.com</p>
        </div>
      </div>

      <div className={classes.footerContent}>
        {isMobile ? (
          <>
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
          <div className={classes.isDesktop}>
            <div>
              <div className={classes.lastText}>
                <div>
                  <h3>Compradores</h3>
                  <br />
                  <p>
                    Pago <br />
                    Política de datos personales <br />
                    Acciones <br />
                    Chenques regalo
                  </p>
                </div>
                <p>
                  © 2020 – 2022 ООО «Omix Stor». <br />
                  Todos los derechos reservados.
                </p>
              </div>
            </div>
            <div>
              <div className={classes.lastText}>
                <p>
                  <br />
                  <br />
                  Programa de afilición <br />
                  Normas de uso de los códigos promocionales
                </p>
                <p>
                  ОOmiks Store Sociedad de Responsabilidad Limitada, domicilio social: Avenida Pobediteley, 100, Minsk,
                  220020, oficina 203. 203
                </p>
              </div>
            </div>
            <div>
              <div className={classes.lastText}>
                <div>
                  <h3>Quiènes somos</h3>
                  <br />
                  <p>
                    Quiénes somos <br />
                    Póngase en contacto con <br />
                    Noticias <br />
                    Empleo
                  </p>
                </div>
                <p>En el registro mercantil desde el 23 de junio de 2010, número de registro 256476, UNP 14886482</p>
              </div>
            </div>
            <div>
              <div className={classes.boxSocialNetworks}>
                <article>
                <h3>Estamos en las redes sociales</h3>
                <div>
                  <img src="/assets/icon-footer1.png" alt="icon" />
                  <img src="/assets/icon-footer8.png" alt="icon" />
                  <img src="/assets/icon-footer9.png" alt="icon" />
                  <img src="/assets/icon-footer10.png" alt="icon" />
                  <img src="/assets/icon-footer11.png" alt="icon" />
                  <img src="/assets/icon-footer4.png" alt="icon" />
                </div>
                </article>
                <div className={classes.contentBankIcons}>
                  <img src="/assets/belcart-footer.png" alt="icon" />
                  <img src="/assets/visa-footer.png" alt="icon" />
                  <img src="/assets/master-card-footer.png" alt="icon" />
                  <img src="/assets/icon-footer2.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
