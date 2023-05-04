import React from 'react';
import {useMediaQuery} from 'react-responsive';
import { ImagesRopaMujeres } from '../images-ropa-mujeres';
import { ListComponent } from '../list/list-component';
import * as classes from './primary-component.styles';

export interface PropsImg {
  img1: boolean;
  img2: boolean;
  img3: boolean;
  img4: boolean;
  img5: boolean;
  [index: string]: boolean;
};

export const PrimaryComponent: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: "725px" });

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
      {isMobile ? (
        <div>
          <div className={classes.boxIcons}>
            <div>
              <img src="/assets/shape-aside-2.png" alt="arrow" />
              Ropa de mujer
            </div>
            <img src="/assets/shape-aside-1.png" alt="options" />
          </div>
          <ImagesRopaMujeres />
        </div>
      ) : (
        <div className={classes.boxIsDesktop}>
          <div >
            <aside className={classes.aside}>
              <ListComponent h2={'Mujeres'} toggleIcon={toggleIcon.img1} onClick={() => handleClick("img1")} />
              <ListComponent h2={'Hombres'} toggleIcon={toggleIcon.img2} onClick={() => handleClick("img2")} />
              <ListComponent h2={'Accesorios'} toggleIcon={toggleIcon.img3} onClick={() => handleClick("img3")} />
              <ListComponent h2={'Colecciones'} toggleIcon={toggleIcon.img4} onClick={() => handleClick("img4")} />
              <ListComponent h2={'Acciones'} toggleIcon={toggleIcon.img5} onClick={() => handleClick("img5")} />
            </aside>
          </div>
          <div>
          <ImagesRopaMujeres />
          </div>
        </div>
      )}
    </div>
  );
}
