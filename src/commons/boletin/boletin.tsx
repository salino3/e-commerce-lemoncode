import React from 'react';
import { Button } from '../button';
import * as classes from './boletin.styles';

export const Boletin: React.FC = () => {

  const [boletin, setBoletin] = React.useState<string>("");

 const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (
   event: React.ChangeEvent<HTMLInputElement>) => {
    setBoletin(event.target.value); 
 };

 const handleSubmit: React.FormEventHandler<HTMLFormElement>  = (
   event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

     console.log(boletin);
     setBoletin("");
 };

  return (
    <div className={classes.container}>
      <div>
        <h3 className={classes.h3}>Suscríbase al boletín de noticias</h3>
        <p className={classes.p}>
          ¿y obtenga un 10% de descuento en su primera compra!
        </p>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          id="boletin"
          onChange={handleChange}
          value={boletin}
          className={classes.input}
          placeholder="Introduzca su dirección Email"
        />
        <Button type="submit" className={classes.button} text={"Suscribase"} />
      </form>
    </div>
  );
}
