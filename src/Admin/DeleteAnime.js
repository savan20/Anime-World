// src/Admin/DeleteAnime.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DeleteAnime.css'; // Import your CSS file for styling

const DeleteAnime = () => {
  const { name } = useParams(); // Get the anime name from the URL parameters
  const navigate = useNavigate(); // For redirecting after deletion
  const [animeData, setAnimeData] = useState(null);

  // Fetch the anime data (optional: for confirmation purposes)
  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/anime/${name}`);
        setAnimeData(response.data);
      } catch (error) {
        console.error('Error fetching anime data:', error);
        alert('Failed to fetch anime data');
      }
    };

    fetchAnimeData();
  }, [name]);

  // Handle the delete action
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming JWT is stored in localStorage

      const response = await axios.delete(`http://localhost:5000/api/anime/delete/${name}`, animeData, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token for authentication
        },
      });

      if (response.status === 200) {
        alert('Anime deleted successfully');
        navigate('/admin'); // Redirect to admin page or any other route after deletion
      }
    } catch (error) {
      console.error('Error deleting anime:', error);
      alert('Failed to delete anime');
    }
  };

  return (
    <div className="delete-anime-container">
      {animeData ? (
        <>
          <h1>Delete Anime</h1>
          <p>Are you sure you want to delete the anime <strong>{animeData.name}</strong>?</p>
          <button onClick={handleDelete} className="delete-btn">Delete</button>
          <button onClick={() => navigate('/admin')} className="cancel-btn">Cancel</button>
        </>
      ) : (
        <p>Loading anime details...</p>
      )}
    </div>
  );
};

export default DeleteAnime;
