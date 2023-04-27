import React from "react";

interface Props {
  children: React.ReactNode;
  svgIcon: React.ReactNode;
  className: string;
  routeImg: string;
  text: string;
}

export const Card: React.FC<Props> = (props) => {
  const { children, svgIcon, className, routeImg, text } = props;

  return (
    <div className={className}>
      {svgIcon}
      <img src={routeImg} alt="image" />
      {text} <br />
      <span>{children}</span>
    </div>
  );
};
