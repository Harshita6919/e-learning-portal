import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function FlipLogin() {
  const [isLogin, setIsLogin] = useState(true);

  const handleFlip = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <button onClick={handleFlip}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>
      {isLogin ? <Login /> : <SignUp />}
    </div>
  );
}

export default FlipLogin;
