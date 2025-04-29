import '../styles/LayoutWrapper.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useProject } from '../context/ProjectContext';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
export default function LayoutWrapper({ children, sectionTitle }) {
  const { project } = useProject();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

 

  const handleSignout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setTimeout(() => navigate('/'), 0);  
  };
  
  if (!user) {
    return null;
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <aside className="sidebar">
          <h1>Ques.AI</h1>

          <div className="sidebar-main">
            <nav>
              <button><i className="fas fa-plus"></i> Add your Podcast(s)</button>
              <button><i className="fas fa-edit"></i> Create & Repurpose</button>
              <button><i className="fas fa-podcast"></i> Podcast Widget</button>
              <button><i className="fas fa-rocket"></i> Upgrade</button>
            </nav>
          </div>

          <div className="sidebar-footer">
            <button><i className="fas fa-question-circle"></i> Help</button>
            <div className="sidebar-user">
              <i className="fas fa-user-circle user-avatar"></i>
              <div className="user-info">
                <span className="username">{user.name}</span>
                <span className="useremail">{user.email}</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <div className="header-row">
            <div className="breadcrumb" style={{ fontSize: '16px', fontWeight: '600' }}>
              <i className="fas fa-home"></i>
              <span>Home Page</span>
              <span>/</span>
              <span>{project.name}</span>
              <span>/</span>
              <span className="link">{sectionTitle}</span>
            </div>

            <div className="header-icons">
              <i className="fas fa-bell"></i>
              <i className="fas fa-sign-out-alt" onClick={handleSignout} style={{ cursor: 'pointer' }}></i>
            </div>
          </div>

          <h2 className="section-title">{sectionTitle}</h2>

          {children}
        </main>
      </div>
    </div>
  );
}
