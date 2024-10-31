// src/GenrePages/Comedy.js
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AnimeCard from '../Components/AnimeCard';
import './GenrePage.css'; // Common CSS file for genre pages

const comedyAnimeList = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg', // Replace with actual image URL
    name: 'Attack on Titan',
    languages: ['ENG', 'SPAN' , 'JAP', ],
    episodes: { current: 12, total: 24 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 2,
    image: 'https://dw9to29mmj727.cloudfront.net/products/1974740935.jpg', // Replace with actual image URL
    name: 'Naruto Shippuden',
    languages: ['ENG', 'HI' , 'JAP', 'TA' , 'ML' ],
    episodes: { current: 150, total: 500 },
    duration: 23,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 3,
    image: 'https://w0.peakpx.com/wallpaper/373/945/HD-wallpaper-deathnote-anime-japan-thumbnail.jpg', // Replace with actual image URL
    name: 'Death Note',
    languages: ['ENG', 'SPAN' , 'JAP', ],
    episodes: { current: 37, total: 37 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 4,
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgNP-p6q_lHAyo1FBRjaJfIVcfMzhXt0YNve6VFt0C3ciYGpFML_y7-b06yaEqwzt0hcetuxMooVHQ1e3zdVWQwHJtlOSbrjUphMgK8GDF7K4i1q9j31DePai_PQU2nX1uR8IQCd2Qc5fEm8MTZ8ePXNXcxTZUIundeHbGlaj8JAlVac6V2rOZqyrmPgQ8', // Replace with actual image URL
    name: 'One Piece',
    languages: ['ENG', 'HI' , 'JAP', 'TA' , 'ML' , 'TE' ],
    episodes: { current: 1074, total: 1074 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 5,
    image: 'https://e1.pxfuel.com/desktop-wallpaper/698/687/desktop-wallpaper-jujutsu-kaisen-phone-jujutsu-kaisen-all.jpg', // Replace with actual image URL
    name: 'Jujutsu Kaisen',
    languages: ['ENG', 'HI' , 'JAP', 'TA' , 'TE' ],
    episodes: { current: 35, total: 35 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnHg8XJspAjQ3EbEEcb5-NHEd8VWkSVXsEA&s', // Replace with actual image URL
    name: 'One Punch Man',
    languages:['ENG', 'HI' , 'JAP', 'TA' , 'ML' ],
    episodes: { current: 24, total: 24 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 7,
    image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg', // Replace with actual image URL
    name: 'Naruto',
    languages:['ENG', 'HI' , 'JAP', 'TA' , 'ML' ],
    episodes: { current: 148, total: 148 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 8,
    image: 'https://i.pinimg.com/originals/cc/f2/8a/ccf28a990d5bb896af037ba1f400a990.jpg', // Replace with actual image URL
    name: 'Solo Leveling',
    languages: ['ENG', 'HI' , 'JAP', 'TA' , 'ML' ],
    episodes: { current: 12, total: 12 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 9,
    image: 'https://c4.wallpaperflare.com/wallpaper/898/669/318/hollow-bleach-kurosaki-ichigo-hollow-ichigo-1046x1622-anime-bleach-hd-art-wallpaper-preview.jpg', // Replace with actual image URL
    name: 'Bleach',
    languages: ['ENG', 'SPAN' , 'JAP', ],
    episodes: { current: 366, total: 366 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 10,
    image: 'https://w0.peakpx.com/wallpaper/480/781/HD-wallpaper-asta-anime-asta-demon-black-black-clover-demon-espada-japan-manga-thumbnail.jpg', // Replace with actual image URL
    name: 'Black Clover',
    languages: ['ENG', 'SPAN' , 'JAP', ],
    episodes: { current: 51, total: 51 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 11,
    image: 'https://w0.peakpx.com/wallpaper/31/529/HD-wallpaper-hinata-shoyo-anime-haikyuu-hinata-volei-voleibol-thumbnail.jpg', // Replace with actual image URL
    name: 'Haikyu',
    languages: ['ENG', 'HI' , 'JAP', ],
    episodes: { current: 25, total: 25 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  },
  {
    id: 12,
    image: 'https://img.freepik.com/premium-photo/man-with-red-shirt-that-says-go-it_1308172-269555.jpg?semt=ais_hybrid', // Replace with actual image URL
    name: 'Dragon Ball',
    languages: ['ENG', 'SPAN' , 'JAP', ],
    episodes: { current: 366, total: 366 },
    duration: 24,
    videoUrl:'https://youtu.be/tE6kJryE_uc'
  }
  
];

const Comedy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (term) => {
      setSearchTerm(term);
    };
  
    // Filter the anime list based on the search term
    const filteredcomedyAnime = comedyAnimeList.filter((anime) =>
      anime.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="genre-page">
      <Navbar onSearch={handleSearch} />
      <div className="genre-header">
        <h1>Comedy Anime</h1>
        <p>Enjoy the light-hearted and humorous side of anime with our comedy collection.</p>
      </div>

      <div className="anime-list">
        {filteredcomedyAnime.length > 0 ? (
          filteredcomedyAnime.map((anime) => (
            <AnimeCard
              key={anime.id}
              image={anime.image}
              name={anime.name}
              languages={anime.languages}
              episodes={anime.episodes}
              duration={anime.duration}
              videoUrl={anime.videoUrl}
            />
          ))
        ) : (
          <p>No comedy anime found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Comedy;
