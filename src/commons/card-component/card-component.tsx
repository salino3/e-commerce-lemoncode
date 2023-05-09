import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './card-component.styles';

interface Props {
  onClick?: () => void;
  className?: string;
  fixPosition?: string;
  imageUrl?: string;
  name?: string;
  price?: string;
  alt?: string;
  offer?: string;
  sizes?: string;
  colors?: string;
  showIcon?: boolean;
};


export const CardComponent: React.FC<Props> = props => {
  const {
    onClick,
    className,
    fixPosition,
    imageUrl,
    alt = 'image',
    name,
    price,
    offer,
    sizes,
    colors,
    showIcon = true,
  } = props;

  const [redHearth, setRedHearth] = React.useState<boolean>(false);

  const onLike = () =>{
   setRedHearth(!redHearth)
  };

  return (
    <div className={cx(classes.root, className)}>
      {showIcon && (
        <div onClick={onLike} className={cx(classes.iconContainer, fixPosition)}>
          <svg
            className={cx(classes.icon, {
              [classes.hearthRed]: redHearth,
            })}
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8933 2.07333C13.5528 1.73267 13.1485 1.46243 12.7036 1.27805C12.2586 1.09368 11.7817 0.998779 11.3 0.998779C10.8183 0.998779 10.3414 1.09368 9.89643 1.27805C9.45146 1.46243 9.04717 1.73267 8.70667 2.07333L8 2.78L7.29333 2.07333C6.60554 1.38553 5.67269 0.999136 4.7 0.999136C3.72731 0.999136 2.79446 1.38553 2.10666 2.07333C1.41887 2.76112 1.03247 3.69397 1.03247 4.66666C1.03247 5.63935 1.41887 6.5722 2.10666 7.26L2.81333 7.96666L8 13.1533L13.1867 7.96666L13.8933 7.26C14.234 6.91949 14.5042 6.51521 14.6886 6.07023C14.873 5.62526 14.9679 5.14832 14.9679 4.66666C14.9679 4.185 14.873 3.70807 14.6886 3.26309C14.5042 2.81812 14.234 2.41383 13.8933 2.07333V2.07333Z"
              stroke="#212429"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      <img onClick={onClick} className={classes.img} src={imageUrl} alt={alt} />
      <div className={classes.footer}>
        <div className={classes.contentLeft}>
        {name &&  <div>{name}</div>}
         {price && <div>{price}</div>}
        </div>
       {offer && <div>{offer}</div> }
        <div className={classes.contentRight}>
       {sizes && <div> {sizes} </div>}
          {colors && <div> {colors} </div>}
        </div>
      </div>
    </div>
  );
};
