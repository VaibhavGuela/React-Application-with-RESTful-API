import React, { useState } from "react";

import ReactLogo from "../images/react-logo.png";
import Alert from "../components/Alert";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.email || !formData.password) {
      setAlertMessage("Please enter an email and password!");
      setShowAlert(true);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setAlertMessage("Please enter a valid email address!");
      setShowAlert(true);
      return;
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-sky-500 to-indigo-800 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="h-[520px] w-[350px] bg-white shadow-2xl rounded flex flex-col items-center justify-between box-border px-10 py-10">
        <h1 className="text-3xl font-bold">Login</h1>
        <img
          src={ReactLogo}
          alt="React"
          className="h-12 w-auto rounded p-1 bg-black"
        />
        <input
          className="w-full py-2 px-2 border-b-2 border-gray-300 focus:outline-none"
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => handleFormChange(e)}
          placeholder="Email"
        ></input>
        <div className="w-full border-b-2 border-gray-300 flex items-center">
          <input
            className="w-full py-2 px-2 focus:outline-none"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={(e) => handleFormChange(e)}
            placeholder="Password"
          ></input>
          {showPassword ? (
            <IoEyeOffOutline
              className="text-2xl text-gray-400 hover:text-black hover:cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <IoEyeOutline
              className="text-2xl text-gray-400 hover:text-black hover:cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <button className="w-full py-2 bg-blue-600 hover:bg-blue-800 text-white" type="submit">
          Login
        </button>
        <div className="font-light">
          Don't have an account?{" "}
          <a className="font-semibold hover:underline" href="/register">
            Register
          </a>
        </div>
      </form>
      {showAlert && <Alert alertMessage={alertMessage} onClose={() => setShowAlert(false)}/>}
    </div>
  );
};

export default Login;
