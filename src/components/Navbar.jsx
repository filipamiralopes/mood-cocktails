import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login'
import Signup from '../components/Signup'

const Navbar = ({ currentUser, setCurrentUser }) => {
  return (
    <div className='navbar'>
      {currentUser ? (
        <Link to="/profile">Profile</Link>
      ) : (
        <>

          <div className='login-section'>
            <Login setCurrentUser={setCurrentUser} />
        </div>
        <div className='signup-section'>
            <Signup setCurrentUser={setCurrentUser} />
        </div>

        </>
      )}
    </div>
  );
};

export default Navbar;
