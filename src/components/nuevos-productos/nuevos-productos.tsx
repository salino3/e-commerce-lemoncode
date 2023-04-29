import React from 'react';
import { cx } from '@emotion/css';
import { Link } from 'react-router-dom';
import { CardComponent } from '../../commons';
import * as classes from './nuevos-productos.styles';

interface PropsImg {
  img1: boolean;
  img2: boolean;
  img3: boolean;
  img4: boolean;
  img5: boolean;
  img6: boolean;
  img7: boolean;
  img8: boolean;
  [index: string]: boolean;
}


export const NuevosProductos: React.FC = () => {
  const [redHearth, setRedHearth] = React.useState<PropsImg>({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
    img5: false,
    img6: false,
    img7: false,
    img8: false,
  });

  function handleClick(index: string) {
    setRedHearth((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Éxitos de ventas</h2>
      <div className={classes.containerLinks}>
        <Link to={"/"}>Mujeres</Link>
        <Link to={"/"}>Hombres</Link>
      </div>
      <div className={classes.content}>
        <CardComponent
          onClick={() => handleClick("img1")}
          className={classes.item}
          svgIcon={
            <svg
              className={cx(classes.hearthIcon, {
                [classes.hearthRed]: redHearth.img1,
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
          }
          routeImg="/assets/man_1.png"
        >
          Polo <br />
          <span>44.95 €</span>
        </CardComponent>
        <CardComponent
          className={classes.item}
          onClick={() => handleClick("img2")}
          svgIcon={
            <svg
              className={cx(classes.hearthIcon, {
                [classes.hearthRed]: redHearth.img2,
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
          }
          routeImg="/assets/man_2.png"
        >
          Camiseta <br />
          <span>25.00 €</span>
        </CardComponent>
        <CardComponent
          className={classes.item}
          onClick={() => handleClick("img3")}
          svgIcon={
            <svg
              className={cx(classes.hearthIcon, {
                [classes.hearthRed]: redHearth.img3,
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
          }
          routeImg="/assets/man_3.png"
        >
          Pantalones <br />
          deportivos <br />
          <span>49.95 €</span>
        </CardComponent>
        <CardComponent
          className={classes.item}
          onClick={() => handleClick("img4")}
          svgIcon={
            <svg
              className={cx(classes.hearthIcon, {
                [classes.hearthRed]: redHearth.img4,
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
          }
          routeImg="/assets/man_4.png"
        >
          Camiseta <br />
          <span>27.99 €</span>
        </CardComponent>
        <CardComponent
          className={classes.item}
          onClick={() => handleClick("img5")}
          svgIcon={
            <svg
              className={cx(classes.hearthIcon, {
                [classes.hearthRed]: redHearth.img5,
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
          }
          routeImg="/assets/man_5.png"
        >
          Juego camisetas <br />
          (5 piezas) <br />
          <span>75.95 €</span>
        </CardComponent>
        <CardComponent
          className={classes.item}
          onClick={() => handleClick("img6")}
          svgIcon={
            <svg
              className={cx(classes.hearthIcon, {
                [classes.hearthRed]: redHearth.img6,
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
          }
          routeImg="/assets/man_6.png"
        >
          Camisa <br />
          <span>25.00 €</span>
        </CardComponent>
        <CardComponent
          className={cx(classes.item, classes.item2)}
          onClick={() => handleClick("img7")}
          svgIcon={
            <svg
              className={cx(classes.hearthIcon, {
                [classes.hearthRed]: redHearth.img7,
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
          }
          routeImg="/assets/man_9.png"
        >
          Sudadera <br />
          <span>44.99 €</span>
        </CardComponent>
        <CardComponent
          className={cx(classes.item, classes.item2)}
          onClick={() => handleClick("img8")}
          svgIcon={
            <svg
              className={cx(classes.hearthIcon, {
                [classes.hearthRed]: redHearth.img8,
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
          }
          routeImg="/assets/man_10.png"
        >
          Camiseta <br />
          <span>22.99 €</span>
        </CardComponent>
      </div>
    </div>
  );
}
