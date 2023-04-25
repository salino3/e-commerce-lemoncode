import React from 'react';
import * as classes from './stylesLayout.scss';

interface Props {
    children: React.ReactNode;
};

export const HomeLayout: React.FC<Props> = ({children}) => {

  return (
    <div >
        {children}
    </div>
  )
}
