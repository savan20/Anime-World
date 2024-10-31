// // src/GenrePages/Action.js
// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import AnimeCard from '../Components/AnimeCard';
// import './GenrePage.css'; // Common CSS file for genre pages

// const actionAnimeList = [
//   // Add specific Action anime here or use general animeList
// ];

// const Action = () => {
//   return (
//     <div className="genre-page">
//       <Navbar />
//       <div className="genre-header">
//         <h1>Action Anime</h1>
//         <p>Experience the thrill and excitement of action-packed anime series and movies.</p>
//       </div>
//       <div className="anime-list">
//         {actionAnimeList.length > 0 ? (
//           actionAnimeList.map((anime) => (
//             <AnimeCard
//               key={anime.id}
//               image={anime.image}
//               name={anime.name}
//               languages={anime.languages}
//               episodes={anime.episodes}
//               duration={anime.duration}
//             />
//           ))
//         ) : (
//           <p>No action anime found</p>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Action;
