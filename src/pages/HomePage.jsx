import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomePage = ({ currentUser, setCurrentUser }) => {
  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1>Welcome to Our Bar</h1>
        <p>Don’t know what to drink?</p>
        <Link to="/random-cocktail">
          <button>Get Your Random Cocktail</button>
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
