import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

const ProfilePage = ({ currentUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!currentUser) return;

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_URL}/users/${currentUser.id}`);
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
  }, [currentUser]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/users/${currentUser.id}`, {
        username,
        password, 
        firstName,
        lastName,
        email,
        photo,
      });
      setMessage('Profile updated successfully.');
    } catch (error) {
      console.error('Error updating user data:', error);
      setMessage('Error updating profile.');
    }
  };

  return (
    <div className='profile-page'>
      <h2>User Profile</h2>
      {message && <p>{message}</p>}
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
