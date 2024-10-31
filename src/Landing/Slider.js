// components/Slider.js
import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, title: 'Card 1', content: 'This is the first card.' },
    { id: 2, title: 'Card 2', content: 'This is the second card.' },
    { id: 3, title: 'Card 3', content: 'This is the third card.' },
    { id: 4, title: 'Card 4', content: 'This is the fourth card.' },
    { id: 5, title: 'Card 5', content: 'This is the fifth card.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change the slide every 3 seconds
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {cards.map((card) => (
          <div className="card full-view" key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>

      <div className="bottom-right">
        {cards.map((card, idx) => (
          <div
            key={card.id}
            className={`small-card ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          >
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
