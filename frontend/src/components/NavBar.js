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
        <h1 className="flex flex-row items-center w-full text-3xl font-extrabold text-blue-600">
          &lt;/&gt; REACT
        </h1>
      </Link>
      {!nav && (
        <ul className="items-center hidden text-sm md:flex">
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
            <button className="px-6 py-2 ml-4 text-white bg-blue-600 rounded-md hover:bg-blue-800">
              Register
            </button>
          </Link>
        </ul>
      )}
      <AiOutlineMenu
        size={20}
        onClick={handleNav}
        className="block md:hidden hover:cursor-pointer"
      />
      <div
        className={`fixed left-0 top-0 w-full h-screen box-border px-4 bg-white transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between w-full h-24">
          <h1 className="flex flex-row items-center w-full text-3xl font-extrabold text-blue-600">
            &lt;/&gt; REACT
          </h1>
          <AiOutlineClose
            size={20}
            onClick={handleNav}
            className="hover:cursor-pointer"
          />
        </div>
        <ul className="flex flex-col gap-3 text-sm">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={1000}
            className="p-3 rounded-lg hover:bg-gray-300 hover:cursor-pointer"
            onClick={handleNav}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={1000}
            className="p-3 rounded-lg hover:bg-gray-300 hover:cursor-pointer"
            onClick={handleNav}
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={1000}
            className="p-3 rounded-lg hover:bg-gray-300 hover:cursor-pointer"
            onClick={handleNav}
          >
            Contact
          </ScrollLink>
          <button className="p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-800">
            Register
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
