import React from "react";

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
      <span onClick={onClick}> {svgIcon}</span>
      <img onClick={imgClick} src={routeImg} alt={alt} />
      {text} <br />
      <span>{children}</span>
    </div>
  );
};
