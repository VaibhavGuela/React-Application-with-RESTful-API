import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero" className="relative max-w-[1240px] mt-[-96px] mx-auto w-full h-screen flex flex-col justify-center text-center gap-8">
      <div className="flex flex-col justify-center items-center gap-8 z-10">
        <h1 className="font-semibold text-5xl sm:text-5xl lg:text-7xl max-w-[960px] mx-auto">
          Login & Register Application with{" "}
          <span className="text-blue-600 font-cursive italic">REST API</span>.
        </h1>
        <p className="px-4 text-s lg:text-lg max-w-[550px] mx-auto font-extralight">
          Built using the latest and most powerful technology stack for a modern
          and secure experience.
        </p>
        <div className="inline-flex gap-5 mx-auto">
          <Link to="/register">
            <button className="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-full text-sm">
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
    </div>
  );
};

export default Hero;
