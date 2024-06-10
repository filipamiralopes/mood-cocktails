/*
- HomePage (as well as the logo on the Navbar)
- Menu (CocktailList) --> Cocktail detail --> Edit and Delete
- Add New Cocktail
- Favourites / Cocktails drank already
- About this bar
*/
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="sidebar">
        <ul className='sidebar-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cocktails">Cocktail Menu</Link></li>
            <li><Link to="/your-table">Your Table</Link></li>
            <li><Link to="/add-cocktail">Make Your Own Cocktail!</Link></li>
            <li><Link to="/about">About this Bar</Link></li>
        </ul>
    </div>
  )
}

export default SideBar