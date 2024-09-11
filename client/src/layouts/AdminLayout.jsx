import React from "react";
import { Outlet } from "react-router-dom";

import AdminNavbar from "../components/admin/AdminNavbar";
import AdminFooter from "../components/admin/AdminFooter";
import AdminSidebar from "../components/admin/AdminSidebar";

import Navbar from "../components/shop/Navbar";
import Footer from "../components/shop/Footer";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="w-screen h-screen flex bg-[var(--color-bg-dark)] text-[var(--color-text-dark)]">
        <AdminSidebar />
        <Outlet />
      </div>
      {/* <AdminFooter /> */}
      <Footer />
    </>
  );
};

export default AdminLayout;
