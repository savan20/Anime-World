// AnimeCard.js
import React from 'react';
import './AnimeCard.css';
import axios from 'axios';

const AnimeCard = ({ image, name, languages = [], episodes, duration, videoUrl }) => {
  const handleWatchNowClick = () => {
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    } else {
      alert('Video URL not available');
    }
  };

  // Retrieve user session to get the userId
  const userSession = JSON.parse(sessionStorage.getItem('userSession'));
  const userId = userSession?.userId;

  const handleAddToList = async () => {
    if (!userId) {
      alert('You need to be logged in to add to your collection.');
      return;
    }

    try {
      const animeData = { name, image, languages, episodes, duration, videoUrl };
      const response = await axios.post('http://localhost:5000/api/collection/add-to-collection', {
        userId,
        anime: animeData,
      });

      if (response.status === 201) {
        alert('Anime added to your collection');
      }
    } catch (error) {
      console.error('Error adding anime to collection:', error);
      alert('Failed to add anime to collection');
    }
  };

  return (
    <div className="anime-card">
      <div className="anime-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="anime-details">
        <h2 className="anime-name">{name}</h2>
        <p className="anime-info1">
          <strong>Languages:</strong> {languages.length > 0 ? languages.join('/ ') : 'N/A'}
        </p>
        <p className="anime-info1">
          <strong>Episodes:</strong> {episodes?.current || 0} / {episodes?.total || 0}
        </p>
        <p className="anime-info1">
          <strong>Duration:</strong> {duration} min
        </p>
        <div className="anime-actions">
          <button className="watch-now-btn" onClick={handleWatchNowClick}>
            Watch Now
          </button>
          {/* <button className="add-to-list-btn" onClick={handleAddToList}>
            + Add to List
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
