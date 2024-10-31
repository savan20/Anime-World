import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeCard from './AnimeCard'; // Import the AnimeCard component
import './AnimeList.css'; // Optional: Add styling for your anime list

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch the anime list from the backend
  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/anime'); // Replace with correct backend endpoint
        setAnimeList(response.data); // Set the fetched anime data in state
      } catch (error) {
        console.error('Error fetching anime list:', error);
      }
    };

    fetchAnimeList();
  }, []);

  const handleCardClick = () => {
    setIsPaused((prev) => !prev); // Toggle pause state without delay
  };

  return (
    <div className="anime-list-container">
      <h1>Anime List</h1>
      <div 
        className={`anime-list-grid ${isPaused ? 'paused' : ''}`} 
        onClick={handleCardClick} // Pause or resume on click
      >
        {animeList.length > 0 ? (
          animeList.map((anime) => (
            <AnimeCard
              key={anime._id}
              image={anime.image}
              name={anime.name}
              languages={anime.languages}
              episodes={anime.episodes}
              duration={anime.duration}
              videoUrl={anime.videoUrl}
            />
          ))
        ) : (
          <p>No anime available</p>
        )}
      </div>
    </div>
  );
};

export default AnimeList;
