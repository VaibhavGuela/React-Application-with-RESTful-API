import React from "react";
import RegisterImage from "../images/register-image.png";
import LoginImage from "../images/login-image.png";
import ViewImage from "../images/view-image.jpg";
import { NavLink } from "react-router-dom";

const Features = () => {
  return (
    <div
      id="features"
      className="flex flex-col items-center justify-between w-full min-h-screen px-4 py-16 bg-white"
    >
      <h1 className="text-lg tracking-[0.5em] font-semibold text-blue-600">
        FEATURES
      </h1>
      <h2 className="text-4xl font-bold text-center pb-14">
        Our Features & Services.
      </h2>
      <div className="flex flex-wrap justify-center gap-6 pb-14">
        <div className="flex flex-col items-center max-w-[320px] shadow-2xl px-4 py-8 rounded-2xl hover:scale-105 duration-500">
          <img
            src={RegisterImage}
            className="w-auto h-60"
            alt="Registration Card"
          />
          <h3 className="mb-4 text-2xl font-bold text-blue-600">Login</h3>
          <p className="mb-4 text-base font-light text-center">
            Securely log in using JWT tokens for authentication, ensuring safe
            and efficient user sessions.
          </p>
          <NavLink to="/login">
            <button className="px-10 py-1 font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-800">
              Start
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col items-center max-w-[320px] shadow-2xl px-4 py-8 rounded-2xl hover:scale-105 duration-500">
          <img src={LoginImage} className="w-auto h-60" alt="Login Card" />
          <h3 className="mb-4 text-2xl font-bold text-blue-600">Register</h3>
          <p className="mb-4 text-base font-light text-center">
            Utlising bcrypt encryption to securely hash passwords and protect
            user credentials when registering.
          </p>
          <NavLink to="/login">
            <button className="px-10 py-1 font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-800">
              Start
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col items-center max-w-[320px] shadow-2xl px-4 py-8 rounded-2xl hover:scale-105 duration-500">
          <img src={ViewImage} className="w-auto h-60" alt="View Card" />
          <h3 className="mb-4 text-2xl font-bold text-blue-600">View</h3>
          <p className="mb-4 text-base font-light text-center">
            View your account details using our secure API endpoints connected
            to MongoDB services.
          </p>
          <NavLink to="/login">
            <button className="px-10 py-1 font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-800">
              Start
            </button>
          </NavLink>
        </div>
      </div>
      <p className="font-light">
        Images from <span className="italic font-bold">Freepik</span>
      </p>
    </div>
  );
};

export default Features;
