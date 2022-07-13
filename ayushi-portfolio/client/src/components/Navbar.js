import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button></button>
      </div>
      <div className="links">
        <a href="/"> Home</a>
        <a href="/projects"> Projects</a>
        <a href="/experience"> Experience</a>
      </div>
    </div>
  );
}

export default Navbar;
