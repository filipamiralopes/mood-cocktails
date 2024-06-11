// ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = ({ currentUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5005/users/${currentUser.id}`);
        const userData = response.data;
        setUsername(userData.username);
        setPassword(userData.password); 
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setEmail(userData.email);
        setPhoto(userData.photo);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await axios.put(`http://localhost:5005/users/${currentUser.id}`, {
        username,
        password, 
        firstName,
        lastName,
        email,
        photo,
      });
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        {photo && <img src={photo} alt="User" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />}
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
    
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
