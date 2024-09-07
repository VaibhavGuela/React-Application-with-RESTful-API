import React, { useState, useContext } from "react";
import { TokenContext } from "../App";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

import Alert from "../components/Alert";
import ReactLogo from "../images/react-logo.png";

import { IoEyeOutline, IoEyeOffOutline, IoArrowBack } from "react-icons/io5";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";

const Register = () => {
  const navigate = useNavigate();

  const { setToken } = useContext(TokenContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const passwordCriteria = {
    length: {
      isValid: formData.password.length >= 8,
      message: "Must have 8 characters",
    },
    number: {
      isValid: /[0-9]/.test(formData.password),
      message: "Must have 1 number",
    },
    special: {
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
      message: "Must have 1 special character",
    },
  };

  const handleFormChange = (e) => {
    setFormData((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  };

  const checkPasswordCriteria = () => {
    for (const key of Object.keys(passwordCriteria)) {
      if (!passwordCriteria[key].isValid) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setAlertMessage("Please fill in all fields!");
      setShowAlert(true);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setAlertMessage("Please enter a valid email address!");
      setShowAlert(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setAlertMessage("Passwords do not match!");
      setShowAlert(true);
      return;
    }

    if (!checkPasswordCriteria()) {
      setAlertMessage("Password does not meet the criteria!");
      setShowAlert(true);
      return;
    }

    try {
      const result = await axios.post(
        "http://localhost:3001/user/register",
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
        <h1 className="text-3xl font-bold">Register</h1>
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
        />
        <div className="flex items-center w-full border-b-2 border-gray-300">
          <input
            className="w-full px-2 py-2 focus:outline-none"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            name="password"
            onChange={(e) => handleFormChange(e)}
            onBlur={() => setIsPasswordInputFocused(false)}
            onFocus={() => setIsPasswordInputFocused(true)}
          />
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
        {isPasswordInputFocused && (
          <ul className="list-disc text-[14px] w-full items-start">
            {Object.keys(passwordCriteria).map((key) => (
              <li key={key} className="flex items-center">
                {passwordCriteria[key].isValid ? (
                  <FaRegCircleCheck className="mr-2 text-green-500" />
                ) : (
                  <FaRegCircleXmark className="mr-2 text-red-500" />
                )}
                {passwordCriteria[key].message}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center w-full border-b-2 border-gray-300">
          <input
            className="w-full px-2 py-2 focus:outline-none"
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={(e) => handleFormChange(e)}
          />
          {showConfirmPassword ? (
            <IoEyeOffOutline
              className="text-2xl text-gray-400 hover:text-black hover:cursor-pointer"
              onClick={() => setShowConfirmPassword(false)}
            />
          ) : (
            <IoEyeOutline
              className="text-2xl text-gray-400 hover:text-black hover:cursor-pointer"
              onClick={() => setShowConfirmPassword(true)}
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 hover:bg-blue-800"
        >
          Register
        </button>
        <div className="font-light">
          Already have an account?{" "}
          <a className="font-semibold hover:underline" href="/login">
            Login
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

export default Register;
