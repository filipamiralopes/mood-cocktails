import logo from "../image/logo.png";
import userLogo from "../image/user-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const nav = useNavigate();

  function handleLogout() {
    setCurrentUser(null);
    nav("/");
  }

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="Logo" style={{ width: "50px", height: "auto" }} />
      </Link>

      <h1>Mood Cocktails Bar</h1>

      {currentUser ? (
        <div className="navbar-user-info">
          {currentUser.photo ? (
            <Link to={"/profile"}>
              <img
                src={currentUser.photo}
                alt="User"
                className="navbar-user-photo"
                style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover"}}
              />
            </Link>
          ) : (
            <Link to={"/profile"}>
              <img
                src={userLogo}
                alt="profile logo"
                className="navbar-user-photo"
                style={{ width: "auto", height: "35px" }}
              />
            </Link>
          )}
          <span style={{ color: "black", paddingRight: "20px" }}>
            Welcome, {currentUser.username}!
          </span>
          <span onClick={handleLogout} id="logout">
           / Logout
          </span>
        </div>
      ) : (
        <Link to={"/login"}>
          <img
            src={userLogo}
            alt="profile logo"
            style={{ width: "auto", height: "35px" }}
          />
        </Link>
      )}
    </div>
  );
};
export default Navbar;
