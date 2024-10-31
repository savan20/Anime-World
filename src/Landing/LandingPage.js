// components/LandingPage.js
import React from 'react';
import Hero from '../Landing/Hero';
import './LandingPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Components/Footer';
// import Slider from './Slider';

const LandingPage = () => {
  return (
    <div className='homepage'>
      <Navbar />
    <div className="landing-page">
      <Hero />
      {/* <div className="features">
          <Slider /> {/* Add the Slider component here */}
      {/* </div>  */}
    </div>
    <Footer />
    </div>
  );
};

export default LandingPage;
