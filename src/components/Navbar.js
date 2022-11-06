import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <div className="fixed z-50 flex h-[100px] w-[100vw] flex-col items-center justify-between bg-amber-900 px-5 text-center text-amber-50  shadow-2xl md:h-[70px] md:flex-row md:shadow-xl">
      <div className="logo text-4xl">
        <img
          className="mt-2 w-[150px] md:mt-0 md:w-[190px]"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex items-center md:mr-20">
        <ul className=" flex items-center gap-10 pb-3 font-semibold text-amber-100 md:pb-0 md:text-lg">
          <li className="text-sm md:text-lg">
            <Link to="/"> Feet-Meter</Link>
          </li>
          <li>
            <Link to="/temp"> Temparature</Link>
          </li>
          <li>
            <Link to="/calculator"> Calculator</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
