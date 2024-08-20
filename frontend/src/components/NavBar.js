import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 bg-white relative z-20">
      <Link to="/">
        <h1 className="w-full text-3xl font-extrabold text-blue-600 flex flex-row items-center">
          &lt;/&gt; REACT
        </h1>
      </Link>
      {!nav && (
        <ul className="items-center text-sm hidden md:flex">
          <ScrollLink
            className="p-4 cursor-pointer hover:text-gray-500"
            to="hero"
            smooth={true}
            duration={1000}
          >
            Home
          </ScrollLink>
          <ScrollLink
            className="p-4 cursor-pointer hover:text-gray-500"
            to="features"
            smooth={true}
            duration={1000}
          >
            Features
          </ScrollLink>
          <ScrollLink
            className="p-4 cursor-pointer hover:text-gray-500"
            to="contact"
            smooth={true}
            duration={1000}
          >
            Contact
          </ScrollLink>
          <Link to="/register">
            <button className="ml-4 bg-blue-600 hover:bg-blue-800 text-white py-2 px-6 rounded-md">
              Register
            </button>
          </Link>
        </ul>
      )}
      {!nav ? (
        <AiOutlineMenu
          size={20}
          onClick={handleNav}
          className="block md:hidden hover:cursor-pointer"
        />
      ) : (
        <AiOutlineClose
          size={20}
          onClick={handleNav}
          className="hover:cursor-pointer"
        />
      )}
      <div
        className={`fixed left-0 top-0 w-[60%] h-full mt-24 bg-white transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col text-sm">
          <li className="p-4 border-b-2 border-gray-300">
            <ScrollLink to="hero" smooth={true} duration={1000}>
              Home
            </ScrollLink>
          </li>
          <li className="p-4 border-b-2 border-gray-300">
            <ScrollLink to="features" smooth={true} duration={1000}>
              Features
            </ScrollLink>
          </li>
          <li className="p-4 border-b-2 border-gray-300">
            <ScrollLink to="contact" smooth={true} duration={1000}>
              Contact
            </ScrollLink>
          </li>
          <button className="ml-4 bg-blue-600 hover:bg-blue-800 text-white py-2 px-6">
            Register
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
