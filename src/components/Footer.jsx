import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="zine-footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="typewriter-label">ENGINEER</span>
          <p className="footer-brand">MAYANK JALAN.</p>
        </div>
        <div className="footer-center">
          <p>PRINTED & CODED BY HAND</p>
          <p>&copy; 2026 MAYANK JALAN</p>
        </div>
        <div className="footer-right">
          <span className="typewriter-label">LINKS</span>
          <div className="footer-links">
            <a href="https://github.com/mayankjalann" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href="https://linkedin.com/in/mayank-jalan-6b5942341" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <Link to="/contact">DISPATCH</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom-border"></div>
    </footer>
  );
};

export default Footer;
