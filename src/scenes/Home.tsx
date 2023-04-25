import React from 'react';
import { HomeLayout } from '../layout';
import * as classes from './stylesScene';

export const Home: React.FC = () => {

  return (
    <HomeLayout>      
      <h1>Home</h1>
       <img src="../../public/assets/Rectangle-11.png" alt="home-image" />
    </HomeLayout>
  );
}
