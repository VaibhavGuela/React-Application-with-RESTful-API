import React from "react";
import { Link } from "react-router-dom";

import GitHubImage from "../images/github.png";
import NodeJSImage from "../images/nodejs.png";
import MongoDBImage from "../images/mongodb.png";
import ExpressImage from "../images/express.png";
import TailwindImage from "../images/tailwind.png";
import ReactImage from "../images/react.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative max-w-[1240px] mt-[-96px] mx-auto w-full h-fit flex flex-col items-center text-center gap-8"
    >
      <div className="flex flex-col items-center justify-center gap-8 mt-60">
        <h1 className="font-semibold text-5xl sm:text-5xl lg:text-7xl max-w-[960px] mx-auto">
          Login & Register Application with{" "}
          <span className="italic text-blue-600 font-cursive">REST API</span>.
        </h1>
        <p className="px-4 text-lg lg:text-lg max-w-[550px] mx-auto font-extralight">
          Built using the latest and most powerful technology stack for a modern
          and secure experience.
        </p>
        <div className="inline-flex gap-5 mx-auto">
          <Link to="/register">
            <button className="px-4 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-700">
              Sign-up now!
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white hover:bg-gray-200 border-gray-200 border-[1.5px] text-black py-2 px-4 rounded-full text-sm">
              Already a user?
            </button>
          </Link>
        </div>
      </div>
      <h2 className="font-medium mt-44">
        Developed with a modern technology stack
      </h2>
      <div className="grid grid-cols-2 gap-10 mb-9 justify-items-center sm:grid-cols-3 md:grid-cols-6">
        <img
          src={ReactImage}
          alt="React"
          className="object-contain w-auto h-[40px] hover:scale-125 duration-500"
        />
        <img
          src={NodeJSImage}
          alt="NodeJS"
          className="object-contain w-auto h-[40px] hover:scale-125 duration-500"
        />
        <img
          src={TailwindImage}
          alt="Tailwind"
          className="object-contain w-auto h-[40px] hover:scale-125 duration-500"
        />
        <img
          src={ExpressImage}
          alt="Express"
          className="object-contain w-auto h-[40px] hover:scale-125 duration-500"
        />
        <img
          src={MongoDBImage}
          alt="MongoDB"
          className="object-contain w-auto h-[40px] hover:scale-125 duration-500"
        />
        <img
          src={GitHubImage}
          alt="GitHub"
          className="object-contain w-auto h-[40px] hover:scale-125 duration-500"
        />
      </div>
    </div>
  );
};

export default Hero;
