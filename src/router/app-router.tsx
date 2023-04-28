import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home } from '../scenes';
import { root } from '.';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
        <Route path={root} element={<Home />} />
    </Routes>
  )
}
