import React from 'react';
import {useMediaQuery} from 'react-responsive';
import * as classes from './aside.styles';



export const Aside: React.FC = () => {

    const isMobile: boolean = useMediaQuery({maxWidth: "725px"});

  return (<div>{isMobile ? 
      <div>
      <h1>Hola</h1>
      </div> : 
      <div>
      
      </div>
     } 
    </div>);
}
