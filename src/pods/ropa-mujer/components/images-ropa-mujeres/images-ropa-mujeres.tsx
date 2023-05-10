import React from 'react';
import * as classes from './box-images';

export const ImagesRopaMujeres: React.FC = () => {
  return (
    <div className={classes.boxImages}>
      <img src="/assets/gallery/box-images1.png" alt="image" />
      <img src="/assets/gallery/box-images2.png" alt="image" />
      <img src="/assets/gallery/box-images3.png" alt="image" />
      <img src="/assets/gallery/box-images4.png" alt="image" />
    </div>
  );
};
