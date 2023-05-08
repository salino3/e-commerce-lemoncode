import React from "react";
import * as classes from './card-component.styles';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  imgClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  svgIcon?: React.ReactNode;
  className?: string;
  routeImg?: string;
  alt?: string;
  text?: string;
}

export const CardComponent: React.FC<Props> = (props) => {
  const { children, onClick, imgClick, svgIcon, className, routeImg, alt = 'image' , text } = props;

  return (
    <div className={className}>
      <span onClick={onClick} className={classes.svg} > {svgIcon}</span>
      <img onClick={imgClick} className={classes.img} src={routeImg} alt={alt} />
      {text} <br />
      <span>{children}</span>
    </div>
  );
};
