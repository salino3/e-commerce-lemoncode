import React from 'react';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  classCard?: string;
  classDescription?: string;
  routeImg?: string;
  alt?: string;
}

export const CardList: React.FC<Props> = (props) => {
 const { children, onClick, classCard, classDescription, routeImg, alt = 'image' } = props;

  return (
    <div
    onClick={onClick}
      className={classCard}>
        <img src={routeImg} alt={alt} />
        <div className={classDescription}>
          {children}
        </div>
      </div>  )
}
