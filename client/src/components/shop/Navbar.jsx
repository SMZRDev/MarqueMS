import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[var(--color-bg-light)] border-[var(--color-bg-dark)] dark:bg-[var(--color-bg-dark)]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/shop"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Marquee Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[var(--color-text-dark)]">
              WasnaMarquee
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="/shop/contact"
              className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] hover:underline"
            >
              Contact
            </Link>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/shop"
                  className="text-gray-900 dark:text-white hover:text-blue"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/shop/gallery"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/shop/menu"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Menu
                </a>
              </li>
              <li className="relative group">
                <a
                  href="/shop/about"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </a>
                <ul className="absolute hidden w-max mt-2 space-y-2 bg-white dark:bg-gray-800 group-hover:block">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Service 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Service 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Service 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
