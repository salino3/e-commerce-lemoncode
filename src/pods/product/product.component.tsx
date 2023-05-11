import React from 'react';
import { Boletin } from '@/commons';
import { MainComponent, SecundaryComponent } from './components';
import * as classes from './product.styles';

export const ProductComponent: React.FC = () => {

const handleScroll = () => {
  window.scrollTo(0, 0);
};

React.useEffect(() => {
  handleScroll();
}, []);

  return (
    <>
      <div className={classes.root}>
        <MainComponent />
        <SecundaryComponent />
      </div>
      <hr className={classes.hr} />
      <Boletin />
    </>
  );
};
