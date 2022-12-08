import React from "react";
import { navData } from "../ComponentsAPI/NavApi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="p-6 md:py-6 md:px-40">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold"><Link to="/"> Store.io</Link></h1>
        <ul className="flex">
          {navData.map(({ id, title, goto }) => (
            <Link key={id} to={goto}>
              <li className="px-3 font-semibold">
                {title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
