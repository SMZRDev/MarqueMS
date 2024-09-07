import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/shop/Navbar";
import Footer from "../components/shop/Footer";

const ShopLayout = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-[var(--color-bg-dark)] text-[var(--color-text-dark)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default ShopLayout;
