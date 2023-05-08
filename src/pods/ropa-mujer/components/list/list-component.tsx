import React from "react";
import { Link } from "react-router-dom";
import * as classes from './list.styles';

interface Props {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  toggleIcon?: boolean;
  h2?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
};

export const ListComponent: React.FC<Props> = (props) => {
  const {
    onClick,
    toggleIcon,
    h2,
    text1 = "Ver todos",
    text2 = "Éxitos de ventas",
    text3 = "Nueva colección",
    text4 = "nuevos productos"
    } = props;

    return (
      <div onClick={onClick}>
        <h2>
          {h2}
          <img src={`/assets/icon-${!toggleIcon ? 'minus' : 'plus'}.png`} alt="icon" />
        </h2>
        {toggleIcon && (
          <div className={classes.boxLinks}>
            <div>{text1}</div>
            <div>
              <Link to={'/'}>
                {text2}
              </Link>
            </div>
            <div>
              <Link to={'/'}>{text3}</Link>
            </div>
            <div>
              <Link to={'/'}>{text4}</Link>
            </div>
          </div>
        )}
      </div>
    );
};

