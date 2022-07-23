import React from "react";

import { Route, Routes } from "react-router-dom";
import { LargeWithLogoLeft } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "./HomePage";
 import SignUp from "../components/SignUp/SignUp";
 import Login from "../components/SignUp/Login";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
         <Route path="/login" element={<Login />} /> 
      </Routes>
      <LargeWithLogoLeft />
    </>
  );
};

export default MainRoutes;
