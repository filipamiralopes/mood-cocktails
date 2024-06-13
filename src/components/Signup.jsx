import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

const Signup = ({ setCurrentUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const nav = useNavigate();

    console

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            // send a POST request to db backend
            const response = await axios.post(`${API_URL}/users`, { username, password });
            console.log('Signup response:', response.data);
            setCurrentUser(response.data); 
            nav('/profile'); 
        } catch (error) {
            console.log('Signup error:', error);
            setError(error.response.data.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="home-page">
            <h2 className="home-page-signup">Signup</h2>
            <form onSubmit={handleSignup}>
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
                <button type="submit">Sign Up</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Signup;
