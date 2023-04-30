import React from 'react';
import * as classes from './reviews.styles';
import { Button } from '../../commons';

export const ReviewComponent: React.FC = () => {
  return (
    <div className={classes.container}>
     <Button className={classes.button} >
     Deja tu opinión
     </Button>        
    </div>
  )
}
