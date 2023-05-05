import React from 'react';
import * as classes from './image-down.styles';

export const ImageDown: React.FC = () => {
  return (
    <div className={classes.container}>
      <div>@Onix</div>
      <div className={classes.content}>
        <img src="/assets/omix1.png" alt="image" />
        <img src="/assets/omix2.png" alt="image" />
        <img src="/assets/omix3.png" alt="image" />
        <img src="/assets/omix4.png" alt="image" />
        <img src="/assets/omix5.png" alt="image" />
        <img src="/assets/omix6.png" alt="image" />
        <img src="/assets/omix7.png" alt="image" />
        <img src="/assets/omix8.png" alt="image" />
      </div>
    </div>
  );
}
