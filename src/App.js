import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
// import NewAnimeSlider from './Components/NewAnimeSlider';
// import AboutPage from './About/About'; // Correct the path and filename
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SearchResults from './pages/SearchResults';
import  { useState } from 'react';
import AnimeList from './Components/AnimeList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const newAnimes = [
    {
      id: 10,
      image: 'https://4kwallpapers.com/images/walls/thumbs_2t/18414.jpeg',
      name: 'Demon Slayer',
      languages: ['ENG', 'JAP', 'FREN'],
    },
    {
      id: 11,
      image: 'https://c4.wallpaperflare.com/wallpaper/556/140/961/chainsaw-man-denji-chainsaw-man-tatsukifujimoto-mappa-building-hd-wallpaper-preview.jpg',
      name: 'Chainsaw Man',
      languages: ['ENG', 'JAP', 'SPA'],
    },
    {
      id: 12,
      image: 'https://wallpapers.com/images/high/my-hero-academia-4k-fight-scene-gwl0rnw8sflhp1vn.webp',
      name: 'My Hero Academia',
      languages: ['ENG', 'JAP'],
    },
    // More new anime releases
  ];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App1">
      <Navbar onSearch={handleSearch} />
      {/* <NewAnimeSlider newAnimes={newAnimes} /> */}
      <div className="content">
        <div className="anime-list">
        <AnimeList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

