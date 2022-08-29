import React from "react";
import {useSelector} from "react-redux"
import { Navigate ,useLocation} from "react-router-dom";

export const Requiredauth = ({ children }) => {
    const location =useLocation();
   // console.log(location.pathname)
  const isauth = useSelector((state) => state.auth.isAuth);
  console.log("auth",isauth);

  if (isauth) {
    return children;
  } else {
    return <Navigate to={"/login"} state={{from:location}} ></Navigate>;
    
  }


};