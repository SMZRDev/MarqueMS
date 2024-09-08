import React from "react";

import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div className="h-full w-[10%] p-4 bg-gray-700 text-white">
        <ul>
          <li>
            <Link>Check</Link>
          </li>
          <li>
            <Link>Check</Link>
          </li>
          <li>
            <Link>Check</Link>
          </li>
          <li>
            <Link>Check</Link>
          </li>
          <li>
            <Link>Check</Link>
          </li>
          <li>
            <Link>Check</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
