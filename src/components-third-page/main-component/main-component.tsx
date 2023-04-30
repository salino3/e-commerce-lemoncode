import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MainComponentIsdesktop } from '../main-component-isdesktop';
import { MainComponentIsmobile } from '../main-component-ismobile';
import * as classes from './main-component.styles';


export const MainComponent: React.FC = () => {

   const isMobile: boolean = useMediaQuery({ maxWidth: "725px" });

   console.log(isMobile);

  return (

    <div className={classes.container}>
     {isMobile ? ( 
      <MainComponentIsmobile />
      ) : (
     <MainComponentIsdesktop />
      )}
    </div>
  );
}
