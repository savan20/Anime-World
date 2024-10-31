// AnimeManagement.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AnimeManagement.css';

const AnimeManagement = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [updatedAnime, setUpdatedAnime] = useState({
    name: '',
    image: '',
    languages: [], // Set as an array
    episodes: { current: '', total: '' },
    duration: '',
    videoUrl: '',
  });

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/anime');
        setAnimeList(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching anime:', error);
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  const handleSelectAnime = (anime) => {
    setSelectedAnime(anime);
    setUpdatedAnime({
      name: anime.name,
      image: anime.image,
      languages: anime.languages || [], // Ensure it's an array
      episodes: {
        current: anime.episodes.current,
        total: anime.episodes.total,
      },
      duration: anime.duration,
      videoUrl: anime.videoUrl,
    });
  };

  const handleChange = (e) => {
    if (e.target.name === 'current' || e.target.name === 'total') {
      setUpdatedAnime({
        ...updatedAnime,
        episodes: {
          ...updatedAnime.episodes,
          [e.target.name]: e.target.value,
        },
      });
    } else if (e.target.name === 'languages') {
      // This handles input for languages
      setUpdatedAnime({
        ...updatedAnime,
        languages: e.target.value.split(',').map(lang => lang.trim()), // Split input into an array
      });
    } else {
      setUpdatedAnime({ ...updatedAnime, [e.target.name]: e.target.value });
    }
  };

  const handleUpdateAnime = async (e) => {
    e.preventDefault();
    console.log('Updated Anime:', updatedAnime); // Log to inspect

    try {
      const response = await axios.put(`http://localhost:5000/api/anime/edit/${selectedAnime.name}`, updatedAnime);
      if (response.status === 200) {
        // Update the anime list with the updated anime
        setAnimeList(animeList.map(anime => (anime.name === selectedAnime.name ? updatedAnime : anime)));
        setSelectedAnime(null);
        setUpdatedAnime({
          name: '',
          image: '',
          languages: [], // Reset as an array
          episodes: { current: '', total: '' },
          duration: '',
          videoUrl: '',
        });
      }
    } catch (error) {
      console.error('Error updating anime:', error);
    }
  };

  const handleDeleteAnime = async (name) => {
    try {
      await axios.delete(`http://localhost:5000/api/anime/delete/${name}`);
      setAnimeList(animeList.filter(anime => anime.name !== name));
    } catch (error) {
      console.error('Error deleting anime:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="anime-management">
      <h1 className='h1class'>Anime Management</h1>

      {selectedAnime && (
        <form className='formclass' onSubmit={handleUpdateAnime}>
          <h2 className='h2class'>Update Anime</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={updatedAnime.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={updatedAnime.image}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="languages"
            placeholder="Languages (comma-separated)"
            value={updatedAnime.languages.join(', ')} // Join array for display
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="current"
            placeholder="Current Episodes"
            value={updatedAnime.episodes.current}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="total"
            placeholder="Total Episodes"
            value={updatedAnime.episodes.total}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={updatedAnime.duration}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="videoUrl"
            placeholder="Video URL"
            value={updatedAnime.videoUrl}
            onChange={handleChange}
            required
          />
          <button className='buttonclass' type="submit">Update Anime</button>
          <button type="button" onClick={() => setSelectedAnime(null)}>Cancel</button>
        </form>
      )}

      <h2 className='h2class'>Anime List</h2>
      <ul className='ulclass'>
        {animeList.map((anime) => (
          <li className='liclass' key={anime._id}>
            {anime.name} 
            <div>{anime.episodes.current} / {anime.episodes.total} Episodes</div>
            <div className='button-container'>
              <button className='buttoneditclass' onClick={() => handleSelectAnime(anime)}>Update</button>
              <button className='buttondelclass' onClick={() => handleDeleteAnime(anime.name)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeManagement;
