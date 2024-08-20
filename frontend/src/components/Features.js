import React from "react";
import RegisterImage from "../images/register-image.png";
import LoginImage from "../images/login-image.png";
import ViewImage from "../images/view-image.jpg";
import { NavLink } from "react-router-dom";

const Features = () => {
  return (
    <div
      id="features"
      className="w-full min-h-screen bg-white flex flex-col justify-between items-center px-4 py-16"
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
            className="h-60 w-auto"
            alt="Registration Card"
          />
          <h3 className="text-2xl text-blue-600 font-bold mb-4">Login</h3>
          <p className="text-base text-center mb-4 font-light">
            Securely log in using JWT tokens for authentication, ensuring safe
            and efficient user sessions.
          </p>
          <NavLink to="/login">
            <button className="bg-blue-600 text-white py-1 px-10 rounded-2xl font-semibold hover:bg-blue-800">
              Start
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col items-center max-w-[320px] shadow-2xl px-4 py-8 rounded-2xl hover:scale-105 duration-500">
          <img src={LoginImage} className="h-60 w-auto" alt="Login Card" />
          <h3 className="text-2xl text-blue-600 font-bold mb-4">Register</h3>
          <p className="text-base text-center mb-4 font-light">
            Utlising bcrypt encryption to securely hash passwords and protect
            user credentials when registering.
          </p>
          <NavLink to="/login">
            <button className="bg-blue-600 text-white py-1 px-10 rounded-2xl font-semibold hover:bg-blue-800">
              Start
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col items-center max-w-[320px] shadow-2xl px-4 py-8 rounded-2xl hover:scale-105 duration-500">
          <img src={ViewImage} className="h-60 w-auto" alt="View Card" />
          <h3 className="text-2xl text-blue-600 font-bold mb-4">View</h3>
          <p className="text-base text-center mb-4 font-light">
            View your account details using our secure API endpoints connected
            to MongoDB services.
          </p>
          <NavLink to="/login">
            <button className="bg-blue-600 text-white py-1 px-10 rounded-2xl font-semibold hover:bg-blue-800">
              Start
            </button>
          </NavLink>
        </div>
      </div>
      <p className="font-light">
        Images from <span className="font-bold italic">Freepik</span>
      </p>
    </div>
  );
};

export default Features;
