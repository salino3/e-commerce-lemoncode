import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cx } from '@emotion/css';
import * as classes from './stylesButton';

interface Props {
  text: string;
  className?: string;
  route?: string;
  
}

export const Button: React.FC<Props> = (props) => {
 const {text, className, route} = props; 

  const navigate = useNavigate();

 function handleClick () {
  navigate(`${route}`)
 };

 return (
    <button onClick={handleClick} className={cx(classes.button, className)}>
        {text}
    </button>
  )
}
