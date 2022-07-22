import React, { useState } from "react";
import Home from "../../pages/HomePage";
import "./Sign.css"

import { Alert } from "react-bootstrap";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label></label>
            <input style={{width:"30%",marginLeft:"500px"}}
              type="email"
              className="form-control"
              placeholder="Email address"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label></label>
            <input style={{width:"30%",marginLeft:"500px"}}
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <p style={{marginRight:"22%" ,marginTop:"2%"}} >    <input className="check"  type="checkbox" /> Remember Me</p>
        
        
          <a className="a" style={{marginRight:"36%"}}  href="Signup" >Forgot password? </a>

          <button type="submit" style={{marginRight:"8%",width:"200px",height:"45px",marginTop:"15px",backgroundColor:"rgb(242,118,105)",color:"white",border:"none",borderRadius:"10px"}}   className="butt-s btn btn-primary btn-lg btn-block "> 
            Login
          </button>
          

     

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
