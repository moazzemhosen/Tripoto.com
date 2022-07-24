
import React from "react";

import { Route, Routes } from "react-router-dom";
import { LargeWithLogoLeft } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Payment from "../components/Payment/payment";
import Suggestion from "../components/Suggestion/Suggestion";
import HomePage from "./HomePage";
//  import SignUp from "../components/SignUp/SignUp";
//  import Login from "../components/SignUp/Login";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<Otp />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/cardpayment" element={<Cardpayment />}></Route>
        <Route path="/lastpage" element={<Lastpage />}></Route>
      </Routes>
      <LargeWithLogoLeft />
    </>
  );
};

export default MainRoutes;

