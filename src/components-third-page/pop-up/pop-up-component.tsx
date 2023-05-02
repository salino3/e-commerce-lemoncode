import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './popup.styles';

interface Props {
    className: string;
}

export const PopUpComponent: React.FC<Props> = (props) => {
    const {className} = props;

  return (
    <div className={cx( classes.modal, className)}>
        <img src="/assets/image-popup1.png" alt="image" />
    </div>
  )
}
