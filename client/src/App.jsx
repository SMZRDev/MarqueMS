import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/shop/Navbar";
import Footer from "./components/shop/Footer";

import ShopLayout from "./layouts/ShopLayout";

import Home from "./pages/shop/Home";
import About from "./pages/shop/About";
import Contact from "./pages/shop/Contact";
import Gallery from "./pages/shop/Gallery";
import Menu from "./pages/shop/Menu";
import Terms from "./pages/shop/Terms";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/shop" element={<ShopLayout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
