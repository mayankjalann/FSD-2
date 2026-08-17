import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="zine-header">
      <nav>
        <Link to="/" className="logo">VOLUME I.</Link>
        <ul className="nav-links">
          <li><NavLink to="/">MANIFESTO</NavLink></li>
          <li><NavLink to="/about">THE MAKER</NavLink></li>
          <li><NavLink to="/projects">INDEX</NavLink></li>
          <li><NavLink to="/contact">DISPATCH</NavLink></li>
          <li>
            <button onClick={toggleTheme}>
              {isDarkMode ? 'LIGHT MODE' : 'NIGHT MODE'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
