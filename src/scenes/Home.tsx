import React from 'react';
import { Description } from '../components/description';
import { HomeLayout } from '../layout';
import { ActualBox, ExitoVentas, Header, NuevasColecciones } from '../components';
import { Button } from '../commons';
import * as classes from './stylesScene';

export const Home: React.FC = () => {

  return (
    <HomeLayout>
      <Header />
      <div className={classes.boxDescription}>
      <img className={classes.imgPrimary} src="/assets/MainImage.png" alt="home-image" />
      <Description />
      </div>
      <ActualBox />
      <ExitoVentas />
      {/* <Button route={'/'} text={'Todas las colecciones'} className={classes.buttonHome} /> */}
      <NuevasColecciones />
    </HomeLayout>
  );
}
