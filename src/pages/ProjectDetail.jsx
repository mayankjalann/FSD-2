import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className="zine-section" style={{ textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <Link to="/projects" className="btn-zine">BACK TO INDEX</Link>
      </section>
    );
  }

  return (
    <section className="zine-section">
      <div className="section-header">
        <h2>{project.title}</h2>
        <span className="typewriter-label">PROJECT NO. {project.id}</span>
      </div>
      <div className="about-grid">
        <div className="about-image-wrapper">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="about-content">
          <p>{project.description}</p>
          <div style={{ marginTop: '2rem' }}>
            <span className="typewriter-label">TECH STACK</span>
            <ul className="tech-stack-list">
              {project.techStack.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-zine">
              VIEW ON GITHUB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
