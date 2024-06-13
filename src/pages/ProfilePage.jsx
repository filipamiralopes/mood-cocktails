import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate, Link } from 'react-router-dom';
import spilled from "../image/spilled.png";

const ProfilePage = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  if (!currentUser){
    return(
      <div className="not-found">
        <img src={spilled} alt="spilled drink" style={{width: "250px"}}/>
        <h2>User not found</h2>
        <br/>
        <Link to="/"><button >Back to Bar</button></Link>
      </div>
    )
  }
  const [username, setUsername] = useState(currentUser.username);
  const [password, setPassword] = useState(currentUser.password);
  const [firstName, setFirstName] = useState(
    currentUser.firstName ? currentUser.firstName : ""
  );
  const [lastName, setLastName] = useState(
    currentUser.lastName ? currentUser.lastName : ""
  );
  const [email, setEmail] = useState(
    currentUser.email ? currentUser.email : ""
  );
  const [photo, setPhoto] = useState(
    currentUser.photo ? currentUser.photo : ""
  );
  const [message, setMessage] = useState("");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.patch(`${API_URL}/users/${currentUser.id}`, {
        username,
        password,
        firstName,
        lastName,
        email,
        photo,
      });
      setCurrentUser(data);
      setMessage("Profile updated successfully.");
    } catch (error) {
      console.error("Error updating user data:", error);
      setMessage("Error updating profile.");
    }
  };

  return (
    <div className="profile-page">
      <h2>User Profile</h2>

      {message && <p>{message}</p>}
      <div>
        {photo && (
          <img
            src={photo}
            alt="User"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        )}
      </div>
      <form onSubmit={handleUpdateProfile}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Photo URL:
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </label>
        {currentUser ? (
          <button type="submit">Sign Up!</button>
        ) : (
          <button>Sign Up</button>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
