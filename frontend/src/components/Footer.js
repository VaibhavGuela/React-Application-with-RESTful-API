import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center w-full py-8 text-white bg-black h-96 justify-evenly"
    >
      <h1 className="text-3xl font-light">React Application</h1>
      <p className="text-gray-500 max-w-[700px] text-center font-light">
        This is a React application utilising Tailwind for CSS styling and
        animations. The sever utilises NodeJS with ExpressJS along with MongoDB
        a database.
      </p>
      <div className="flex flex-row gap-12 my-4">
        <a
          href="https://github.com/VaibhavGuela"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-white hover:text-gray-500 hover:cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/vaibhav-guela/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl text-white hover:text-gray-500 hover:cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/VaibhavGuela"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-2xl text-white hover:text-gray-500 hover:cursor-pointer" />
        </a>
      </div>
      <p className="font-light text-center">
        Copyright ©2024. All rights reserved. Design by Vaibhav Guela.
      </p>
    </footer>
  );
};

export default Footer;
