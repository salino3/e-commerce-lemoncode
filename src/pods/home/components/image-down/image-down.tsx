import React from 'react';
import * as classes from './image-down.styles';

export const ImageDown: React.FC = () => {
  return (
    <div className={classes.container}>
      <div>@Onix</div>
      <div className={classes.content}>
        <img src="/assets/gallery/omix1.png" alt="image" />
        <img src="/assets/gallery/omix3.png" alt="image" />
        <img src="/assets/gallery/omix2.png" alt="image" />
        <img src="/assets/gallery/omix4.png" alt="image" />
        <img src="/assets/gallery/omix5.png" alt="image" />
        <img src="/assets/gallery/omix6.png" alt="image" />
        <img src="/assets/gallery/omix7.png" alt="image" />
        <img src="/assets/gallery/omix8.png" alt="image" />
      </div>
    </div>
  );
}
