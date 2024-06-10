import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="home-page">
        {/* welcome Section */}
        <div className='home-page-content'>
            <h1>Welcome to Our Bar!</h1>
            <p>Don’t know what to drink?</p>
            <Link to="/random-cocktail"><button>Get Your Random Cocktail</button></Link>
        </div>
        <div>
       
        </div>
    </div>
  )
}

export default HomePage