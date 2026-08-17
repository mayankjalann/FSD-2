import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="zine-card">
      <div className="card-image-wrapper">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="card-content">
        <span className="typewriter-label">NO. 00{project.id}</span>
        <h3>{project.title}</h3>
        
        {showDetails ? (
          <>
            <p>{project.description}</p>
            <ul className="tech-stack-list">
              {project.techStack.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>{project.description.substring(0, 50)}...</p>
        )}

        <div className="card-actions">
          <button 
            className="btn-zine" 
            style={{ width: '100%', marginBottom: '0.5rem' }} 
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'HIDE DETAILS' : 'VIEW DETAILS'}
          </button>
          
          <Link to={`/projects/${project.id}`} className="btn-zine" style={{ width: '100%' }}>
            READ MORE
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
