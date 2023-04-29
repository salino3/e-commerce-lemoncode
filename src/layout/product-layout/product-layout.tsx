import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Footer, Header } from '../../components';
import { ListComponent } from '../../components-second-page';
import { Boletin } from '../../commons';
import * as classes from './product-layout.styles';


export interface PropsImg {
  img1: boolean;
  img2: boolean;
  img3: boolean;
  img4: boolean;
  img5: boolean;
  [index: string]: boolean;
};


export const ProductLayout: React.FC = () => {

    const isMobile: boolean = useMediaQuery({ maxWidth: "725px" });

    console.log(isMobile);

  const [toggleIcon, setToggleIcon] = React.useState<PropsImg>({
    img1: true,
    img2: false,
    img3: false,
    img4: false,
    img5: false,
  });

  function handleClick(index: string) {
    setToggleIcon((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.boxIsDesktop}>
        <aside className={classes.aside}>
          <ListComponent
            h2={"Mujeres"}
            toggleIcon={toggleIcon.img1}
            onClick={() => handleClick("img1")}
          />
          <ListComponent
            h2={"Hombres"}
            toggleIcon={toggleIcon.img2}
            onClick={() => handleClick("img2")}
          />
          <ListComponent
            h2={"Accesorios"}
            toggleIcon={toggleIcon.img3}
            onClick={() => handleClick("img3")}
          />
          <ListComponent
            h2={"Colecciones"}
            toggleIcon={toggleIcon.img4}
            onClick={() => handleClick("img4")}
          />
          <ListComponent
            h2={"Acciones"}
            toggleIcon={toggleIcon.img5}
            onClick={() => handleClick("img5")}
          />
        </aside>
        <div></div>
      </div>
      <h1>ProductLayout</h1>
      <Boletin />
      <Footer />
    </div>
  );
}
