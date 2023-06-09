import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './card-home.styles';

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
      <div className={classes.boxh3}>
      <h3>{text}</h3>
      </div>
    </div>
  )
}
