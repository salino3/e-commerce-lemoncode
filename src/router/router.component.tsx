import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Cart, Home, ProductPage, RopaMujer } from '@/scenes';
import { switchRoutes } from './routes';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path={switchRoutes.root} element={<Home />} />
      <Route path={switchRoutes.woman} element={<RopaMujer />} />
      <Route path={switchRoutes.product} element={<ProductPage />} />
      <Route path={switchRoutes.cart} element={<Cart />} />
    </Routes>
    </Router>
  );
}
