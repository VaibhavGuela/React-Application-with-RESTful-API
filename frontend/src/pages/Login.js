import React, { useState, useContext } from "react";
import { TokenContext } from "../App";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

import ReactLogo from "../images/react-logo.png";
import Alert from "../components/Alert";

import { IoEyeOutline, IoEyeOffOutline, IoArrowBack } from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();

  const { setToken } = useContext(TokenContext);

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

  const handleSubmit = async (e) => {
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

    try {
      const result = await axios.post(
        "http://localhost:3001/user/login",
        formData
      );
      localStorage.setItem("token", result.data.token);
      setToken(result.data.token);
      navigate("/landing");
    } catch (error) {
      setAlertMessage(
        error.response
          ? error.response.data.message
          : "An unexpected error occured!"
      );
      setShowAlert(true);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-800">
      <form
        onSubmit={handleSubmit}
        className="h-[520px] w-[350px] bg-white shadow-2xl rounded flex flex-col items-center justify-between box-border px-10 py-10 relative"
      >
        <NavLink
          to="/"
          className="absolute top-0 left-0 p-3 hover:text-gray-600 hover:cursor-pointer"
        >
          <IoArrowBack className="text-2xl" />
        </NavLink>
        <h1 className="text-3xl font-bold">Login</h1>
        <img
          src={ReactLogo}
          alt="React"
          className="w-auto h-12 p-1 bg-black rounded"
        />
        <input
          className="w-full px-2 py-2 border-b-2 border-gray-300 focus:outline-none"
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => handleFormChange(e)}
          placeholder="Email"
        ></input>
        <div className="flex items-center w-full border-b-2 border-gray-300">
          <input
            className="w-full px-2 py-2 focus:outline-none"
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
        <button
          className="w-full py-2 text-white bg-blue-600 hover:bg-blue-800"
          type="submit"
        >
          Login
        </button>
        <div className="font-light">
          Don't have an account?{" "}
          <a className="font-semibold hover:underline" href="/register">
            Register
          </a>
        </div>
      </form>
      {showAlert && (
        <Alert
          alertMessage={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default Login;
