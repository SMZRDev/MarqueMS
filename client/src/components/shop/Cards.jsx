import React from "react";

const Cards = ({ MenuTitle, MenuPrice, MenuFor, MenuArr }) => {
  return (
    <div className="w-full max-w-sm m-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row justify-between items-center">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          {MenuTitle}
        </h5>
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-sm dark:text-red-400">
          @ Rs. {MenuPrice}/- Per Guest
        </h5>
      </div>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Special Menu for {MenuFor} Functions
      </p>
      <ul className="my-4 space-y-3">
        {MenuArr.map((item) => {
          return (
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span key={item} className="flex-1 ms-3 whitespace-nowrap">
                  {item}
                </span>
                {/* <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  Select One
                </span> */}
              </a>
            </li>
          );
        })}
      </ul>
      <div>
        <a
          href="#"
          className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
        >
          Customize this Menu -
        </a>
      </div>
    </div>
  );
};

export default Cards;
