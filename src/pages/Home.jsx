import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading sequence as required
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="intro" className="zine-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <h2 style={{ fontFamily: 'var(--font-mono)' }}>LOADING...</h2>
      </section>
    );
  }

  return (
    <section id="intro" className="zine-section">
      <span className="typewriter-label">ISSUE NO. 01 — COMPUTER SCIENCE</span>
      <h1>Mayank Jalan.</h1>
      <p>Computer Science & Engineering student at NIT Warangal. Specializing in Full Stack Development, Cloud Infrastructure, and AI Integration.</p>
      <Link to="/projects" className="btn-zine">READ THE INDEX</Link>
    </section>
  );
};

export default Home;
