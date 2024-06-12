import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'

const HomePage = ({ setCurrentUser }) => {
  const [mood, setMood] = useState('');

  const handleInputChange = (e) => {
    setMood(e.target.value);
  };
  return (
    <div className="home-page">
        {/* welcome Section */}
        
        <div className='home-page-content'>
            <h1>Welcome to Our Bar!</h1>
            <p>Tell us how you feel and we will give you the right drink!</p>
            <input type="text" placeholder="How doyou feel?" value={mood}  onChange={handleInputChange} />
            <br />
            <Link to={mood ? "/random-cocktail" : "#"}><button>Get Your Cocktail</button></Link>
        </div>
        <div className='login-section'>
            <Login setCurrentUser={setCurrentUser} />
        </div>
        <div className='signup-section'>
            <Signup setCurrentUser={setCurrentUser} />
        </div>
    </div>
  )
}

export default HomePage