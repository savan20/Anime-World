// components/Hero.js
import React from 'react'
import './Hero.css';
import { useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate(); // Initialize the navigate function

  const handleLoginRedirect = () => {
    navigate('/Login'); // Navigate to the Login page
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Anime World</h1>
        <p className="p1">Discover your favorite anime series and movies.</p>
        {/* <button className="cta-button">Get Started</button> */}
        <button onClick={handleLoginRedirect} className="cta-button">
          Get Started
        </button>
      </div>
    </div>
  );
}
export default Hero;
