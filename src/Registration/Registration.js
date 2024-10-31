import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateName = () => {
    if (!name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Please fill this field.' }));
      return false;
    } else if (name.length < 3) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name length must be at least 3 characters.' }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
      return true;
    }
  };

  const validateMobile = () => {
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobile) {
      setErrors((prevErrors) => ({ ...prevErrors, mobile: 'Please fill this field.' }));
      return false;
    } else if (!mobilePattern.test(mobile)) {
      setErrors((prevErrors) => ({ ...prevErrors, mobile: 'Mobile no. must contain only 10 digits.' }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, mobile: '' }));
      return true;
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9.+_%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Please fill this field.' }));
      return false;
    } else if (!emailPattern.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is invalid.' }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
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
        password: 'Password must include both lower and upper case letters, numbers, at least one symbol, and be at least 8 characters long.'
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
      return true;
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Please fill this field.' }));
      return false;
    } else if (password !== confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Passwords do not match.' }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isMobileValid = validateMobile();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isMobileValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      // Call API to register user here
      try {
        const res = await axios.post('http://localhost:5000/api/auth/Registration', {
          name,
          mobile,
          email,
          password,
        });
        localStorage.setItem('token', res.data.token);  // Store JWT token
        navigate('/Login');
      } catch (err) {
        console.error(err);
        alert('Registration failed');
      }
    }
  };

  return (
    <div className="register-box">
      <h2>Create Account</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            id="name"
            value={name}
            autocomplete="off"
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            required
          />
          <label htmlFor="name">Name</label>
          <h5>{errors.name}</h5>
        </div>

        <div className="user-box">
          <input
            type="text"
            id="mobile"
            value={mobile}
            autocomplete="off"
            onChange={(e) => setMobile(e.target.value)}
            onBlur={validateMobile}
            required
          />
          <label htmlFor="mobile">Mobile No.</label>
          <h5>{errors.mobile}</h5>
        </div>

        <div className="user-box">
          <input
            type="text"
            id="email"
            value={email}
            autocomplete="off"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            required
          />
          <label htmlFor="email">Email Id</label>
          <h5>{errors.email}</h5>
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

        <div className="user-box">
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <h5>{errors.confirmPassword}</h5>
        </div>

        <button id="btn" type="submit">
          Register
        </button>
      </form>
      <p>
        Already have an account?{' '}
        <button onClick={() => navigate('/Login')} className="redirect-button">
          Login
        </button>
      </p>
    </div>
  );
}

export default Registration;
