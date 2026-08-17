import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: 'Name is required',
    email: 'Email is required',
    message: 'Message is required'
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  // Basic validation logic
  useEffect(() => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Dispatch sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <section id="contact" className="zine-section">
      <div className="section-header">
        <h2>Dispatch</h2>
        <span className="typewriter-label">PG. 04</span>
      </div>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">YOUR NAME</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">YOUR TELEGRAPH (EMAIL)</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">THE MESSAGE</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.message && errors.message && <span className="error-text">{errors.message}</span>}
          </div>
          <button type="submit" className="btn-zine" disabled={!isFormValid}>
            {isFormValid ? 'SEND DISPATCH' : 'FILL ALL FIELDS'}
          </button>
        </form>
      </div>
      <div style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 700 }}>
        <p>EMAIL: mj24csb0b27@student.nitw.ac.in</p>
        <p>GITHUB: github.com/mayankjalann</p>
        <p>LINKEDIN: linkedin.com/in/mayank-jalan-6b5942341</p>
      </div>
    </section>
  );
};

export default Contact;
