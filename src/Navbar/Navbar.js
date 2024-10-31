import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';


function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const handleRegisterRedirect = () => {
    navigate('/Registration'); // Navigate to the Registration page
  };

  const handleLoginRedirect = () => {
    navigate('/Login'); // Navigate to the Login page
  };

  

 

  return (
    <nav className="navbar">
      <ul className="navbar-logo">
        <div className="navbar-brand">AnimeWorld</div>
      </ul>

      <ul className="navbar-menu">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/Login" className="nav-item">General</Link>
        </li>
        <li>
          <Link to="/Login" className="nav-item">Series</Link>
        </li>
        <li>
          <Link to="/Login" className="nav-item">About</Link>
        </li>
        <li>
          <Link to="/help" className="nav-item">Help</Link>
        </li>
        
        

        <li className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar" 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </li>
        
        <div className="navbar-right">
          <button onClick={handleLoginRedirect} className="login-link">Login</button>
          <button onClick={handleRegisterRedirect} className="sign-up-btn">Sign Up</button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
