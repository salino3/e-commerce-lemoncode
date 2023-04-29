import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Home, ProductPage, RopaMujer } from '../scenes';
import { product, root, woman } from '.';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={root} element={<Home />} />
      <Route path={woman} element={<RopaMujer />} />
      <Route path={product} element={<ProductPage />} />
    </Routes>
  );
}
