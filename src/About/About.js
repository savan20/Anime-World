// src/Components/About.js
import React from 'react';
import Navbar from '../Components/Navbar'; // Adjust path if necessary
import Footer from '../Components/Footer'; // Adjust path if necessary
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <Navbar /> {/* Include Navbar component */}

      {/* Header Section */}
      <div className="about-header">
        <h1>About AnimeWorld</h1>
        <p className="about-description">
          Welcome to AnimeWorld, your ultimate destination for exploring the rich and diverse world of anime.
        </p>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <section className="about-introduction">
          <h2>Introduction</h2>
          <p>
            Whether you're a seasoned otaku or a curious newcomer, AnimeWorld has something for everyone. Explore thousands of anime titles, discover new shows, and immerse yourself in the vibrant world of Japanese animation.
          </p>
          <p>
            Our platform is designed to make your anime journey enjoyable and effortless. With a user-friendly interface and a wealth of information at your fingertips, you'll find it easy to navigate through our extensive collection and discover your next favorite series.
          </p>
          <p>
            At AnimeWorld, we believe in the power of storytelling and the art of animation. Join us as we celebrate the creativity and imagination that bring anime to life.
          </p>
        </section>

        <section className="about-features">
          <h2>Features</h2>
          <ul>
            <li>Extensive library of popular and rare anime titles.</li>
            <li>Detailed information including episodes, duration, and languages available.</li>
            <li>User-friendly interface with personalized watchlists and recommendations.</li>
            <li>Up-to-date content with the latest releases and trending shows.</li>
            <li>High-quality streaming with minimal buffering.</li>
            <li>Community features including ratings, reviews, and forums.</li>
          </ul>
        </section>

        <section className="about-team">
          <h2>Meet the Team</h2>
          <p>
            Our team is passionate about anime and is dedicated to providing the best experience for our users. We are constantly working to improve our website, adding new features and expanding our collection to ensure that you have access to the best anime content available.
          </p>
          <p>
            Meet the faces behind AnimeWorld: a diverse group of anime enthusiasts, tech experts, and creative minds who share a common love for Japanese animation. We work together to bring you a platform that reflects our commitment to quality and innovation.
          </p>
        </section>

        <section className="about-contact">
          <h2>Contact Us</h2>
          <p>
            Have any questions or suggestions? We'd love to hear from you! Feel free to reach out to us at{' '}
            <a href="mailto:contact@animeworld.com">contact@animeworld.com</a>.
          </p>
          <p>
            You can also follow us on social media for updates and news:
          </p>
        </section>
      </div>

      <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default About;
