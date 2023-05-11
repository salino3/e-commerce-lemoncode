import React from 'react';
import { Footer, Header } from '@/commons';
import * as classes from './app.styles';

interface Props {
  children: React.ReactNode;
}


export const AppLayout: React.FC<Props> = (props) => {
  const {children} = props;


  return (
    <div className={classes.root}>
      <Header />
       { children }
      <Footer />
    </div>
  );
}
