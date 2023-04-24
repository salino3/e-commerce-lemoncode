import React from 'react';
import './stylesLayout.scss';

interface Props {
    children: React.ReactNode;
};

export const HomeLayout: React.FC<Props> = ({children}) => {

  return (
    <div className='container_homelayout'>
        {children}
    </div>
  )
}
