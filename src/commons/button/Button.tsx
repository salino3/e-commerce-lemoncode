import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cx } from '@emotion/css';
import * as classes from './stylesButton';

interface Props {
  children: React.ReactNode;
  className?: string;
  route?: string;
  type?: "submit" | "reset" | undefined;
}

export const Button: React.FC<Props> = (props) => {
 const {children, className, route, type } = props; 

  const navigate = useNavigate();

 function handleClick () {
  if(route){
  navigate(`${route}`);
  };
 };

 return (
    <button type={type} onClick={handleClick} className={cx(classes.button, className)}>
     {children}
    </button>
  )
}
