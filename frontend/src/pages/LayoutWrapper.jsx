// src/components/LayoutWrapper.jsx
import '../styles/AddPodcast.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation } from 'react-router-dom';

export default function LayoutWrapper({ children, sectionTitle }) {
  const location = useLocation();
  const { project } = location.state || { project: { name: 'Unknown Project' } };

  return (
    <div className="page-container">
      <div className="page-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h1>Ques.AI</h1>
          <nav>
            <button><i className="fas fa-plus"></i> Add your Podcast(s)</button>
            <button><i className="fas fa-edit"></i> Create & Repurpose</button>
            <button><i className="fas fa-podcast"></i> Podcast Widget</button>
            <button><i className="fas fa-rocket"></i> Upgrade</button>
          </nav>

          <div className="sidebar-footer">
            <button><i className="fas fa-question-circle"></i> Help</button>
            <div className="sidebar-user">
              <i className="fas fa-user-circle user-avatar"></i>
              <div className="user-info">
                <p className="username">Username</p>
                <p className="useremail">username@gmail.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="breadcrumb">
            <i className="fas fa-home"></i>
            <span>Home</span>
            <span>/</span>
            <span>{project.name}</span>
            <span>/</span>
            <span className="link">{sectionTitle}</span>
          </div>

          <h2 className="section-title">{sectionTitle}</h2>

          {/* Dynamic Children */}
          {children}
        </main>
      </div>
    </div>
  );
}
