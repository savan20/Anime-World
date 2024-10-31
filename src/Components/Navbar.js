import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Make sure to style the navbar appropriately

function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false); // State for the genre dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Check session on component mount
  useEffect(() => {
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  // Handle logout function
  const handleLogout = () => {
    sessionStorage.removeItem('userSession'); // Remove session data
    setIsLoggedIn(false);
    navigate('/'); // Redirect to login page
  };

  // Handlers for opening/closing the genre dropdown
  const handleMouseEnter = () => {
    setIsGenreMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsGenreMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-logo">
        <div className="navbar-brand">AnimeWorld</div>
      </ul>

      <ul className="navbar-menu">
        <li>
          <Link to="/App" className="nav-item">Home</Link>
        </li>

        {/* Genre Dropdown */}
        <li className="nav-item genre-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span>Genres</span>
          {isGenreMenuOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/Action">Action</Link></li>
              <li><Link to="/Adventure">Adventure</Link></li>
              <li><Link to="/Comedy">Comedy</Link></li>
              <li><Link to="/Drama">Drama</Link></li>
            </ul>
          )} 
        </li>
        <li>
          <Link to="/about" className="nav-item">About</Link>
        </li>
        <li>
          <Link to="/help" className="nav-item">Help</Link>
        </li>
        <li className="search-container">
          <input 
            type="text" 
            placeholder="Search for Anime..." 
            className="search-bar" 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </li>

        <div className="navbar-right">
        <button onClick={handleLogout} className="logout-link">Logout</button>
          {/* {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-link">Logout</button>
          ) : null} Fix: Remove the incomplete else block */}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
