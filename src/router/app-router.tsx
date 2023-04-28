import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home, RopaMujer } from "../scenes";
import { root, woman } from '.';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={root} element={<Home />} />
      <Route path={woman} element={<RopaMujer />} />
    </Routes>
  );
}
