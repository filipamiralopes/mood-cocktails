import React from 'react'

const Navbar = ({ currentUser }) => {
  return (
    <div className='navbar'>
      {currentUser && <span>Welcome, {currentUser.username}!</span>}
    </div>
  )
}

export default Navbar