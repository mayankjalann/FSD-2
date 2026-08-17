import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="zine-section" style={{ textAlign: 'center' }}>
      <h1>404</h1>
      <p style={{ marginBottom: '2rem' }}>Page Not Found. The signal was lost.</p>
      <Link to="/" className="btn-zine">RETURN TO BASE</Link>
    </section>
  );
};

export default NotFound;
