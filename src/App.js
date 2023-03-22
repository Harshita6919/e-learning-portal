import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Header from "./Components/Header";
import SidebarDashboard from "./Components/SidebarDashboard";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dasboard" element={<SidebarDashboard />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
