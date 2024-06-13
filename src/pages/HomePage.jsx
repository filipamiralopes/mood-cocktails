import { Link } from "react-router-dom";

const HomePage = ({ currentUser, mood, setMood }) => {
  const handleInputChange = (e) => {
    setMood(e.target.value);
  };
  
  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1>Welcome to Our Bar</h1>
        <p>Tell us how you feel and we will give you the right drink!</p>
        <input
          type="text"
          placeholder="How do you feel?"
          value={mood}
          onChange={handleInputChange}
        />
        <br />
        <Link to={mood ? "/random-cocktail" : "#"}>
          <button id="get-cocktail-btn">Get Your Cocktail!</button>
        </Link>

        {currentUser ? (
          null
        ) : (
          <div className="login-signup">
            <div className="signup">
              <p>Signup to access exclusive cocktails and features!</p>
              <Link to="/signup">
                <button>Signup</button>
              </Link>
            </div>
            <div className="login">
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
