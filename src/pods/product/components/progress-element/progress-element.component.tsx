import React from 'react';
import * as classes from './progress-element.styles';

export const ProgressElement: React.FC = () => {
  return (
    <div className={classes.opinions}>
      <div className={classes.numOpinion}>4.5</div>
      <div className={classes.text}>basados en 2 opiniones</div>
      <div className={classes.stars}>
        <img src="/assets/gallery/star.png" alt="reviews" />
        <img src="/assets/gallery/star.png" alt="reviews" />
        <img src="/assets/gallery/star.png" alt="reviews" />
        <img src="/assets/gallery/star.png" alt="reviews" />
        <img src="/assets/star-half-color.png" alt="reviews" />
      </div>
      <div className={classes.progressLines}>
        <div>
          5
          <div className={classes.progressBar}>
            <div className={classes.progressBarInner}></div>
          </div>
          <p>50%</p>
        </div>
        <div>
          4
          <div className={classes.progressBar}>
            <div className={classes.progressBarInner}></div>
          </div>
          <p>50%</p>
        </div>
        <div>
          3
          <div className={classes.progressBar}>
            <div className={classes.progressBarInnerZero}></div>
          </div>
          <p>0%</p>
        </div>
        <div>
          2
          <div className={classes.progressBar}>
            <div className={classes.progressBarInnerZero}></div>
          </div>
          <p>0%</p>
        </div>
        <div>
          1
          <div className={classes.progressBar}>
            <div className={classes.progressBarInnerZero}></div>
          </div>
          <p>0%</p>
        </div>
      </div>
    </div>
  );
}
