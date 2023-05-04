import React from 'react';
import * as classes from './footer-desktop.styles';

export const FooterDesktop: React.FC = () => {
  return (
    <div className={classes.isDesktop}>
      <div className={classes.lastText}>
        <div className={classes.boxEntrega}>
          <div className={classes.divImgEntrega}>
            <img src="/assets/fi_truck.png" alt="icon" />
          </div>
          <div className={classes.divText}>Entrega</div>
        </div>
        <h3>Compradores</h3>
        <p>
          Pago <br />
          Política de datos personales <br />
          Acciones <br />
          Chenques regalo
        </p>
        <p>
          © 2020 – 2022 ООО «Omix Stor». <br />
          Todos los derechos reservados.
        </p>
      </div>
      <div>
        <div className={classes.lastText}>
          <div className={classes.boxReturn}>
            <div className={classes.divImgReturn}>
              <img src="/assets/Group178.png" alt="icon" />
            </div>
            <div className={classes.divText}>Devoluciones y cambios</div>
          </div>
          <p>
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
          <div className={classes.boxPhone}>
            <div className={classes.divImgPhone}>
              <img src="/assets/Group33.png" alt="icon" />
            </div>
            <div className={classes.divText}>+375 (29) 749-18-23 </div>
          </div>
          <h3>Quiènes somos</h3>
          <p>
            Quiénes somos <br />
            Póngase en contacto con <br />
            Noticias <br />
            Empleo <br />
          </p>
          <p>En el registro mercantil desde el 23 de junio de 2010, número de registro 256476, UNP 14886482</p>
        </div>
      </div>
      <div>
        <div className={classes.lastText}>
          <div className={classes.boxMail}>
            <div className={classes.divImgPhone}>
              <img src="/assets/Group34.png" alt="icon" />
            </div>
            <div className={classes.divText}>+375 (29) 749-18-23 </div>
          </div>

          <div className={classes.boxImges}>
            <article>
              <br />
              <h3>Estamos en las redes sociales</h3>
              <div className={classes.boxSocialNetworks}>
                <img src="/assets/icon-footer1.png" alt="icon" />
                <img src="/assets/icon-footer8.png" alt="icon" />
                <img src="/assets/icon-footer9.png" alt="icon" />
                <img src="/assets/icon-footer10.png" alt="icon" />
                <img src="/assets/icon-footer11.png" alt="icon" />
                <img src="/assets/icon-footer4.png" alt="icon" />
              </div>
            </article>

            <article className={classes.contentBankIcons}>
              <img src="/assets/belcart-footer.png" alt="icon" />
              <img src="/assets/visa-footer.png" alt="icon" />
              <img src="/assets/master-card-footer.png" alt="icon" />
              <img src="/assets/icon-footer2.png" alt="icon" />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
