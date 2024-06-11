import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

const Login = ({ setCurrentUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const nav = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // fetch all users
            const { data } = await axios.get(`${API_URL}/users`);
            // find the user with matching username
            const foundUser = data.find((oneUser) => oneUser.username.toLowerCase() === username.toLowerCase());
            if (!foundUser) {
                setError("User does not exist. Would you like to sign up?");
            } else {
                // check if the password matches
                const doesPasswordMatch = foundUser.password === password;
                if (doesPasswordMatch) {
                    setCurrentUser(foundUser);
                    nav("/");
                    alert("Login successful!");
                } else {
                    setError("Password incorrect. Please try again.");
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button>Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Login;
