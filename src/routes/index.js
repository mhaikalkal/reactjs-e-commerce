import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/prod" element={<SingleProduct />} />
    </Routes>
  );
};

export default RoutesWrapper;
