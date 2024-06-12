import { Link } from "react-router-dom";
import { useState } from 'react';

const HomePage = ({ currentUser }) => {
  const [mood, setMood] = useState("");

  const handleInputChange = (e) => {
    setMood(e.target.value);
  };
  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1>Welcome to Our Bar!</h1>
        <p>Tell us how you feel and we will give you the right drink!</p>
        <input
          type="text"
          placeholder="How doyou feel?"
          value={mood}
          onChange={handleInputChange}
        />
        <br />
        <Link to={mood ? "/random-cocktail" : "#"}>
          <button>Get Your Cocktail</button>
        </Link>

        {currentUser ? (
          <h3 id="logout-message">Refresh the page to Logout</h3>
        ) : (
          <div className="login-signup">
            <div>
              <p>Signup to access exclusive cocktails and create your own!</p>
              <Link to="/signup">
                <button>Signup</button>
              </Link>
            </div>
            <div>
              <p>Been here before?</p>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
