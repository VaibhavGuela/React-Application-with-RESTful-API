import React, { useContext } from "react";
import { TokenContext } from "../App";

const Landing = () => {
  const { setToken } = useContext(TokenContext);

  const handleLogout = () => {
    setToken();
  };

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Landing;
