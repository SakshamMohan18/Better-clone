import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Better.com</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/start">Get Started</Link></li>
      </ul>
      <button className="apply-button">Apply Now</button>
    </nav>
  );
};

export default Navbar;
