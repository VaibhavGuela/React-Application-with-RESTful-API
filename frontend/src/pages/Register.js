import React, { useState } from "react";
import ReactLogo from "../images/react-logo.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import Alert from "../components/Alert";

const Register = () => {
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

  const handleSubmit = (e) => {
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
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-sky-500 to-indigo-800 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="h-[520px] w-[350px] bg-white shadow-2xl rounded flex flex-col items-center justify-between box-border px-10 py-10"
      >
        <h1 className="text-3xl font-bold">Register</h1>
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
        />
        <div className="w-full border-b-2 border-gray-300 flex items-center">
          <input
            className="w-full py-2 px-2 focus:outline-none"
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
                  <FaRegCircleCheck className="text-green-500 mr-2" />
                ) : (
                  <FaRegCircleXmark className="text-red-500 mr-2" />
                )}
                {passwordCriteria[key].message}
              </li>
            ))}
          </ul>
        )}
        <div className="w-full border-b-2 border-gray-300 flex items-center">
          <input
            className="w-full py-2 px-2 focus:outline-none"
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
          className="w-full py-2 bg-blue-600 hover:bg-blue-800 text-white"
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
