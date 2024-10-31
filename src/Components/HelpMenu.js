// HelpMenu.js
import React, { useState } from 'react';
import './HelpMenu.css';

const HelpMenu = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className="help-menu-container">
      <h1 className="help-title">AnimeWorld Help Center</h1>
      
      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item" onClick={() => toggleQuestion(1)}>
          <h3>How do I create an account? <span>{activeQuestion === 1 ? '-' : '+'}</span></h3>
          {activeQuestion === 1 && (
            <p className="faq-answer">You can create an account by clicking on the Sign-Up button at the top right and providing the required information.</p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggleQuestion(2)}>
          <h3>How do I add anime to my collection? <span>{activeQuestion === 2 ? '-' : '+'}</span></h3>
          {activeQuestion === 2 && (
            <p className="faq-answer">Simply click on the 'Add to List' button while browsing anime. You need to be logged in to add to your collection.</p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggleQuestion(3)}>
          <h3>How do I update or remove anime from my collection? <span>{activeQuestion === 3 ? '-' : '+'}</span></h3>
          {activeQuestion === 3 && (
            <p className="faq-answer">Go to your collection menu, click on the anime you want to manage, and choose to update or remove it.</p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggleQuestion(4)}>
          <h3>How do I contact support? <span>{activeQuestion === 4 ? '-' : '+'}</span></h3>
          {activeQuestion === 4 && (
            <p className="faq-answer">You can contact support via our <a href="mailto:support@animeworld.com">email</a> or use the contact form below.</p>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any further questions, feel free to reach out to us:</p>
        <ul>
          <li>Email: <a href="mailto:support@animeworld.com">admin@animeworld.com</a></li>
          <li>Phone: +1 234 567 890</li>
          <li>Business Hours: 9:00 AM - 5:00 PM (Monday to Friday)</li>
        </ul>
      </div>
    </div>
  );
};

export default HelpMenu;
