import React from "react";
import { Button } from '@/commons';
import { CartImages } from "../cart-images";
import * as classes from "./primary-cart.styles";

export const PrimaryComponentCart: React.FC = () => {
  return (
    <div className={classes.container}>
      <h2>Cesta</h2>
      <div className={classes.content}>
        <div className={classes.contentImages}>
          <CartImages
            article={`Vaqueros blancos`}
            routeImg={"image-cart2.png"}
            text1={"Blanco"}
            text2={"XS"}
            numArticle={1}
            price={79.99}
          />
          <br /> 
          <CartImages
            article={"Vestido"}
            routeImg={"image-cart1.png"}
            text1={"Flores"}
            text2={"XS"}
            numArticle={1}
            price={79.99}
          />
        </div>
        <div className={classes.boxForm}>
          <h2>Código promocional</h2>
          <form>
            <div className={classes.boxInput}>
              <input
                className={classes.input}
                required
                placeholder="Introduzca el código"
                type="text"
              />
              <button title="enter-code" type="submit" className={classes.btn}>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L6 6L1 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className={classes.text}>
              <h3>Importe del pedido</h3>
              <div>
                Coste de los bienes <span>159,97 €</span>
              </div>
              <div>
                Entrega <span>10 €</span>
              </div>
              <div>
                Importe del descuento <span>0 €</span>
              </div>
            </div>
            <hr />
            <div className={classes.totalImport}>
              Importe total <span>0 €</span>
            </div>
            <Button type="submit" className={classes.button}>
              Pagar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
