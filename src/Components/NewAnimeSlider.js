import React, { useState, useEffect } from 'react';
import './NewAnimeSlider.css';

const NewAnimeSlider = ({ newAnimes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newAnimes.length);
    }, 3000); // Adjust the sliding speed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, [newAnimes.length]);

  const slideStyle = {
    transform: `translateX(-${currentIndex * 270}px)`, // Adjust the width (200px slide + 20px gap = 270px)
  };

  return (
    <div className="new-anime-slider">
      <div className="slider-track" style={slideStyle}>
        {newAnimes.map((anime, index) => (
          <div key={index} className="slide">
            <img src={anime.image} alt={anime.name} />
            <div className="anime-info">
              <h4>{anime.name}</h4>
              <p>{anime.languages.join(', ')}</p>
              <div className="buttons">
                <button className="watch-btn">Watch</button>
                <button className="detail-btn">Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewAnimeSlider;
