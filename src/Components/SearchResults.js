// src/components/SearchResults.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import './SearchResults.css'; // Create a CSS file for styling

const SearchResults = () => {
  const [animes, setAnimes] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (searchQuery) {
      fetchAnimeData(searchQuery);
    }
  }, [searchQuery]);

  const fetchAnimeData = async (query) => {
    // Simulate fetching data from an API
    const sampleData = [
      { title: 'Naruto', description: 'A story about a ninja...', imageUrl: 'https://example.com/naruto.jpg' },
      { title: 'Attack on Titan', description: 'Humans vs Titans...', imageUrl: 'https://example.com/aot.jpg' },
      // Add more mock data or replace with real API call
    ];

    // Filter sample data for demonstration purposes
    const filteredData = sampleData.filter((anime) =>
      anime.title.toLowerCase().includes(query.toLowerCase())
    );
    setAnimes(filteredData);
  };

  return (
    <div className="search-results">
      {animes.length ? (
        animes.map((anime, index) => (
          <div key={index} className="anime-card">
            <img src={anime.imageUrl} alt={anime.title} className="anime-image" />
            <div className="anime-info">
              <h2>{anime.title}</h2>
              <p>{anime.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No results found for "{searchQuery}".</p>
      )}
    </div>
  );
};

export default SearchResults;
