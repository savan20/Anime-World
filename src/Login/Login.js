// Login.js
import React, { useState, } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  // Simulating admin credentials for simplicity
  const adminEmail = "admin@animeworld.com";
  const adminPassword = "Admin@123";

  const validateUsername = () => {
    const emailPattern = /^[a-zA-Z0-9.+_%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if (!username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Please fill this field.' }));
      return false;
    } else if (!emailPattern.test(username)) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is invalid.' }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
      return true;
    }
  };

  const validatePassword = () => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@._])[a-zA-Z\d@._]{8,30}$/;
    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Please fill this field.' }));
      return false;
    } else if (!passwordPattern.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Wrong password.'
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();

    if (isUsernameValid && isPasswordValid) {
      if (username === adminEmail && password === adminPassword) {
        localStorage.setItem('isAdmin', true);
        navigate('/admin');
        return;
      }

      // Call your API for login here, navigate after successful login
      try {
        const response = await axios.post('http://localhost:5000/api/auth/Login', {
          email: username,
          password,
        });

        localStorage.setItem('token', response.data.token);  // Store JWT token

        // Store user session
        const userSession = {
          userId: response.data.userId, // Adjust based on your response structure
          username: response.data.username,
        };
        sessionStorage.setItem('userSession', JSON.stringify(userSession)); // Store session

        navigate('/App');
      } catch (err) {
        console.error(err);
        alert('Login failed');
      }
    }
  };

  return (
    <div className='login-box'>
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            id="username"
            value={username}
            autoComplete='off'
            onChange={(e) => setUserName(e.target.value)}
            onBlur={validateUsername}
            required
          />
          <label htmlFor="username">Username</label>
          <h5>{errors.username}</h5>
        </div>

        <div className="user-box">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            required
          />
          <label htmlFor="password">Password</label>
          <h5>{errors.password}</h5>
        </div>

        <button id="btn" type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{' '}
        <button onClick={() => navigate('/Registration')} className="redirect-button">
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;
