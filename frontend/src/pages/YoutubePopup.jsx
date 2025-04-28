
import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa'; 
import { useLocation } from 'react-router-dom';
import {uploadYoutubePodcast} from '../service/podcastService'
export default function YoutubePopup({ onClose }) {
  const [name, setName] = useState('');
  const [videoUrl, setvideoUrl] = useState('');
  const location = useLocation();
  const { project } = location.state
  let projectId= project._id;


  const handleUpload = () => {
    if (!projectId || !name || !videoUrl) {
      console.warn('Missing required fields for upload.');
      return;
    }
  
    uploadYoutubePodcast(projectId, name, videoUrl);
    console.log('Uploaded:', { projectId, name, videoUrl });
    onClose();
  };
  

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <div className="popup-title">
            <FaYoutube size={24} color="#FF0000" style={{ marginRight: '8px' }} />
            <h2>Upload from Youtube</h2>
          </div>
          <button className="popup-close" onClick={onClose}>×</button>
        </div>

        <div className="popup-content">
          <label className="popup-label">Name</label>
          <input
            type="text"
            className="popup-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />

          <label className="popup-label" style={{ marginTop: '1rem' }}>Link</label>
          <textarea
            className="popup-textarea"
            value={videoUrl}
            onChange={(e) => setvideoUrl(e.target.value)}
            placeholder="Enter link"
            rows="4"
          />
        </div>

        <div className="popup-buttons" style={{ justifyContent: 'flex-end' }}>
          <button onClick={handleUpload} className="upload-button">Upload</button>
        </div>
      </div>
    </div>
  );
}
