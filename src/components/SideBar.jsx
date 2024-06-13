import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ currentUser }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cocktails"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Cocktail Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/your-table"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Your Table
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About This Bar
          </NavLink>
        </li>
        <li>
          {currentUser ? (
            <NavLink
              to="/add-cocktail"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Craft Your Cocktail 🍸
            </NavLink>
          ) : null}
        </li>
        <li>
          {currentUser ? (
            <NavLink
              to="/cocktails-for-you"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Cocktails Just For You ✨
            </NavLink>
          ) : null}
        </li>
        {/* <li>
          {currentUser ? (
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Your Private Bar 👤
            </NavLink>
          ) : null}
        </li> */}
      </ul>
    </div>
  );
};
export default SideBar;
