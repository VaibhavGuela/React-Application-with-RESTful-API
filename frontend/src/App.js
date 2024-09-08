import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";

export const TokenContext = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/landing"
            element={token ? <Landing /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;
