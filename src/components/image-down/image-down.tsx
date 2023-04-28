import React from 'react';
import * as classes from './image-down.styles';

export const ImageDown: React.FC = () => {
  return (
    <div className={classes.container}>
      <img src="/assets/arrobaOmix.png" alt="icon" />
      <div>
        <img src="/assets/woman_1.png" alt="image" />
        <img src="/assets/woman_2.png" alt="image" />
        <img src="/assets/man_7.png" alt="image" />
        <img src="/assets/woman_3.png" alt="image" />
        <img src="/assets/man_11.png" alt="image" />
        <img src="/assets/woman_4.png" alt="image" />
        <img src="/assets/man_8.png" alt="image" />
        <img src="/assets/woman_5.png" alt="image" />
      </div>
    </div>
  );
}
