import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cx } from '@emotion/css';
import * as classes from './button.styles';

interface Props {
  children: React.ReactNode;
  className?: string;
  route?: string;
  disabled?: boolean | undefined;
  type?: "submit" | "reset" | undefined;
}

export const Button: React.FC<Props> = (props) => {
 const {children, className, route, disabled, type } = props; 

  const navigate = useNavigate();

 function handleClick () {
  if(route){
  navigate(`${route}`);
  };
 };

 return (
    <button disabled={disabled} type={type} onClick={handleClick} className={cx(classes.button, className)}>
     {children}
    </button>
  )
}
