import React from 'react';
import ProjectList from '../components/ProjectList';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="zine-section">
      <div className="section-header">
        <h2>Project Index</h2>
        <span className="typewriter-label">PG. 03</span>
      </div>
      
      {/* 
        Passing 'projects' to ProjectList, which in turn passes it to ProjectCard.
        This demonstrates prop drilling at least 2 levels deep. 
      */}
      <ProjectList projectsData={projects} />
      
    </section>
  );
};

export default Projects;
