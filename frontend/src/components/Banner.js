import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative mx-auto w-full h-[500px] bg-gradient-to-r from-sky-500 to-indigo-800 flex flex-col justify-center text-center gap-10">
      <h1 className="text-4xl sm:text-4xl lg:text-5xl mx-auto text-white">
        Create an account
      </h1>
      <p className="px-4 text-s lg:text-lg max-w-[600px] mx-auto font-extralight text-white">
        Create an account using our secure system, featuring bcrypt encryption
        for data protection and JWT token authentication for secure access.
      </p>
      <Link to="/register">
        <button className="mx-auto max-w-min] bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-full text-sm font-semibold">
          Register an account?
        </button>
      </Link>
    </div>
  );
};

export default Banner;
