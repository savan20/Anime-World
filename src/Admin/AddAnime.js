// src/Admin/AddAnime.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddAnime.css';

const AddAnime = () => {
  const [animeData, setAnimeData] = useState({
    name: '',
    image: '',
    languages: '',
    episodes: {
      current: '',
      total: '',
    },
    duration: '',
    videoUrl: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested episodes fields separately
    if (name.includes('episodes')) {
      const [key, field] = name.split('.');
      setAnimeData((prevState) => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          [field]: Number(value),  // Convert to number since it's episode count
        }
      }));
    } else {
      setAnimeData({
        ...animeData,
        [name]: name === 'duration' ? Number(value) : value, // Ensure duration is a number
      });
    }
    
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/anime/add-anime', animeData);  // Assuming you have an endpoint for this
      console.log('Anime added:', response.data);
      // You can reset form or redirect after successful submission
      setAnimeData({
        name: '',
        image: '',
        languages: '',
        episodes: { current: '', total: '' },
        duration: '',
        videoUrl: '',
      });
      if (response.status === 201) {
        alert('Anime added successfully');
      }
    } catch (error) {
      console.error('Error adding anime:', error);
      alert('Failed to update anime');
    }
  };

  return (
    <div className="add-anime-container">
      <h1>Add Anime</h1>
      <form onSubmit={handleSubmit} className="add-anime-form">
        <input
          type="text"
          name="name"
          value={animeData.name}
          onChange={handleChange}
          placeholder="Anime Name"
          required
        />
        <input
          type="text"
          name="image"
          value={animeData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          type="text"
          name="languages"
          value={animeData.languages}
          onChange={handleChange}
          placeholder="Languages (comma separated)"
          required
        />
        <input
          type="number"
          name="episodes.current"
          value={animeData.episodes.current}
          onChange={handleChange}
          placeholder="Current Episodes"
          required
        />
        <input
          type="number"
          name="episodes.total"
          value={animeData.episodes.total}
          onChange={handleChange}
          placeholder="Total Episodes"
          required
        />
        <input
          type="number"
          name="duration"
          value={animeData.duration}
          onChange={handleChange}
          placeholder="Duration (in minutes)"
          required
        />
        <input
          type="text"
          name="videoUrl"
          value={animeData.videoUrl}
          onChange={handleChange}
          placeholder="Video URL"
        />
        <button type="submit" className="submit-btn">Add Anime</button>
      </form>
    </div>
  );
};

export default AddAnime;
