import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/portfolio"> Home</a>
        <a href="/portfolio/projects"> Projects</a>
        <a href="/portfolio/experience"> Experience</a>
      </div>
    </div>
  );
}

export default Navbar;
