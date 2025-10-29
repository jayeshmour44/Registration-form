import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  // Load username when component mounts
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.clear(); // remove all stored data
    navigate('/'); // navigate to form
  };

  return (
    <header className="header">
      {/* Left section */}
      <div className="left-section">
        <h1>My Dashboard</h1>
      </div>

      {/* Middle section (Search) */}
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div>

      {/* Right section (User Info + Logout) */}
      <div className="right-section">
        <div className="notification">
          <span className="bell">🔔</span>
          <span className="badge">5</span>
        </div>

        <div className="user-profile">
          <span className="username">
            {userName ? `Hi, ${userName}` : 'Hi, User'}
          </span>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
