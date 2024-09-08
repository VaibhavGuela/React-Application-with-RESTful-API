import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../App";

import { IoMdPerson } from "react-icons/io";

const Landing = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const { token, setToken } = useContext(TokenContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get("http://localhost:3001/user/user", {
          headers: {
            token: token,
          },
        });
        setUserData(result.data.user);
      } catch (error) {
        navigate("/");
        console.log(error);
      }
    };
    getUser();
  }, [token, navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-white">
      <div className="absolute top-0 w-full h-1/3 bg-gradient-to-r from-sky-500 to-indigo-800"></div>
      <div className="relative flex flex-col items-center justify-between shadow-xl rounded-lg w-[350px] h-[350px] bg-white z-10 box-border p-4">
        <div className="absolute w-[100px] h-[100px] -top-[60px] z-20 bg-black rounded-full flex items-center justify-center">
          <IoMdPerson className="text-[80px] text-white" />
        </div>
        <h1 className="mt-10 text-xl font-bold">Account Details</h1>
        <div className="text-center">
          <p>
            <span className="font-bold">User ID:</span> {userData._id}
          </p>
          <p>
            <span className="font-bold">Email:</span> {userData.email}
          </p>
        </div>
        <p className="text-sm italic text-center text-gray-400">
          Press the logout button to get redirected to the home page.
        </p>
        <button
          className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-800"
          type="submit"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Landing;
