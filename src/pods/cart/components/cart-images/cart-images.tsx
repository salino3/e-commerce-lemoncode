import React from 'react';
import { Button } from '@/commons';
import * as classes from './cart-images.styles';

interface Props {
  article: string;
  routeImg: string;
  text1: string;
  text2: string;
  numArticle: number;
  price: number;
}

export const CartImages: React.FC<Props> = (props) => {
 const { article, routeImg, text1, text2, numArticle, price } = props;

  return (
    <div className={classes.image}>
      <img
        className={classes.img}
        src={`/assets/${routeImg}`}
        alt="image"
      />
      <div className={classes.text}>

        <h3>{article}</h3>
        <h3>
          Color: <span>{text1}</span>
        </h3>
        <h3>
          Talla: <span>{text2}</span>
        </h3>
        <h3>
          Cantidad: <span>{numArticle}</span>
        </h3>
    
      </div>
      <h4 className={classes.price}>{price} €</h4>
      <svg
        className={classes.svgIcon}
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.857 4.14244H12.1427C12.1427 3.57412 11.917 3.02907 11.5151 2.62721C11.1132 2.22535 10.5682 1.99958 9.99986 1.99958C9.43154 1.99958 8.8865 2.22535 8.48463 2.62721C8.08277 3.02907 7.857 3.57412 7.857 4.14244V4.14244ZM6.57129 4.14244C6.57129 3.23312 6.93251 2.36105 7.57549 1.71807C8.21848 1.07509 9.09055 0.713867 9.99986 0.713867C10.9092 0.713867 11.7812 1.07509 12.4242 1.71807C13.0672 2.36105 13.4284 3.23312 13.4284 4.14244H18.7856C18.9561 4.14244 19.1196 4.21017 19.2401 4.33073C19.3607 4.45129 19.4284 4.6148 19.4284 4.7853C19.4284 4.95579 19.3607 5.11931 19.2401 5.23986C19.1196 5.36042 18.9561 5.42815 18.7856 5.42815H17.6627L16.6196 17.945C16.5437 18.8556 16.1284 19.7044 15.456 20.3231C14.7836 20.9418 13.9033 21.2852 12.9896 21.2853H7.01015C6.09643 21.2852 5.21609 20.9418 4.54372 20.3231C3.87135 19.7044 3.45604 18.8556 3.38015 17.945L2.337 5.42815H1.21415C1.04365 5.42815 0.880137 5.36042 0.759577 5.23986C0.639018 5.11931 0.571289 4.95579 0.571289 4.7853C0.571289 4.6148 0.639018 4.45129 0.759577 4.33073C0.880137 4.21017 1.04365 4.14244 1.21415 4.14244H6.57129ZM4.66157 17.8379C4.71059 18.4271 4.97925 18.9763 5.41427 19.3768C5.84929 19.7772 6.4189 19.9995 7.01015 19.9996H12.9896C13.5808 19.9995 14.1504 19.7772 14.5854 19.3768C15.0205 18.9763 15.2891 18.4271 15.3381 17.8379L16.3736 5.42815H3.627L4.66157 17.8379ZM8.07129 8.42815C8.24179 8.42815 8.4053 8.49588 8.52586 8.61644C8.64642 8.737 8.71415 8.90051 8.71415 9.07101V16.3567C8.71415 16.5272 8.64642 16.6907 8.52586 16.8113C8.4053 16.9319 8.24179 16.9996 8.07129 16.9996C7.90079 16.9996 7.73728 16.9319 7.61672 16.8113C7.49616 16.6907 7.42843 16.5272 7.42843 16.3567V9.07101C7.42843 8.90051 7.49616 8.737 7.61672 8.61644C7.73728 8.49588 7.90079 8.42815 8.07129 8.42815ZM12.5713 9.07101C12.5713 8.90051 12.5036 8.737 12.383 8.61644C12.2624 8.49588 12.0989 8.42815 11.9284 8.42815C11.7579 8.42815 11.5944 8.49588 11.4739 8.61644C11.3533 8.737 11.2856 8.90051 11.2856 9.07101V16.3567C11.2856 16.5272 11.3533 16.6907 11.4739 16.8113C11.5944 16.9319 11.7579 16.9996 11.9284 16.9996C12.0989 16.9996 12.2624 16.9319 12.383 16.8113C12.5036 16.6907 12.5713 16.5272 12.5713 16.3567V9.07101Z"
          fill="#212429"
        />
      </svg>
      <div className={classes.btnBox}>
        <Button className={classes.lightButton} route="/cart">
          <img src={`/assets/icon-minus.png`} alt="icon" />
          1
          <img src={`/assets/icon-plus.png`} alt="icon" />
        </Button>
      </div>
    </div>
  );
}