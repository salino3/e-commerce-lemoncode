import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, CheckoutScene, HomeScene, Payment, ProductPage, RopaMujer,  } from "@/scenes";
import { switchRoutes } from "./routes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.woman} element={<RopaMujer />} />
        <Route path={switchRoutes.product} element={<ProductPage />} />
        <Route path={switchRoutes.cart} element={<Cart />} />
        <Route path={switchRoutes.checkout} element={<CheckoutScene />} />
        <Route path={switchRoutes.payment} element={<Payment />} />
      </Routes>
    </Router>
  );
};
