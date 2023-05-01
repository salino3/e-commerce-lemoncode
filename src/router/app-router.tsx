import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Cart, Home, ProductPage, RopaMujer } from '../scenes';
import { cart, product, root, woman } from '.';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={root} element={<Home />} />
      <Route path={woman} element={<RopaMujer />} />
      <Route path={product} element={<ProductPage />} />
      <Route path={cart} element={<Cart />} />
    </Routes>
  );
}
