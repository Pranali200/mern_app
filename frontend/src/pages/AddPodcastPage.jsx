import '../styles/AddPodcast.css'; // your CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import { useLocation } from 'react-router-dom'

export default function AddPodcastPage() {
  const location = useLocation();
  const { project } = location.state
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <div className="page-container">
      <div className="page-content">
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

        <main className="main-content">
<div className="breadcrumb">
  <i className="fas fa-home"></i>
  <span>Home</span>
  <span>/</span>
  <span>{project.name}</span>
  <span>/</span>
  <span className="link">Add your podcast</span>
</div>



          {/* Section Title */}
          <h2 className="section-title">Add Podcast</h2>

          {/* Options */}
          <div className="options-grid">
            <div className="option-card">
              <i className="fas fa-rss fa-2x"></i>
              <h3>RSS Feed</h3>
              <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
            </div>

            <div className="option-card">
              <i className="fab fa-youtube fa-2x"></i>
              <h3>Youtube Video</h3>
              <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
            </div>

            <div className="option-card">
              <i className="fas fa-upload fa-2x"></i>
              <h3>Upload Files</h3>
              <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
            </div>
          </div>

          {/* Upload Box */}
          <div className="upload-box">
            <i className="fas fa-cloud-upload-alt fa-3x" style={{ color: '#6b21a8', marginBottom: '1rem' }}></i>
            <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
            <p className="upload-info">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
            <label className="upload-button">
              Select File
              <input type="file" className="hidden-input" onChange={handleFileSelect} />
            </label>
          </div>
        </main>
      </div>
    </div>
  );
}
