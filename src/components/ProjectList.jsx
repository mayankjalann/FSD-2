import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projectsData }) => {
  return (
    <div className="project-grid">
      {projectsData.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
