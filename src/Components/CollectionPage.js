import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CollectionPage.css';

const CollectionPage = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    const userId = userSession?.userId;

    if (userId) {
      fetchCollection(userId);
    }
  }, []);

  const fetchCollection = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/collection/get-collection/${userId}`);
      setCollection(response.data);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
  };

  return (
    <div className="collection-page">
      <h1>Your Collection</h1>
      <div className="anime-collection">
        {collection.length ? (
          collection.map((item) => (
            <div key={item._id} className="anime-item">
              <img src={item.anime.image} alt={item.anime.name} />
              <h3>{item.anime.name}</h3>
            </div>
          ))
        ) : (
          <p>Your collection is empty</p>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
