import React from 'react';
import { GridImages, PrimaryComponent } from './components';
import { Boletin } from '@/commons';
import * as classes from './ropa-mujer.styles';


export const RopaMujerComponent: React.FC = () => {

const handleScroll = () => {
  window.scrollTo(0, 0);
};

React.useEffect(() => {
  handleScroll();
}, []);

  return (
    <>
      <div className={classes.root}>
        <PrimaryComponent />
        <GridImages />
      </div>
      <hr className={classes.hr}/>
      <Boletin />
    </>
  );
}
