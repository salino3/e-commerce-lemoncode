import React from 'react';
import * as classes from './stylesLayout';

interface Props {
    children: React.ReactNode;
};

export const HomeLayout: React.FC<Props> = ({children}) => {

  return (
    <div className={classes.root} >
        {children}
    </div>
  )
}
