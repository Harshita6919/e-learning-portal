import { Button, Checkbox, TextField } from "@mui/material";
import { color } from "@mui/system";
import React, { useState } from "react";
import "./Login.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  console.log("userName,", userName);
  return (
    <div className="main">
      <div className="imagediv">
        <img className="logo" src="Full Logo Original 1920px 3.png" />
        <img className="image" src="Group 1.png" />
        <h3>Credit Risk Management Program</h3>
      </div>
      <div className="logindiv">
        <h1>Welcome!</h1>
        <p className="signup">Don't have a account yet? Sign Up</p>

        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="password"
            autoComplete="current-password"
          />
        </div>
        <div className="check-stat">
          <div className="check-box">
            <Checkbox size="small" />
            <p className="">Keep me logged in</p>
          </div>
          <a href="" className="forget-text">
            Forgot Password
          </a>
        </div>

        <Button className="login-btn" variant="outlined">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
