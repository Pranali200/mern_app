import '../styles/CreateProjectPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';
import CreateProjectPopup from '../component/CreateProjectPopup';
import { getprojects } from '../service/projectService';
import { useUser } from '../context/UserContext';
import ProjectList from '../component/ProjectList';
import cuate from '../images/cuate.png'

export default function CreateProjectPage() {
    const [showPopUP, setShowPopUp] = useState(false);
    const [projects, setProjects] = useState([]);
    const { user } = useUser();

    const fetchProjects = async () => {
        try {
            const data = await getprojects(user._id);
            setProjects(data.projects || []);
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        }
    };

    useEffect(() => {
        if (user && user._id) {
            fetchProjects();
        }
    }, [user]);

    const handleCreateProjectClick = () => {
        setShowPopUp(true);
    };

    const handleClose = () => {
        setShowPopUp(false);
    };

    const handleCreateProject = () => {
        console.log("project created");
        setShowPopUp(false);
        fetchProjects();
    };

    return (
        <div className="create-project-container">
            <header className="header">
                <div className="logo">Ques.<span>AI</span></div>
                <div className="header-icons">
                    <i className='fas fa-cog'></i>
                    <i className='fas fa-bell'></i>
                </div>
            </header>

            <main className="main-content">
                {projects.length === 0 ? (
                    <>
                        <h1 style={{ textAlign: 'center' }}>Create a New Project</h1>

                        
                        <img
                            src={cuate}
                            alt="Create Project Illustration"
                            className="illustration"
                        />
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <button onClick={handleCreateProjectClick} className="create-button">
                            + Create New Project
                        </button>
                    </>
                ) : (
                    <>

<div className="projects-header">
  <h1>Projects</h1>
  <button onClick={handleCreateProjectClick} className="create-button">
    + Create New Project
  </button>
</div>

<div className="projects-section">
  <ProjectList projects={projects} />
</div>

</>

                  
                )}

                {showPopUP && (
                    <CreateProjectPopup onClose={handleClose} onCreate={handleCreateProject} />
                )}
            </main>
        </div>
    );
}
