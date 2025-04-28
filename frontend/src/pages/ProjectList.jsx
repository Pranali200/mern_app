import { useNavigate } from 'react-router-dom';
import '../styles/CreateProjectPage.css'; 


export default function ProjectList({ projects }) {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate('/addpodcast', { state: { project } });
};

  return (
    <div className="project-grid">
      {projects.map((project) => (
  <div 
    className="project-card" 
    key={project._id}
    onClick={() => handleProjectClick(project)} 
    style={{ cursor: 'pointer' }} 
  >
    <div className="project-initials">
      {project.name.slice(0,2).toUpperCase()}
    </div>
    <div className="project-info">
      <h2 className="project-name">{project.name}</h2>
      <p className="project-files">{project.files} Files</p>
      <p className="project-last-edited">Last edited recently</p>
    </div>
  </div>
))}
    </div>
  );
}
