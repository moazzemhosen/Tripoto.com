import React, { useState } from "react";
//  import "./Sign.css"
 import { Alert } from "react-bootstrap";

// import { Alert } from "react-bootstrap";
import Login from "./Login";

function Signup() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

 
    
   
  return (
  
    <>

   <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              
              
              
              <h2 style={{textAlign:"center"}}>Create an account</h2>

              <div className="form-group">
                <label></label>
                <input style={{width:"30%",marginLeft:"500px"}}
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label></label>
                <input style={{width:"30%",marginLeft:"500px"}}
                  type="text"
                  className="form-control"
                  placeholder=" Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label></label>
                <input style={{width:"30%",marginLeft:"500px"}}
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

          

              <div className="form-group">
                <label></label>
                <input style={{width:"30%",marginLeft:"500px"}}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

          
        {/* <p>    <input className="check" type="checkbox" /> Keep me signed in</p> */}
        

        <h6 style={{marginLeft:"10px"}}>By signing up, you agree to Tripoto's
         .</h6>
         <h6 style={{marginLeft:"10px"}}><a href="https://www.tripoto.com/terms" > Terms and Conditions</a> </h6>
        
        
              
              <button  type="submit"  style={{marginLeft:"0px",width:"200px",height:"45px",marginTop:"15px",backgroundColor:"rgb(242,118,105)",color:"white",border:"none",borderRadius:"10px"}}   className="butt-s btn btn-primary btn-lg btn-block ">
              Continue
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
              Already Registerd ?{" "}Login 
                
              </p>
            
              {flag && (
                <Alert color="primary" variant="danger">
                  
                  I got it you are in hurry! But every Field is important!
                </Alert>
                
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Signup;
