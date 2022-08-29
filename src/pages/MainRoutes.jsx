
import React from "react";

import { Route, Routes } from "react-router-dom";
import { LargeWithLogoLeft } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

import Cardpayment from "../components/Payment/Cardpayment";
import Details from "../components/Payment/Details";
import Otp from "../components/Payment/Otp";
import Payment from "../components/Payment/payment";
import Suggestion from "../components/Suggestion/Suggestion";
import { Requiredauth } from "../requiredAuth/Requiredauth";
import HomePage from "./HomePage";
import {Login} from "./Login";
import {SignUp} from "./SignUp";


const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route
          path="/payment"
          element={
            <Requiredauth>
              <Payment />
            </Requiredauth>
          }
        />
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/cardpayment" element={<Cardpayment />}></Route>
      </Routes>
      <LargeWithLogoLeft />
    </>
  );
};

export default MainRoutes;

