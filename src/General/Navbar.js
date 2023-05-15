import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/');

  function handleLinkClick(link) {
    setActiveLink(link);
  }

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(currentPath);
  }, [location]);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={activeLink === '/home' ? 'navbar-item active' : 'navbar-item'}>
          <Link to="/home" onClick={() => handleLinkClick('/home')}>
            About
          </Link>
        </li>
        <li className={activeLink === '/login' ? 'navbar-item active' : 'navbar-item'}>
        <Link to="/login" onClick={() => handleLinkClick('/login')}>
            Login
        </Link>
        </li>
        <li className={activeLink === '/signup' ? 'navbar-item active' : 'navbar-item'}>
        <Link to="/signup" onClick={() => handleLinkClick('/signup')}>
            Signup
        </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
