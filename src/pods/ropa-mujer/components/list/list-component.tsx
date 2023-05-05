import React from "react";

interface Props {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  toggleIcon?: boolean;
  h2?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
};

export const ListComponent: React.FC<Props> = (props) => {
  const {
    onClick,
    toggleIcon,
    h2,
    text1 = "Ver todos",
    text2 = "Éxitos de ventas",
    text3 = "Ropa",
    text4 = "Ropa de abrigo",
    text5 = "Deportes",
  } = props;

    return (
      <div  onClick={onClick}>
        <h2>
          {h2}
          <img
            src={`/assets/icon-${!toggleIcon ? "minus" : "plus"}.png`}
            alt="icon"
          />
        </h2>
        {toggleIcon && (
          <div>
            <div>{text1}</div>
            <div>{text2}</div>
            <div>{text3}</div>
            <div>{text4}</div>
            <div>{text5}</div>
          </div>
        )}
      </div>
    );
};
