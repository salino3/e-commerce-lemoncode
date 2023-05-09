import React from 'react';
import * as classes from './card-home.styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  imgUrl?: string;
  text?: string;
  route?: string;
}

export const HomeCard: React.FC<Props> = (props) => {
 const {imgUrl, text, route} = props;

 const navigate = useNavigate();

 function handleClick() {
   return navigate(`${route}`);
 };

  return (
    <div onClick={handleClick} className={classes.container}>
      <img src={imgUrl} alt="image" />
      <h3>{text}</h3>
    </div>
  )
}
