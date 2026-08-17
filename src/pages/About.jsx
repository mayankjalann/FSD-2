import React, { useState } from 'react';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  const [imagePreview, setImagePreview] = useState(profileImg);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <section id="about" className="zine-section">
      <div className="section-header">
        <h2>The Maker</h2>
        <span className="typewriter-label">PG. 02</span>
      </div>
      <div className="about-grid">
        <div className="about-image-wrapper">
          <img 
            id="profile-pic" 
            src={imagePreview} 
            alt="Mayank Jalan Profile" 
            onError={(e) => {
              e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22400%22%20viewBox%3D%220%200%20400%20400%22%3E%3Crect%20fill%3D%22%23F5F2ED%22%20width%3D%22400%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%231B3022%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20dy%3D%2210.5%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3EIMAGE%20NOT%20FOUND%3C%2Ftext%3E%3C%2Fsvg%3E";
            }}
          />
          <label htmlFor="image-upload" className="upload-label">SELECT YOUR PHOTO</label>
          <input 
            type="file" 
            id="image-upload" 
            accept="image/*" 
            onChange={handleImageUpload} 
          />
        </div>
        <div className="about-content">
          <p>I am a B.Tech student studying Computer Science and Engineering (CGPA 9.85), with a Minor in Management, at the National Institute of Technology, Warangal.</p>
          <p>My core stack includes the MERN stack (MongoDB, Express, React, Node.js), Python, SQL, and Tailwind CSS. I am currently an Executive Member of the International Students Working Group (ISWG) and a recipient of the MEA Scholarship (Govt. of India).</p>
        </div>
      </div>
    </section>
  );
};

export default About;
