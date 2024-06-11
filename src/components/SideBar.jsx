import React from 'react'
import { NavLink } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className="sidebar">
        <ul className='sidebar-list'>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cocktails" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Cocktail Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/your-table" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Your Table
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-cocktail" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Craft Your Cocktail
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            About this Bar
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Your private bar          
            </NavLink>
        </li>

      </ul>
    </div>
  );
};
export default SideBar