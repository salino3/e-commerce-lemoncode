import React from 'react';

interface Props {
  children?: React.ReactNode;
  classCard?: string;
  classDescription?: string;
  routeImg?: string;
  alt?: string;
}

export const CardList: React.FC<Props> = (props) => {
 const { children, classCard, classDescription, routeImg, alt = "image" } = props;

  return (
    <div className={classCard}>
        <img src={routeImg} alt={alt} />
        <div className={classDescription}>
          {children}
        </div>
      </div>  )
}
