import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>logo Text</div>
      <div className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <div className="nav-item">Home</div>
          </NavLink>
          <NavLink to="/Profile">
            <div className="nav-item">Profile</div>
          </NavLink>
          <NavLink to="/About">
            <div className="nav-item">About</div>
          </NavLink>
      </div>
    </div>
  );
};

export default Header;
