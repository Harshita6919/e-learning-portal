import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Header from "./Components/Header";
import SidebarDashboard from "./Components/SidebarDashboard";
import SignUp from "./Components/SignUp";
import FlipLogin from "./Components/FlipLogin";
import Test from "./Components/Test";
function App() {
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/login">
  //         <Login />
  //       </Route>
  //       <Route path="/signUp">
  //         <SignUp />
  //       </Route>
  //       <Route path="/">
  //         <Header />
  //         <SidebarDashboard />
  //       </Route>
  //     </Routes>
  //   </Router>
  // );
  return (
    <>
      {window.location.pathname !== "/login" &&
      window.location.pathname !== "/signUp" ? (
        <Header />
      ) : null}{" "}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dasboard" element={<SidebarDashboard />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/fliplogin" element={<FlipLogin />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
