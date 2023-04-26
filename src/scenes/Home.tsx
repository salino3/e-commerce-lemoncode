import React from 'react';
import { Description } from '../components/description';
import { HomeLayout } from '../layout';
import { ActualBox } from '../components';
import * as classes from './stylesScene';

export const Home: React.FC = () => {

  return (
    <HomeLayout>
      <div className={classes.boxDescription}>
      <img className={classes.imgPrimary} src="/assets/MainImage.png" alt="home-image" />
      <Description />
      </div>
      <ActualBox />
    </HomeLayout>
  );
}
