import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';

export const projects = [
  {
    id: '1',
    title: 'Placxia',
    description: 'A multi-tenant collegiate placement and recruitment platform serving universities with Role-Based Access Control and a MERN stack architecture.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Redux Toolkit', 'Tailwind CSS'],
    image: project1Img,
    link: 'https://github.com/mayankjalann/placxia'
  },
  {
    id: '2',
    title: 'FinOps Cloud System',
    description: 'A Python and SQL-based cost optimization system utilizing normalized relational databases to track and reduce cloud resource waste.',
    techStack: ['Python', 'SQLite', 'SQL', 'Triggers', 'Stored Procedures', 'Analytical Queries'],
    image: project2Img,
    link: 'https://github.com/mayankjalann/finops-cloud'
  },
  {
    id: '3',
    title: 'AI Resume Builder',
    description: 'An ATS-optimized resume generator integrating the Google Gemini API for content and ImageKit for background removal.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Google Gemini API', 'ImageKit'],
    image: project3Img,
    link: 'https://github.com/mayankjalann/ai-resume-builder'
  }
];
