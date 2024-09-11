import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/shop/Navbar";
import Footer from "./components/shop/Footer";

import AdminLayout from "./layouts/AdminLayout";
import ShopLayout from "./layouts/ShopLayout";

import Dashboard from "./pages/admin/Dashboard";
import UpdateMenu from "./pages/admin/UpdateMenu";
import UpdateTerms from "./pages/admin/UpdateTerms";

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
        <Route
          path=""
          element={
            <>
              <Link
                to="/shop"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm pt-10 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Client
              </Link>
              <Link
                to="/admin"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm pt-10 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Admin
              </Link>
            </>
          }
        />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="menu" element={<UpdateMenu />} />
          <Route path="terms" element={<UpdateTerms />} />
        </Route>
        <Route path="/shop" element={<ShopLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
