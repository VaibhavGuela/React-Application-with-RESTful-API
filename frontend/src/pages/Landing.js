import React from "react";

import { IoSearch } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-slate-100 flex flex-col">
      <div className="w-full h-16 border-b-2 border-gray-200 bg-white flex flex-row items-center justify-between gap-24 px-4">
        <h1 className="text-nowrap text-xl font-extrabold text-blue-600">
          &lt;/&gt; REACT
        </h1>
        <div className="w-full bg-slate-100 flex items-center rounded-3xl px-4">
          <IoSearch className="text-xl text-gray-500" />
          <input
            className="w-full py-2 px-2 focus:outline-none bg-slate-100 text-sm"
            placeholder="Search..."
          ></input>
        </div>
        <MdAccountBox className="text-4xl"/>
      </div>
      <div className="w-56 h-full border-r-2 border-gray-200"></div>
    </div>
  );
};

export default Landing;
