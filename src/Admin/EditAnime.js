// src/Admin/EditAnime.js
import React, {  useState } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import './EditAnime.css'; // Import your CSS file for styling

const EditAnime = () => {
  // const { name } = useParams(); // Get the anime name from the URL parameters
  const [animeData, setAnimeData] = useState({
    name: '',
    image: '',
    languages: '',
    episodes: { current: '', total: '' },
    duration: '',
    videoUrl: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('episodes')) {
      setAnimeData((prevData) => ({
        ...prevData,
        episodes: { ...prevData.episodes, [name.split('.')[1]]: value },
      }));
    } else {
      setAnimeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission to update anime
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Assuming JWT is stored in localStorage

      const response = await axios.put(`http://localhost:5000/api/anime/edit/${animeData.name}`, animeData, {
        headers: {
          'Authorization': `Bearer ${token}`, // Send token for authentication
        },
      });

      if (response.status === 200) {
        alert('Anime updated successfully');
      }
      // You can reset form or redirect after successful submission
      setAnimeData({
        name: '',
        image: '',
        languages: '',
        episodes: { current: '', total: '' },
        duration: '',
        videoUrl: '',
      });
      } catch (error) {
        console.error('Error updating anime:', error);
        alert('Failed to update anime');
    }
  };

  return (
    <div className="edit-anime-container">
      <h1>Edit Anime</h1>
      <form onSubmit={handleSubmit} className="edit-anime-form">
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
        />
        <input
          type="text"
          name="languages"
          value={animeData.languages}
          onChange={handleChange}
          placeholder="Languages (comma separated)"
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
        />
        <input
          type="number"
          name="duration"
          value={animeData.duration}
          onChange={handleChange}
          placeholder="Duration (in minutes)"
        />
        <input
          type="text"
          name="videoUrl"
          value={animeData.videoUrl}
          onChange={handleChange}
          placeholder="Video URL"
        />
        <button type="submit" className="submit-btn">Update Anime</button>
      </form>
    </div>
  );
};

export default EditAnime;
