import React from "react";

interface Props {
  children?: React.ReactNode;
  svgIcon?: React.ReactNode;
  className?: string;
  routeImg?: string;
  alt?: string;
  text?: string;
}

export const CardComponent: React.FC<Props> = (props) => {
  const { children, svgIcon, className, routeImg, alt = 'image' , text } = props;

  return (
    <div className={className}>
      {svgIcon}
      <img src={routeImg} alt={alt} />
      {text} <br />
      <span>{children}</span>
    </div>
  );
};
