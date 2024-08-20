import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full h-96 bg-black text-white flex flex-col justify-evenly items-center py-8"
    >
      <h1 className="text-3xl font-light">React Application</h1>
      <p className="text-gray-500 max-w-[700px] text-center font-light">
        This is a React application utilising Tailwind for CSS styling and
        animations. The sever utilises NodeJS with ExpressJS along with MongoDB
        a database.
      </p>
      <div className="flex flex-row gap-12 my-4">
        <FaGithub className="text-white text-2xl hover:text-gray-500 hover:cursor-pointer" />
        <FaLinkedin className="text-white text-2xl hover:text-gray-500 hover:cursor-pointer" />
        <FaSquareXTwitter className="text-white text-2xl hover:text-gray-500 hover:cursor-pointer" />
      </div>
      <p className="text-center font-light">
        Copyright ©2024. All rights reserved. Design by Vaibhav Guela.
      </p>
    </footer>
  );
};

export default Footer;
