import React from 'react';
import { Boletin, Footer, Header } from '@/commons';
import { ProductComponent } from '@/pods/product';
import * as classes from './product-layout.styles';


export const ProductLayout: React.FC = () => {

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    handleScroll();
  }, []);


  return (
    <div className={classes.container}>
      <Header />
      <ProductComponent />
      <hr />
      <Boletin />
      <Footer />
    </div>
  );
}
